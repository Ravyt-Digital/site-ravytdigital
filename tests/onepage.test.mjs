import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync,readdirSync,existsSync} from 'node:fs';
import worker from '../dist/server/index.js';
const env={ASSETS:{fetch:async()=>new Response('',{status:404})}},ctx={waitUntil(){},passThroughOnException(){}};
const request=(path,headers={})=>worker.fetch(new Request('https://ravytdigital.com'+path,{headers}),env,ctx);
let html;const home=async()=>html??=(await(await request('/')).text());
const visible=s=>s.replace(/<script\b[\s\S]*?<\/script>/g,'');
test('one canonical page renders the diagnostic introduction and legal documents without old sales sections',async()=>{
 assert.deepEqual(readdirSync('app',{recursive:true}).filter(p=>p.endsWith('page.tsx')),['page.tsx']);
 assert.equal((await request('/')).status,200);const h=await home(),v=visible(h);
 assert.equal((v.match(/<h1[ >]/g)||[]).length,1);assert.match(v,/<html lang="pt-BR"/);assert.match(v,/Descubra como melhorar/);assert.match(v,/Responda 5 perguntas rápidas e receba uma avaliação inicial do seu negócio/);assert.match(v,/Gratuito • Sem compromisso/);assert.doesNotMatch(v,/dg-audience|dg-start-meta|Seu trabalho merece/);assert.match(v,/Começar meu diagnóstico/);assert.match(v,/contatoravyt@gmail.com/);assert.match(v,/Após o encerramento desse relacionamento/);
 assert.doesNotMatch(v,/R\$ 597|O plano|Exemplos de apresentação|Márcio Cabral|Sites profissionais, SEO inicial|wa\.me|mailto:|href="tel:|api\.whatsapp/);
 assert.equal((v.match(/<form\b/g)||[]).length,0,'form appears only after answers');
 const xml=await(await request('/sitemap.xml')).text();assert.equal((xml.match(/<loc>/g)||[]).length,1);assert.match(xml,/<loc>https:\/\/ravytdigital.com<\/loc>/);
 assert.match(h,/<title>Diagnóstico de Presença Digital \| Ravyt Digital<\/title>/);assert.match(h,/rel="canonical"[^>]*href="https:\/\/ravytdigital.com"/);
});
test('legal and contact links map to actual sections; retired content returns Gone without unrelated redirects',async()=>{
 const h=visible(await home());for(const [,href]of h.matchAll(/<a\b[^>]*href="([^"]+)"/g)){assert.ok(href.startsWith('#'),href);assert.ok(h.includes('id="'+href.slice(1)+'"'),href);}
 for(const [path,id]of [['/contato','diagnostico'],['/diagnostico','diagnostico'],['/politica-de-privacidade','privacidade'],['/politica-de-cookies','cookies'],['/termos','termos']]){const r=await request(path);assert.equal(r.status,301);assert.equal(new URL(r.headers.get('location')).hash,'#'+id);}
 for(const path of ['/sites','/seo','/cases','/sobre','/fr/seo','/blog','/blog/site-bonito-nao-basta','/recursos/checklist-presenca-google']){const r=await request(path);assert.equal(r.status,410,path);assert.equal(r.headers.get('x-robots-tag'),'noindex');}
 for(const path of ['/en','/fr','/es']){const r=await request(path);assert.equal(r.status,301);assert.equal(new URL(r.headers.get('location')).pathname,'/');}
 assert.equal((await request('/',{'accept-language':'en-US'})).status,200);assert.equal((await request('/inexistente')).status,404);
});
test('brand assets, schema and responsive safeguards match the new page',async()=>{
 const h=await home();for(const [tag]of visible(h).matchAll(/<img\b[^>]*>/g)){assert.match(tag,/width="\d+"/);assert.match(tag,/height="\d+"/);assert.match(tag,/alt="[^"]+"/);const src=tag.match(/src="([^"]+)"/)[1];assert.ok(src.endsWith('.webp'));assert.ok(existsSync('public'+src));}
 let organization=0;for(const [,json]of h.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)){const d=JSON.parse(json);for(const x of d['@graph']??[d]){if(x['@type']==='Organization'){organization++;assert.equal(x.email,'contatoravyt@gmail.com');}assert.doesNotMatch(JSON.stringify(x),/"Offer"|"Service"|#plano|#sobre|"telephone"/);}}
 assert.equal(organization,1);assert.doesNotMatch(h,/preload[^>]*mockups/);const css=readFileSync('app/globals.css','utf8');assert.match(css,/prefers-reduced-motion/);assert.match(css,/max-width:600px/);assert.match(css,/minmax\(0,1fr\)/);
 const manifest=await(await request('/manifest.webmanifest')).text();assert.doesNotMatch(manifest,/favicon\.png/);
});
test('obsolete navigation, sales assets and styles are removed; optional analytics exclude lead data',()=>{
 for(const p of ['components/OnePageMenu.tsx','public/projects','public/mockups','public/team','public/ai.txt','public/blog','public/hero'])assert.equal(existsSync(p),false,p);
 assert.doesNotMatch(readFileSync('app/globals.css','utf8'),/rv-process-grid|op-price|op-projects|rv-focus-hero/);
 assert.doesNotMatch(readFileSync('public/llms.txt','utf8'),/R\$ 597|\/sites\b|NFC/);
 const analytics=readFileSync('components/Analytics.tsx','utf8');assert.doesNotMatch(analytics,/leadFields|\.answers|\.phone|\.name|profile:/);
 assert.equal(existsSync('dist/client/mockups'),false);
});
