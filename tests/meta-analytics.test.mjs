import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

function harness({accepted=true,path='/'}={}) {
 const effects=[],listeners=new Map(),clicks=new Map(),calls=[],beacons=[];
 let choice=accepted;
 const window={dataLayer:[],addEventListener:(n,f)=>listeners.set(n,f),removeEventListener:(n)=>listeners.delete(n)};
 class Element {
  constructor(selectors={},href=''){this.selectors=selectors;this.href=href;}
  closest(selector){return this.selectors[selector]??null;}
  getAttribute(){return this.href;}
 }
 const document={head:{appendChild(){}},createElement:()=>({}),addEventListener:(n,f)=>clicks.set(n,f),removeEventListener:n=>clicks.delete(n)};
 const execute=(file,deps)=>{
  const exports={};vm.runInNewContext(ts.transpileModule(readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX}}).outputText,
   {exports,require:n=>deps[n],window,document,Element,navigator:{sendBeacon:(_u,b)=>{beacons.push(b);return true;}},Blob,URL,crypto:{randomUUID:()=>`test-event-${calls.length}-${beacons.length}`},fetch:()=>{throw Error('Unexpected fetch');}});return exports;
 };
 const definitions=execute('lib/analytics.ts',{});
 const analytics=execute('components/Analytics.tsx',{'react':{useEffect:f=>effects.push(f),useRef:v=>({current:v})},'next/navigation':{usePathname:()=>path},'@/lib/analytics':definitions,'@/lib/privacy-consent':{savedConsent:()=>choice?'accepted':'rejected'}});
 analytics.default();effects.forEach(f=>f());
 // Retain init/PageView calls queued before the external Pixel script loads.
 calls.push(...(window.fbq?.queue??[]));window.fbq=(...args)=>calls.push(args);
 return {calls,window,beacons,choice:v=>{choice=v;listeners.get('ravyt:consent')?.({detail:v?'accepted':'rejected'});},
  event:n=>listeners.get(n)?.(),click:(selector,href='',section='inicio')=>{
   const target=new Element({[selector]:selector==='a'?new Element({},href):{},section:{id:section}});
   clicks.get('click')({target});
  },meta:()=>calls.filter(c=>c[0]==='trackSingle'||c[0]==='trackSingleCustom')};
}

test('each funnel step has one explicit Meta event and a unique ID; clicks are never leads',()=>{
 const h=harness();h.click('button[data-open-contact]');h.click('a','https://wa.me/5588996956479?text=private-message');
 h.click('a','/diagnostico');h.click('button[data-diagnostic-start]');h.event('ravyt:diagnostic-complete');h.click('button[data-diagnostic-contact]');
 assert.deepEqual(h.meta().map(c=>c[2]),['PageView','SpecialistClick','Contact','DiagnosticOpen','DiagnosticStart','DiagnosticComplete','DiagnosticContactRequest']);
 assert.ok(h.meta().every(c=>c[1]==='2030474547612558'&&c[4].eventID));assert.equal(new Set(h.meta().map(c=>c[4].eventID)).size,h.meta().length);
 const contact=h.meta().find(c=>c[2]==='Contact');assert.equal(contact[3].specialist,'ytala');assert.doesNotMatch(JSON.stringify(h.meta()),/558899|private-message/);
 h.event('ravyt:lead');assert.equal(h.meta().filter(c=>c[2]==='Lead').length,1);
});
test('rejected consent prevents all transmissions, including Lead; granting does not replay past actions',()=>{
 const h=harness({accepted:false});h.click('button[data-open-contact]');h.event('ravyt:lead');assert.equal(h.meta().length,0);assert.equal(h.beacons.length,0);
 h.choice(true);assert.deepEqual(h.meta().map(c=>c[2]),['PageView']);h.choice(false);const count=h.beacons.length;h.event('ravyt:lead');h.click('button[data-diagnostic-start]');assert.equal(h.beacons.length,count);
});
test('diagnostic route carries current page path and a separate ViewContent event',()=>{
 const h=harness({path:'/diagnostico'});h.event('ravyt:lead');assert.deepEqual(h.meta().map(c=>c[2]),['PageView','ViewContent','Lead']);assert.ok(h.meta().every(c=>c[3].page_path==='/diagnostico'));
});
test('Lead is emitted only after the form service accepts the request',()=>{
 const form=readFileSync('components/ContactForm.tsx','utf8');assert.match(form,/await submitLead\([\s\S]*?setStatus\('success'\)[\s\S]*?new CustomEvent\('ravyt:lead'\)/);
 assert.doesNotMatch(readFileSync('components/Analytics.tsx','utf8'),/addEventListener\(["']submit["']/);
});
