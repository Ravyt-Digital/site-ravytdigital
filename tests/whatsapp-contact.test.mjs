import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import vm from 'node:vm';import ts from 'typescript';import {createRequire} from 'node:module';import * as diagnostic from '../lib/diagnostic.mjs';
const require=createRequire(import.meta.url);
const all=(node,predicate)=>!node||typeof node!=='object'?[]:[...(predicate(node)?[node]:[]),...[node.props?.children].flat(Infinity).flatMap(n=>all(n,predicate))];
function harness({blocked=false,clipboardFails=false}={}){
 const slots=[],effects=[],timers=[],opens=[],events=[],copies=[],focus=[];let cursor=0;
 const hooks={useRef:value=>{const i=cursor++;slots[i]??={current:value};return slots[i];},useState:value=>{const i=cursor++;if(!(i in slots))slots[i]=value;return [slots[i],next=>slots[i]=typeof next==='function'?next(slots[i]):next];},useEffect:(fn,deps)=>{const i=cursor++,old=slots[i];if(!old||deps.some((v,j)=>v!==old.deps[j]))effects.push(()=>{old?.cleanup?.();slots[i]={deps,cleanup:fn()};});}};
 const exports={};vm.runInNewContext(ts.transpileModule(readFileSync('components/ContactForm.tsx','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,{exports,require:n=>({'react':hooks,'@/lib/diagnostic.mjs':diagnostic}[n]??require(n)),window:{matchMedia:()=>({matches:true}),open:(...args)=>{if(blocked)throw Error('blocked');opens.push(args);return null;},dispatchEvent:e=>events.push(e)},document:{getElementById:id=>({focus:()=>focus.push(id)})},navigator:{clipboard:{writeText:async text=>{if(clipboardFails)throw Error('denied');copies.push(text);}}},CustomEvent:class{constructor(type){this.type=type;}},setTimeout:fn=>{timers.push(fn);return timers.length;},clearTimeout(){}});
 const answers=[0,2,3,1,'São Luís'],props={answers,result:diagnostic.classify(answers)};
 const render=()=>{cursor=0;const tree=exports.default(props);while(effects.length)effects.shift()();return tree;};
 const fill=(id,value)=>{const n=all(render(),n=>n.props?.id===id)[0];n.props.onChange({target:{value,checked:value}});};
 const click=text=>all(render(),n=>n.type==='button'&&[n.props.children].flat().includes(text))[0].props.onClick();
 return {render,fill,click,opens,events,copies,timers,focus};
}
test('contact refuses invalid data and unchecked authorization without opening any URL',()=>{const h=harness();h.click('Conversar sobre meu diagnóstico');assert.equal(h.opens.length,0);assert.equal(h.events.length,0);assert.equal(h.focus[0],'lead-name');h.fill('lead-name','Teste');h.fill('lead-phone','88912345678');h.click('Conversar sobre meu diagnóstico');assert.equal(h.opens.length,0);assert.equal(h.focus.at(-1),'lead-consent');});
test('explicit click opens one official encoded URL, emits only a click and prevents rapid duplicates',async()=>{
 const h=harness();h.fill('lead-name','João Teste');h.fill('lead-phone','88912345678');h.fill('lead-profile','@teste');h.fill('lead-consent',true);
 const tree=h.render(),button=all(tree,n=>n.type==='button'&&[n.props.children].flat().includes('Conversar sobre meu diagnóstico'))[0];button.props.onClick();button.props.onClick();assert.equal(h.opens.length,1);assert.equal(h.opens[0][1],'_blank');assert.equal(h.opens[0][2],'noopener,noreferrer');assert.equal(new URL(h.opens[0][0]).pathname,'/5588996956479');assert.equal(h.events.length,1);assert.equal(h.events[0].type,'ravyt:diagnostic-whatsapp-click');assert.doesNotMatch(JSON.stringify(h.events),/João|889123|São Luís|@teste/);
 const fallback=all(h.render(),n=>n.type==='textarea')[0];assert.match(fallback.props.value,/Cidade: São Luís/);assert.match(fallback.props.value,/João Teste/);await h.click('Copiar mensagem');assert.equal(h.copies[0],fallback.props.value);
 assert.equal(all(h.render(),n=>n.type==='form'||(n.type==='a'&&n.props.href?.includes('?text='))).length,0);
 h.timers[0]();h.click('Abrir conversa com a Ravyt ↗');assert.equal(h.opens[1][0],diagnostic.WHATSAPP_BASE);
 h.fill('lead-name','Outro nome');assert.equal(all(h.render(),n=>n.type==='textarea').length,0);
});
test('blocked popup leaves a copyable message, preserves draft and never claims it was sent',()=>{
 const h=harness({blocked:true});h.fill('lead-name','Teste');h.fill('lead-phone','88912345678');h.fill('lead-consent',true);h.click('Conversar sobre meu diagnóstico');assert.equal(h.opens.length,0);assert.equal(h.events.length,0);assert.equal(all(h.render(),n=>n.type==='textarea').length,1);assert.equal(all(h.render(),n=>n.props?.id==='lead-name')[0].props.value,'Teste');
 const source=readFileSync('components/ContactForm.tsx','utf8');assert.doesNotMatch(source,/Sua solicitação foi enviada|Recebemos suas informações|ravyt:lead|localStorage|sessionStorage|fetch\(|sendBeacon|console\./);
});
