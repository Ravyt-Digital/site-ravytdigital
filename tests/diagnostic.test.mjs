import test from 'node:test';import assert from 'node:assert/strict';import vm from 'node:vm';import ts from 'typescript';import {readFileSync} from 'node:fs';import {createRequire} from 'node:module';import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';
import * as diagnostic from '../lib/diagnostic.mjs';import {initialState,quizReducer,questions,classify,validPhone,formatPhone,contactErrors,leadFields,submitLead} from '../lib/diagnostic.mjs';
const require=createRequire(import.meta.url);
function loadComponent(file,dependencies,extra={}){const exports={};const code=ts.transpileModule(readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText;vm.runInNewContext(code,{exports,require:name=>dependencies[name]??require(name),console,FormData,fetch,window:{},HTMLDetailsElement:class{},...extra});return exports.default;}
const ContactForm=loadComponent('components/ContactForm.tsx',{'@/lib/diagnostic.mjs':diagnostic,'./HCaptcha':{__esModule:true,default:()=>null},'@/lib/utm':{readUtms:()=>({})}});
test('quiz requires a valid choice, preserves answers when reversing and completes only after five answers',()=>{
 let s=quizReducer(initialState,{type:'start'});assert.equal(s.stage,'questions');assert.deepEqual(quizReducer(s,{type:'next'}),s);assert.deepEqual(quizReducer(s,{type:'select',value:99}),s);
 for(let i=0;i<5;i++){assert.equal(s.step,i);s=quizReducer(s,{type:'select',value:1});s=quizReducer(s,{type:'next'});}
 assert.equal(s.stage,'result');assert.equal(s.answers.filter(x=>x!==null).length,5);s=quizReducer(s,{type:'back'});assert.equal(s.step,4);s=quizReducer(s,{type:'back'});assert.equal(s.step,3);assert.equal(s.answers[3],1);s=quizReducer(s,{type:'select',value:0});assert.equal(s.answers[4],1);assert.equal(initialState.answers[3],null);
});
test('all 768 answer combinations produce valid honest results, with differentiated categories and regional handling',()=>{
 const categories=new Set();let count=0;
 for(let a=0;a<4;a++)for(let b=0;b<4;b++)for(let c=0;c<4;c++)for(let d=0;d<4;d++)for(let e=0;e<3;e++){const r=classify([a,b,c,d,e]);categories.add(r.category);assert.equal(r.goal,questions[1].options[b]);assert.equal(r.difficulty,questions[3].options[d]);assert.ok(r.googleNote);assert.ok(r.compatibility.includes('Interesse declarado'));if(e===2)assert.match(r.locationNote,/outras cidades/);count++;}
 assert.equal(count,768);assert.deepEqual([...categories].sort(),['A','B','C','D']);assert.equal(classify([0,2,3,0,0]).category,'B');assert.equal(classify([3,3,3,3,0]).category,'C');assert.equal(classify([2,0,0,0,0]).category,'D');assert.equal(classify([0,0,0,0,0]).category,'A');assert.throws(()=>classify([0,0,0,0,null]));
});
test('contact validation rejects missing consent and invalid numbers; phone mask preserves real digits',()=>{
 assert.equal(formatPhone('88996777332'),'(88) 99677-7332');assert.equal(validPhone('(88) 99677-7332'),true);
 for(const p of ['123','(00) 99677-7332','(88) 99999-9999','(88) 3361-1234'])assert.equal(validPhone(p),false,p);
 assert.deepEqual(contactErrors({name:'Ytala',phone:'88996777332',consent:true}),{});assert.equal(Object.keys(contactErrors({name:'',phone:'',consent:false})).length,3);
});
test('final form has exactly the required contact fields, unchecked consent and original endpoint/key',()=>{
 const h=renderToStaticMarkup(React.createElement(ContactForm,{answers:[0,0,2,0,0],result:classify([0,0,2,0,0])}));
 assert.equal((h.match(/<form\b/g)||[]).length,1);assert.match(h,/api.web3forms.com\/submit/);assert.match(h,/12456711-3ce4-4bee-bdf2-30d72e95328c/);assert.match(h,/<input(?=[^>]*name="phone")(?=[^>]*required)[^>]*>/);assert.match(h,/<input(?=[^>]*name="consent")(?=[^>]*required)[^>]*>/);assert.doesNotMatch(h,/checked|name="email"|name="message"|wa\.me|mailto:|redirect/);assert.match(h,/name="botcheck"/);assert.match(h,/Enviar minha solicitação/);
});
test('payload includes every answer, contact, consent and source while omitting arbitrary URL parameters',()=>{
 const answers=[0,2,3,0,2],r=classify(answers),fields=leadFields(answers,r,{name:' Teste ',phone:'88996777332',profile:'@perfil'},{utm_source:'video',email:'private',page_url:'https://x/?phone=private'},new Date('2026-10-14T01:00:00Z'));
 for(let i=0;i<5;i++)assert.equal(fields[`diagnostic_${questions[i].key}`],`${questions[i].title} — ${questions[i].options[answers[i]]}`);assert.equal(fields.name,'Teste');assert.equal(fields.professional_profile,'@perfil');assert.equal(fields.interest_category,'B — Presença no Google');assert.equal(fields.lead_source,'Diagnóstico Ravyt');assert.equal(fields.utm_source,'video');assert.equal(fields.privacy_policy_version,'2026-10-14');assert.equal(fields.contact_consent,'Autorização explícita de contato concedida');assert.equal(fields.submitted_at,'2026-10-14T01:00:00.000Z');assert.equal(fields.page_url,undefined);assert.equal(fields.email,undefined);
});
test('Web3Forms accepts only confirmed HTTP success; failures are retryable without mutating answers',async()=>{
 const fields={name:'Teste técnico',phone:'redacted','h-captcha-response':'unit-test-token'};let captured;
 assert.equal(await submitLead(fields,async(url,options)=>{captured={url,values:JSON.parse(options.body),headers:options.headers};return new Response(JSON.stringify({success:true}),{status:200});}),true);
 assert.equal(captured.url,'https://api.web3forms.com/submit');assert.equal(captured.values.access_key,'12456711-3ce4-4bee-bdf2-30d72e95328c');assert.equal(captured.values.WhatsApp,'redacted');assert.equal(captured.values.subject,'Novo diagnóstico | Teste técnico | Outra localidade');assert.equal(captured.values.from_name,'Diagnóstico Ravyt Digital');
 for(const mock of [async()=>new Response(JSON.stringify({success:false}),{status:200}),async()=>new Response(JSON.stringify({success:true}),{status:500}),async()=>{throw new Error('offline');},async()=>new Response('bad json')])await assert.rejects(submitLead(fields,mock));
 assert.deepEqual(fields,{name:'Teste técnico',phone:'redacted','h-captcha-response':'unit-test-token'});
});

test('contact handler prevents concurrent duplicate sends until the API resolves',async()=>{
 let sends=0,finish;const states=[];const pending=new Promise(resolve=>finish=resolve);
 const hooks={useEffect(){},useRef:value=>({current:value===''?'unit-test-token':value}),useState:value=>[value===''?'(88) 99677-7332':value,next=>states.push(next)]};
 class FormValues{get(key){return {name:'Teste',profile:'@teste',consent:'on',botcheck:''}[key]??null;}}
 const Form=loadComponent('components/ContactForm.tsx',{'react':hooks,'@/lib/diagnostic.mjs':{...diagnostic,submitLead:async()=>{sends++;await pending;return true;}},'./HCaptcha':{__esModule:true,default:()=>null},'@/lib/utm':{readUtms:()=>({})}},{FormData:FormValues,window:{dispatchEvent(){}},CustomEvent:class{}});
 const tree=Form({answers:[0,0,0,0,0],result:classify([0,0,0,0,0])});
 function findForm(node){if(!node||typeof node!=='object')return null;if(node.type==='form')return node;for(const child of [node.props?.children].flat(Infinity)){const found=findForm(child);if(found)return found;}return null;}
 const form=findForm(tree);assert.ok(form);const event={preventDefault(){},currentTarget:{querySelector(){}}};
 const first=form.props.onSubmit(event);await form.props.onSubmit(event);assert.equal(sends,1);assert.ok(states.includes('sending'));assert.ok(!states.includes('success'));finish();await first;assert.ok(states.includes('success'));
});

test('missing captcha blocks the API before any request',async()=>{let requests=0;await assert.rejects(submitLead({name:'Teste'},async()=>{requests++;return new Response('{}');}),/hCaptcha/);assert.equal(requests,0);});
