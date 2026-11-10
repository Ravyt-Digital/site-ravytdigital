import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync,readdirSync} from 'node:fs';import worker from '../dist/server/index.js';
const ctx={waitUntil(){},passThroughOnException(){}},env={ASSETS:{fetch:async()=>new Response('',{status:404})}},origin='https://ravytdigital.com';
test('indexable HTML, manifest and metadata have no restrictive geographic mentions',async()=>{
 for(const path of ['/','/minha-empresa-nao-aparece-no-google','/como-colocar-empresa-no-google-maps','/quanto-custa-google-meu-negocio','/manifest.webmanifest']){const response=await worker.fetch(new Request(origin+path),env,ctx);assert.equal(response.status,200);assert.doesNotMatch(await response.text(),/Tiangu[áa]|Serra da Ibiapaba|Ibiapaba/i,path);}
 const crawl=dir=>readdirSync(dir,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?crawl(dir+'/'+entry.name):[dir+'/'+entry.name]);
 for(const file of [...crawl('app'),...crawl('components'),...crawl('lib')].filter(f=>/\.(tsx?|mjs|json)$/.test(f))){const source=readFileSync(file,'utf8').replace(/"(?:id|image)": "(?:\/projects\/)?cerest-tiangua(?:\.webp)?"/g,'');assert.doesNotMatch(source,/Tianguá|Tiangua|Serra da Ibiapaba|Ibiapaba/i,file);}
});
test('injected personal information never reaches the analytics logs; event and route are retained',async()=>{
 const logs=[],original=console.log;console.log=value=>logs.push(value);
 try{const response=await worker.fetch(new Request(origin+'/api/analytics',{method:'POST',headers:{origin},body:JSON.stringify({event:'diagnostic_whatsapp_click',path:'/diagnostico',name:'Pessoa Fictícia',phone:'88912345678',city:'São Luís',answers:['private'],url:'https://wa.me/5588996956479?text=private',message:'private'})}),env,ctx);assert.equal(response.status,204);}finally{console.log=original;}
 assert.equal(logs.length,1);assert.deepEqual(Object.keys(JSON.parse(logs[0])).sort(),['event','occurredAt','path']);assert.doesNotMatch(logs[0],/Pessoa|889123|São Luís|private|wa.me/);
});
test('privacy and terms describe link exposure, voluntary sending, external policies and rights',async()=>{
 const h=await(await worker.fetch(new Request(origin+'/'),env,ctx)).text();for(const text of ['10 de novembro de 2026','histórico do navegador','Você pode revisar o texto e decidir se deseja enviá-lo','não comprova envio nem recebimento','contatoravyt@gmail.com','26.114.696/0001-70','revogação da autorização','whatsapp.com/legal/privacy-policy'])assert.ok(h.includes(text),text);
 const source=readFileSync('lib/home-content.ts','utf8');assert.doesNotMatch(source,/api.web3forms|h-captcha|hcaptcha|access_key|localStorage|sessionStorage/);
});
