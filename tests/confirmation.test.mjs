import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import vm from 'node:vm';import ts from 'typescript';import {createRequire} from 'node:module';import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';import * as diagnostic from '../lib/diagnostic.mjs';
const require=createRequire(import.meta.url);
function load(file,dependencies,extra={}){const exports={};const code=ts.transpileModule(readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText;vm.runInNewContext(code,{exports,require:name=>dependencies[name]??require(name),...extra});return exports.default;}
const Confirmation=load('components/DiagnosticConfirmation.tsx',{});
test('confirmation contains one centered semantic card and exact copy, with no prior fields, results or CTAs',()=>{
 const h=renderToStaticMarkup(React.createElement(Confirmation));assert.match(h,/class="dg-completion"/);assert.match(h,/role="status"/);assert.match(h,/aria-live="polite"/);assert.match(h,/id="confirmation-title" tabindex="-1"/);assert.match(h,/Sua solicitação foi enviada!/);assert.match(h,/Obrigado por compartilhar um pouco sobre seu trabalho\./);assert.doesNotMatch(h,/dg-result|<form|<input|<button|<a |prazo|aprovação/);assert.equal((h.match(/<section/g)||[]).length,1);
});
test('parent switches from both result/form columns to only confirmation after the success callback',()=>{
 const state={stage:'result',step:4,answers:[0,2,3,0,0]};let completed=false,calls=0;
 const hooks={useReducer:()=>[state,()=>{}],useRef:value=>({current:value}),useEffect(){},useState:value=>typeof value==='boolean'?[completed,next=>{completed=next;}]:[value,()=>{}]};
 const Form=()=>null;const Parent=load('components/Diagnostic.tsx',{'react':hooks,'@/lib/diagnostic.mjs':diagnostic,'./ContactForm':{__esModule:true,default:Form},'./DiagnosticConfirmation':{__esModule:true,default:Confirmation}});
 let tree=Parent();assert.equal(tree.props.className,'dg-result-wrap');const children=tree.props.children;assert.equal(children[0].props.className,'dg-result');assert.equal(children[1].type,Form);assert.deepEqual(children[1].props.answers,state.answers);children[1].props.onSuccess();tree=Parent();assert.equal(tree.type,Confirmation);assert.equal(tree.props.children,undefined);
});
test('navigation focuses the confirmation title and scrolls with reduced-motion preference respected',()=>{
 for(const reduced of [true,false]){const refs=[],effects=[],focus=[],scroll=[];const hooks={useRef:value=>{const r={current:value};refs.push(r);return r;},useEffect:fn=>effects.push(fn)};
 const Component=load('components/DiagnosticConfirmation.tsx',{'react':hooks},{window:{matchMedia:()=>({matches:reduced})}});Component();refs[0].current={scrollIntoView:o=>scroll.push(o)};refs[1].current={focus:o=>focus.push(o)};effects[0]();assert.equal(focus[0].preventScroll,true);assert.equal(scroll[0].behavior,reduced?'auto':'smooth');assert.equal(scroll[0].block,'start');}
});
test('success callback follows the resolved send; API failure keeps input data and never completes the parent',async()=>{
 for(const fails of [false,true]){let success=0,finish;const states=[];const pending=new Promise((resolve,reject)=>finish=()=>fails?reject(new Error('offline')):resolve(true));
 const hooks={useRef:value=>({current:value===''?'unit-token':value}),useState:value=>[value===''?'(88) 99677-7332':value,next=>states.push(next)]};
 class FormValues{get(key){return {name:'Teste',profile:'@teste',consent:'on',botcheck:''}[key]??null;}}
 const Component=load('components/ContactForm.tsx',{'react':hooks,'@/lib/diagnostic.mjs':{...diagnostic,submitLead:async()=>pending},'@/lib/utm':{readUtms:()=>({})},'./HCaptcha':{__esModule:true,default:()=>null}},{FormData:FormValues,window:{dispatchEvent(){}},CustomEvent:class{}});
 const tree=Component({answers:[0,0,0,0,0],result:diagnostic.classify([0,0,0,0,0]),onSuccess:()=>success++});
 function find(node){if(!node||typeof node!=='object')return null;if(node.type==='form')return node;return [node.props?.children].flat(Infinity).map(find).find(Boolean);}
 let resets=0;const form={reset(){resets++;},querySelector(){}};const sending=find(tree).props.onSubmit({preventDefault(){},currentTarget:form});assert.equal(success,0);assert.ok(states.includes('sending'));finish();await sending;assert.equal(success,fails?0:1);assert.equal(resets,0);assert.ok(states.includes(fails?'error':'success'));}
});
