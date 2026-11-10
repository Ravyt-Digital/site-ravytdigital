import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync,existsSync} from 'node:fs';
import worker from '../dist/server/index.js';
const env={ASSETS:{fetch:async()=>new Response('',{status:404})}},ctx={waitUntil(){},passThroughOnException(){}};
const request=(path,headers={})=>worker.fetch(new Request('https://ravytdigital.com'+path,{headers}),env,ctx);
const visible=s=>s.replace(/<script\b[\s\S]*?<\/script>/g,'').replace(/<style\b[\s\S]*?<\/style>/g,'');
let html;const home=async()=>html??=(await(await request('/')).text());
test('home presents the requested sections and omits the retired diagnostic',async()=>{
 assert.equal((await request('/')).status,200);const h=await home(),v=visible(h);assert.equal((v.match(/<h1[ >]/g)||[]).length,1);
 for(const id of ['inicio','servicos','clientes','planos','perguntas'])assert.ok(v.includes('id="'+id+'"'),id);
 for(const phrase of ['Especialistas em Google Meu Negócio.','Google Meu Negócio','Perfil da Empresa no Google'])assert.ok(v.includes(phrase));
 const xml=await(await request('/sitemap.xml')).text();assert.equal((xml.match(/<loc>/g)||[]).length,4);assert.doesNotMatch(xml,/diagnostico/);
 assert.match(h,/<title>Especialistas em Google Meu Negócio \| Ravyt Digital<\/title>/);

});
test('home preserves the Google Business offer and communicates broader nationwide services',async()=>{
 const h=visible(await home());assert.match(h,/criação de sites, SEO/);assert.match(h,/diferentes regiões do Brasil/);assert.doesNotMatch(h,/id="portfolio"|href="#portfolio"/i);assert.match(h,/Perfil da Empresa no Google/);
});
test('old diagnostic and contact URLs lead to the contact section; retired content keeps Gone semantics',async()=>{
 for(const path of ['/contato','/diagnostico','/diagnosticos','/en/diagnostico','/fr/diagnostico']){const r=await request(path);assert.equal(r.status,301);assert.equal(new URL(r.headers.get('location')).pathname,'/');assert.equal(new URL(r.headers.get('location')).hash,'#contato');}
 for(const [path,id]of [['/politica-de-privacidade','privacidade'],['/politica-de-cookies','cookies'],['/termos','termos']]){const r=await request(path);assert.equal(r.status,301);assert.equal(new URL(r.headers.get('location')).hash,'#'+id);}
 for(const path of ['/sites','/seo','/cases','/sobre','/fr/seo','/blog','/recursos/checklist-presenca-google']){const r=await request(path);assert.equal(r.status,410,path);assert.equal(r.headers.get('x-robots-tag'),'noindex');}
 assert.equal((await request('/inexistente')).status,404);
});
test('local brand assets, legal dialogs and responsive safeguards remain available on both pages',async()=>{
 for(const path of ['/','/minha-empresa-nao-aparece-no-google']){const h=visible(await(await request(path)).text());for(const [tag]of h.matchAll(/<img\b[^>]*>/g)){assert.match(tag,/width="\d+"/);assert.match(tag,/height="\d+"/);assert.match(tag,/alt="[^"]+"/);const src=tag.match(/src="([^"]+)"/)[1];assert.ok(existsSync('public'+src));}for(const id of ['privacidade','termos'])assert.ok(h.includes('id="'+id+'"'));}
 const css=readFileSync('app/globals.css','utf8');assert.match(css,/prefers-reduced-motion/);assert.match(css,/max-width:600px/);assert.match(css,/--paper:#050C13/);assert.match(css,/--copper:#EF5309/);const analytics=readFileSync('components/Analytics.tsx','utf8');assert.doesNotMatch(analytics,/leadFields|\.answers|\.phone|\.name|profile:/);
});
test('domain upgrades preserve campaigns and HTML remains revalidated',async()=>{
 for(const origin of ['http://ravytdigital.com','http://www.ravytdigital.com','https://www.ravytdigital.com']){const r=await worker.fetch(new Request(origin+'/?utm_source=campaign&utm_medium=cpc'),env,ctx);assert.equal(r.status,308);assert.equal(r.headers.get('location'),'https://ravytdigital.com/?utm_source=campaign&utm_medium=cpc');}
 assert.equal((await request('/')).headers.get('cache-control'),'no-cache, max-age=0, must-revalidate');
});

test('commercial calls to action open only the requested WhatsApp directly, with the new photo',async()=>{
 const h=visible(await home());assert.ok(h.includes('Converse com um especialista da Ravyt Digital'));assert.doesNotMatch(h,/data-open-contact|rv-contact-dialog|diagnóstico|diagnostico|9695.?6479/i);
 const contacts=[...h.matchAll(/href="(https:\/\/wa\.me\/[^"]+)"/g)].map(m=>m[1]);assert.ok(contacts.length>=7);for(const href of contacts){const url=new URL(href.replaceAll('&amp;','&'));assert.equal(url.pathname,'/5588996777332');assert.match(url.searchParams.get('text'),/59,90/);}
 assert.match(h,/src="\/team\/ravyt-atendimento-224.webp"/);assert.ok(existsSync('public/team/ravyt-atendimento-224.webp'));assert.equal((h.match(/class="rv-team-public"/g)||[]).length,1);
});

test('one monthly plan includes every service and the NFC bonus at the supplied monthly price',async()=>{const h=visible(await home());assert.equal((h.match(/class="rv-annual-plan"/g)||[]).length,1);assert.match(h,/R\$ 59,90/);assert.match(h,/por mês/);assert.match(h,/Bônus incluído/);assert.match(h,/Cartão NFC/);assert.doesNotMatch(h,/Sob consulta|Conversar sobre o serviço|Posso contratar apenas/);});
