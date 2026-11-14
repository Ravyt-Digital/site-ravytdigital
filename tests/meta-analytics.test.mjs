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
  hasAttribute(){return true;}
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

test('direct WhatsApp CTA measures intent and contact without sending message content',()=>{
 const h=harness();h.click('a','https://wa.me/5588996777332?text=private-message');
 assert.deepEqual(h.meta().map(c=>c[2]),['PageView','Falar com Especialistas','Contact']);
 assert.ok(h.meta().every(c=>c[1]==='2030474547612558'&&c[4].eventID));assert.equal(new Set(h.meta().map(c=>c[4].eventID)).size,h.meta().length);
 assert.doesNotMatch(JSON.stringify(h.meta()),/558899|private-message/);assert.equal(h.meta().filter(c=>c[2]==='Lead').length,0);
});
test('rejected consent prevents all transmissions; granting does not replay past clicks',()=>{
 const h=harness({accepted:false});h.click('a','https://wa.me/5588996777332');assert.equal(h.meta().length,0);assert.equal(h.beacons.length,0);
 h.choice(true);assert.deepEqual(h.meta().map(c=>c[2]),['PageView']);h.choice(false);const count=h.beacons.length;h.click('a','https://wa.me/5588996777332');assert.equal(h.beacons.length,count);
});

test('quote CTA measures intent without passing the destination or firing Lead',()=>{
 const h=harness();h.click('a','/proposta?projeto=aplicativo');
 assert.deepEqual(h.meta().map(c=>c[2]),['PageView','QuoteClick']);
 assert.doesNotMatch(JSON.stringify(h.meta()),/projeto=aplicativo/);
});
