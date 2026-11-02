import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import ts from 'typescript';import vm from 'node:vm';import {createRequire} from 'node:module';import * as diagnostic from '../lib/diagnostic.mjs';
const require=createRequire(import.meta.url);
function harness(file,dependencies,initialReducer){
 const slots=[],effects=[];let cursor=0;const hooks={useState:initial=>{const i=cursor++;if(!(i in slots))slots[i]=initial;return [slots[i],next=>slots[i]=typeof next==='function'?next(slots[i]):next];},useRef:value=>{const i=cursor++;slots[i]??={current:value};return slots[i];},useReducer:(reducer,initial)=>{const i=cursor++;slots[i]??=initialReducer??initial;return [slots[i],action=>slots[i]=reducer(slots[i],action)];},useEffect:(fn,deps)=>{const i=cursor++;const previous=slots[i];if(!previous||deps.some((v,j)=>v!==previous.deps[j]))effects.push(()=>{previous?.cleanup?.();slots[i]={deps,cleanup:fn()};});}};
 const exports={},code=ts.transpileModule(readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText;
 const events=[];
 vm.runInNewContext(code,{exports,require:name=>name==='react'?hooks:dependencies[name]??require(name),window:{dispatchEvent:event=>events.push(event.type)},CustomEvent:class{constructor(type){this.type=type;}}});
 return {events,render(props){cursor=0;const tree=exports.default(props);while(effects.length)effects.shift()();return tree;}};
}
function findAll(node,predicate){if(!node||typeof node!=='object')return [];return [...(predicate(node)?[node]:[]),...[node.props?.children].flat(Infinity).flatMap(child=>findAll(child,predicate))];}
const Form=()=>null,Confirmation=()=>null,dependencies={'@/lib/diagnostic.mjs':diagnostic,'./ContactForm':{__esModule:true,default:Form},'./DiagnosticConfirmation':{__esModule:true,default:Confirmation}};
test('result opens optional contact, preserves the mounted draft on back and never confirms a sent message',()=>{
 const answers=[0,2,3,0,'São Luís'],h=harness('components/Diagnostic.tsx',dependencies,{stage:'result',step:4,answers});
 let tree=h.render();assert.deepEqual(h.events,['ravyt:diagnostic-complete']);assert.equal(findAll(tree,n=>n.type===Form).length,0);assert.equal(findAll(tree,n=>n.props?.className==='dg-result').length,1);
 findAll(tree,n=>n.props?.className==='dg-button dg-result-cta')[0].props.onClick();tree=h.render();let form=findAll(tree,n=>n.type===Form)[0];assert.deepEqual(form.props.answers,answers);assert.equal(form.props.active,true);assert.equal(form.props.onSuccess,undefined);form.props.onBack();tree=h.render();
 form=findAll(tree,n=>n.type===Form)[0];assert.equal(form.props.active,false);assert.equal(findAll(tree,n=>n.props?.className==='dg-contact-wrap')[0].props.hidden,true);assert.equal(findAll(tree,n=>n.props?.className==='dg-result').length,1);assert.equal(h.events.length,1);
 findAll(tree,n=>n.props?.className==='dg-button dg-result-cta')[0].props.onClick();tree=h.render();assert.equal(findAll(tree,n=>n.type===Form)[0].props.active,true);assert.equal(findAll(tree,n=>n.type===Confirmation).length,0);
});
test('contact focus is retriggered on reopening and previous drafts are never reset by the back control',()=>{
 const form=readFileSync('components/ContactForm.tsx','utf8'),parent=readFileSync('components/Diagnostic.tsx','utf8');assert.match(form,/\},\[active\]\)/);assert.match(form,/heading.current\?\.focus\(\{preventScroll:true\}\)/);assert.match(form,/Voltar ao meu resultado/);assert.doesNotMatch(form,/\.reset\(\).*onBack|formRef.current\?\.reset/);assert.match(parent,/contactVisited&&/);assert.match(parent,/hidden=\{!contactOpen\}/);assert.match(parent,/active=\{contactOpen\}/);
});
