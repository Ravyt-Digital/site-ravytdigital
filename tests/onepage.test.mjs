import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync,readdirSync,existsSync} from 'node:fs';
import worker from '../dist/server/index.js';
const env={ASSETS:{fetch:async()=>new Response('',{status:404})}},ctx={waitUntil(){},passThroughOnException(){}};
const request=(path,headers={})=>worker.fetch(new Request('https://ravytdigital.com'+path,{headers}),env,ctx);
let html;const home=async()=>html??=(await(await request('/')).text());
const visible=s=>s.replace(/<script\b[\s\S]*?<\/script>/g,'');
test('only the root is an HTML page and the sitemap contains exactly one canonical URL',async()=>{
 const pages=readdirSync('app',{recursive:true}).filter(p=>p.endsWith('page.tsx'));assert.deepEqual(pages,['page.tsx']);
 const r=await request('/');assert.equal(r.status,200);const h=await home();assert.equal((h.match(/<h1[ >]/g)||[]).length,1);assert.match(h,/<html lang="pt-BR"/);assert.ok(h.includes('R$ 597'));assert.ok(h.includes('SEO inicial'));assert.ok(h.includes('Ytala Cabral'));assert.ok(h.includes('Márcio Cabral'));
 const xml=await(await request('/sitemap.xml')).text();assert.equal((xml.match(/<loc>/g)||[]).length,1);assert.match(xml,/<loc>https:\/\/ravytdigital.com<\/loc>/);assert.doesNotMatch(xml,/hreflang|\/blog|\/en|\/sites/);
});
test('the form is the only contact channel and every visible link points to a section on the same page',async()=>{
 const h=visible(await home());assert.equal((h.match(/<form\b/g)||[]).length,1);assert.match(h,/action="https:\/\/api.web3forms.com\/submit"/);assert.match(h,/name="access_key"/);assert.doesNotMatch(h,/wa\.me|api\.whatsapp|mailto:|href="tel:|instagram\.com|facebook\.com|linkedin\.com/);
 for(const [,href]of h.matchAll(/<a\b[^>]*href="([^"]+)"/g)){assert.ok(href.startsWith('#'),href);assert.ok(h.includes('id="'+href.slice(1)+'"'),href);}
 const schemas=[...h.matchAll(/<script[^>]*application\/ld\+json[^>]*>(.*?)<\/script>/gs)]; // Script parsing is tested separately below.
 const code=readFileSync('components/ContactForm.tsx','utf8');assert.ok(code.includes("result?.success !== true"));assert.ok(code.includes("setFeedback('error')"));assert.ok(code.includes("setFeedback('success')"));assert.ok(code.includes('sendingRef.current'));assert.doesNotMatch(code,/Informe seu WhatsApp/);
});
test('old commercial and legal URLs redirect to real sections, old editorial pages are Gone',async()=>{
 for(const [path,id]of [['/sites','plano'],['/contato','contato'],['/sobre','sobre'],['/cases','exemplos'],['/politica-de-privacidade','privacidade'],['/fr/seo','plano'],['/en/contato','contato']]){
  const r=await request(path);assert.equal(r.status,301,path);const url=new URL(r.headers.get('location'));assert.equal(url.pathname,'/');assert.equal(url.hash,'#'+id);assert.ok((await home()).includes('id="'+id+'"'));
 }
 for(const path of ['/blog','/blog/site-bonito-nao-basta','/fr/blog/site-bonito-nao-basta','/recursos/checklist-presenca-google']){const r=await request(path);assert.equal(r.status,410,path);assert.equal(r.headers.get('x-robots-tag'),'noindex');}
 for(const path of ['/en','/fr','/es']){const r=await request(path);assert.equal(r.status,301);assert.equal(new URL(r.headers.get('location')).pathname,'/');}
 assert.equal((await request('/',{'accept-language':'en-US','cf-ipcountry':'US'})).status,200);
 const missing=await request('/pagina-inexistente');assert.equal(missing.status,404);assert.equal(missing.headers.get('x-robots-tag'),'noindex');
});
test('WebP images, heading hierarchy and structured data remain valid',async()=>{
 const h=await home();let previous=0;for(const [,level]of visible(h).matchAll(/<h([1-6])\b/g)){const n=Number(level);assert.ok(n<=previous+1);previous=n;}
 for(const [tag]of h.matchAll(/<img\b[^>]*>/g)){assert.match(tag,/width="\d+"/);assert.match(tag,/height="\d+"/);assert.match(tag,/alt="[^"]+"/);const src=tag.match(/src="([^"]+)"/)[1];assert.ok(src.endsWith('.webp'),src);assert.ok(existsSync('public'+src),src);}
 let organization=0;for(const [,json]of h.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)){const d=JSON.parse(json);for(const x of d['@graph']??[d]){if(x['@type']==='Organization')organization++;assert.doesNotMatch(JSON.stringify(x),/mailto:|wa\.me|"telephone"|"email"|\/autores\/|\/sobre#/);}}
 assert.equal(organization,1);assert.doesNotMatch(h,/hrefLang=|application\/rss/);
});
test('retired marketing artifacts and public descriptions are absent from the source and build',()=>{
 for(const p of ['docs','examples','public/ai.txt','public/blog','public/hero','public/mockups/cartao-nfc.webp','lib/webp-variants.ts'])assert.equal(existsSync(p),false,p);
 const css=readFileSync('app/globals.css','utf8');assert.doesNotMatch(css,/whatsapp|nfc|footer-social|checklist-page|blog-nav|blog-site-header/i);
 const llms=readFileSync('public/llms.txt','utf8');assert.doesNotMatch(llms,/NFC|moeda selecionada|otimizações contínuas|\/blog|\/sites\b|\/diagnostico/);
 for(const p of ['dist/client/ai.txt','dist/client/blog','dist/client/hero'])assert.equal(existsSync(p),false,p);
});
