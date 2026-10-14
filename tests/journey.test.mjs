import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import ts from 'typescript';import vm from 'node:vm';import {createRequire} from 'node:module';import * as diagnostic from '../lib/diagnostic.mjs';
const require=createRequire(import.meta.url);
function harness(file,dependencies,initialReducer){
 const slots=[],effects=[];let cursor=0;const hooks={useState:initial=>{const i=cursor++;if(!(i in slots))slots[i]=initial;return [slots[i],next=>slots[i]=typeof next==='function'?next(slots[i]):next];},useRef:value=>{const i=cursor++;slots[i]??={current:value};return slots[i];},useReducer:(reducer,initial)=>{const i=cursor++;slots[i]??=initialReducer??initial;return [slots[i],action=>slots[i]=reducer(slots[i],action)];},useEffect:(fn,deps)=>{const i=cursor++;const previous=slots[i];if(!previous||deps.some((v,j)=>v!==previous.deps[j]))effects.push(()=>{previous?.cleanup?.();slots[i]={deps,cleanup:fn()};});}};
 const exports={},code=ts.transpileModule(readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText;
 vm.runInNewContext(code,{exports,require:name=>name==='react'?hooks:dependencies[name]??require(name)});
 return {render(props){cursor=0;const tree=exports.default(props);while(effects.length)effects.shift()();return tree;}};
}
function findAll(node,predicate){if(!node||typeof node!=='object')return [];return [...(predicate(node)?[node]:[]),...[node.props?.children].flat(Infinity).flatMap(child=>findAll(child,predicate))];}
const Form=()=>null,Confirmation=()=>null,dependencies={'@/lib/diagnostic.mjs':diagnostic,'./ContactForm':{__esModule:true,default:Form},'./DiagnosticConfirmation':{__esModule:true,default:Confirmation}};
test('result alone opens contact on CTA, preserves mounted contact on back and replaces everything on success',()=>{
 const answers=[0,2,3,0,1],h=harness('components/Diagnostic.tsx',dependencies,{stage:'result',step:4,answers});let completed=0;const props={onComplete:()=>completed++};
 let tree=h.render(props);assert.equal(findAll(tree,n=>n.type===Form).length,0);assert.equal(findAll(tree,n=>n.props?.className==='dg-result').length,1);
 const cta=findAll(tree,n=>n.props?.className==='dg-button dg-result-cta')[0];cta.props.onClick();tree=h.render(props);
 assert.equal(findAll(tree,n=>n.props?.className==='dg-result').length,0);let form=findAll(tree,n=>n.type===Form)[0];assert.deepEqual(form.props.answers,answers);assert.equal(form.props.active,true);assert.equal(completed,0);form.props.onBack();tree=h.render(props);
 form=findAll(tree,n=>n.type===Form)[0];assert.equal(form.props.active,false);assert.equal(findAll(tree,n=>n.props?.className==='dg-contact-wrap')[0].props.hidden,true);assert.equal(findAll(tree,n=>n.props?.className==='dg-result').length,1);
 findAll(tree,n=>n.props?.className==='dg-button dg-result-cta')[0].props.onClick();tree=h.render(props);form=findAll(tree,n=>n.type===Form)[0];assert.equal(form.props.active,true);assert.deepEqual(form.props.answers,answers);form.props.onSuccess();tree=h.render(props);assert.equal(tree.type,Confirmation);assert.equal(completed,1);assert.equal(findAll(tree,n=>n.type===Form).length,0);
});
test('hero is preserved until completion, then removed together with its subheadline',()=>{
 const Stub=()=>null,h=harness('components/DiagnosticExperience.tsx',{'./Diagnostic':{__esModule:true,default:Stub}});let tree=h.render();assert.equal(findAll(tree,n=>n.type==='h1').length,1);const diagnosticNode=findAll(tree,n=>n.type===Stub)[0];diagnosticNode.props.onComplete();tree=h.render();assert.equal(findAll(tree,n=>n.type==='h1').length,0);assert.equal(findAll(tree,n=>n.props?.className==='dg-lead').length,0);assert.equal(findAll(tree,n=>n.type===Stub).length,1);
});
test('contact focus is retriggered on reopening and previous drafts are never reset by the back control',()=>{
 const form=readFileSync('components/ContactForm.tsx','utf8'),parent=readFileSync('components/Diagnostic.tsx','utf8');assert.match(form,/\},\[active\]\)/);assert.match(form,/heading.current\?\.focus\(\{preventScroll:true\}\)/);assert.match(form,/Voltar ao meu resultado/);assert.doesNotMatch(form,/\.reset\(\).*onBack|formRef.current\?\.reset/);assert.match(parent,/contactVisited&&/);assert.match(parent,/hidden=\{!contactOpen\}/);assert.match(parent,/active=\{contactOpen\}/);
});
