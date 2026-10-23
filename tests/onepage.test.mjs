import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync,existsSync} from 'node:fs';
import worker from '../dist/server/index.js';
const env={ASSETS:{fetch:async()=>new Response('',{status:404})}},ctx={waitUntil(){},passThroughOnException(){}};
const request=(path,headers={})=>worker.fetch(new Request('https://ravytdigital.com'+path,{headers}),env,ctx);
const visible=s=>s.replace(/<script\b[\s\S]*?<\/script>/g,'').replace(/<style\b[\s\S]*?<\/style>/g,'');
let html;const home=async()=>html??=(await(await request('/')).text());
test('home presents the requested sections and the separate diagnostic is preserved',async()=>{
 assert.equal((await request('/')).status,200);const h=await home(),v=visible(h);assert.equal((v.match(/<h1[ >]/g)||[]).length,1);
 for(const id of ['inicio','servicos','clientes','planos','perguntas'])assert.ok(v.includes('id="'+id+'"'),id);
 for(const phrase of ['Especialistas em Google Meu Negócio.','Google Meu Negócio','Perfil da Empresa no Google'])assert.ok(v.includes(phrase));
 assert.equal((await request('/diagnostico')).status,200);const d=visible(await(await request('/diagnostico')).text());assert.match(d,/Descubra como melhorar/);assert.match(d,/Começar meu diagnóstico/);assert.equal((d.match(/<form\b/g)||[]).length,0);assert.match(d,/href="\/"/);
 const xml=await(await request('/sitemap.xml')).text();assert.equal((xml.match(/<loc>/g)||[]).length,5);assert.match(xml,/https:\/\/ravytdigital.com\/diagnostico/);
 assert.match(h,/<title>Especialistas em Google Meu Negócio \| Ravyt Digital<\/title>/);const diagnostic=await(await request('/diagnostico')).text();assert.match(diagnostic,/<title>Diagnóstico de Presença no Google \| Ravyt Digital<\/title>/);assert.match(diagnostic,/rel="canonical"[^>]*href="https:\/\/ravytdigital.com\/diagnostico"/);
});
test('home focuses on Google Business without advertising retired services',async()=>{
 const h=visible(await home());assert.doesNotMatch(h,/Criação de sites?|>SEO<|id="portfolio"|href="#portfolio"/i);assert.match(h,/Perfil da Empresa no Google/);
});
test('contact aliases preserve the diagnostic journey; retired content keeps Gone semantics',async()=>{
 for(const path of ['/contato','/diagnosticos','/en/diagnostico']){const r=await request(path);assert.equal(r.status,301);assert.equal(new URL(r.headers.get('location')).pathname,'/diagnostico');}
 for(const [path,id]of [['/politica-de-privacidade','privacidade'],['/politica-de-cookies','cookies'],['/termos','termos']]){const r=await request(path);assert.equal(r.status,301);assert.equal(new URL(r.headers.get('location')).hash,'#'+id);}
 for(const path of ['/sites','/seo','/cases','/sobre','/fr/seo','/blog','/recursos/checklist-presenca-google']){const r=await request(path);assert.equal(r.status,410,path);assert.equal(r.headers.get('x-robots-tag'),'noindex');}
 assert.equal((await request('/inexistente')).status,404);
});
test('local brand assets, legal dialogs and responsive safeguards remain available on both pages',async()=>{
 for(const path of ['/','/diagnostico']){const h=visible(await(await request(path)).text());for(const [tag]of h.matchAll(/<img\b[^>]*>/g)){assert.match(tag,/width="\d+"/);assert.match(tag,/height="\d+"/);assert.match(tag,/alt="[^"]+"/);const src=tag.match(/src="([^"]+)"/)[1];assert.ok(existsSync('public'+src));}for(const id of ['privacidade','termos'])assert.ok(h.includes('id="'+id+'"'));}
 const css=readFileSync('app/globals.css','utf8');assert.match(css,/prefers-reduced-motion/);assert.match(css,/max-width:600px/);assert.match(css,/--paper:#050C13/);assert.match(css,/--copper:#EF5309/);const analytics=readFileSync('components/Analytics.tsx','utf8');assert.doesNotMatch(analytics,/leadFields|\.answers|\.phone|\.name|profile:/);
});
test('domain upgrades preserve campaigns and HTML remains revalidated',async()=>{
 for(const origin of ['http://ravytdigital.com','http://www.ravytdigital.com','https://www.ravytdigital.com']){const r=await worker.fetch(new Request(origin+'/?utm_source=campaign&utm_medium=cpc'),env,ctx);assert.equal(r.status,308);assert.equal(r.headers.get('location'),'https://ravytdigital.com/?utm_source=campaign&utm_medium=cpc');}
 assert.equal((await request('/')).headers.get('cache-control'),'no-cache, max-age=0, must-revalidate');
});

test('commercial calls to action open a chooser before starting a WhatsApp conversation',async()=>{
 const h=visible(await home());assert.ok(h.includes('Fale com nossos especialistas'));assert.equal((h.match(/data-open-contact/g)||[]).length,5);assert.ok(h.includes('class="rv-contact-dialog"'));assert.doesNotMatch(h,/href="https:\/\/wa\.me\//);const source=readFileSync('components/ContactChooser.tsx','utf8'),data=readFileSync('lib/home-content.ts','utf8');for(const [name,number,slug]of [['Ytala Cabral','5588996956479','ytala-cabral'],['Marcio Cabral','5588996777332','marcio-cabral']]){assert.ok(data.includes(name));assert.ok(data.includes(number));assert.ok(existsSync('public/team/'+slug+'-224.webp'));}assert.match(source,/showModal/);assert.match(source,/trigger.current\?\.focus/);assert.match(source,/whatsappHref\(person.number\)/);
});

test('one annual plan includes every service and the NFC bonus at the supplied yearly price',async()=>{const h=visible(await home());assert.equal((h.match(/class="rv-annual-plan"/g)||[]).length,1);assert.match(h,/R\$ 597,00/);assert.match(h,/por ano/);assert.match(h,/Bônus incluído/);assert.match(h,/Cartão NFC/);assert.doesNotMatch(h,/Sob consulta|Conversar sobre o serviço|Posso contratar apenas/);});
