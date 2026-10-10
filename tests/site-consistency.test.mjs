import assert from 'node:assert/strict';
import test from 'node:test';
import {existsSync,readFileSync} from 'node:fs';
import worker from '../dist/server/index.js';
const env={ASSETS:{fetch:async()=>new Response('',{status:404})}},ctx={waitUntil(){}};
const request=path=>worker.fetch(new Request('https://ravytdigital.com'+path,{headers:{'accept-language':'pt-BR'}}),env,ctx);
const rendered=new Map();
async function render(path){if(!rendered.has(path)){const r=await request(path);assert.equal(r.status,200,path);rendered.set(path,await r.text());}return rendered.get(path);}
const statements={pt:'Sites, SEO e presença no Google para profissionais liberais.',en:'Websites, SEO and Google presence for independent professionals.',fr:'Sites, SEO et présence sur Google pour les professionnels indépendants.',es:'Sitios, SEO y presencia en Google para profesionales independientes.'};
test('every published page has a sequential heading outline and valid WebP images with reserved dimensions',async()=>{
 const xml=await(await request('/sitemap.xml')).text();
 const paths=[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(x=>new URL(x[1]).pathname);
 const checked=new Set();
 for(const path of paths){const html=await render(path);let previous=0;
  for(const heading of html.matchAll(/<h([1-6])\b[^>]*>/g)){const level=Number(heading[1]);assert.ok(level<=previous+1,path+' skipped heading level: h'+previous+' to h'+level);previous=level;}
  for(const [tag] of html.matchAll(/<img\b[^>]*>/g)){
   assert.match(tag,/\bwidth="[1-9]\d*"/,path+' image width');assert.match(tag,/\bheight="[1-9]\d*"/,path+' image height');
   let src=tag.match(/\bsrc="([^"]+)"/)?.[1]?.replaceAll('&amp;','&');assert.ok(src,path+' image src');
   if(src.startsWith('/_vinext/image'))src=new URL(src,'https://ravytdigital.com').searchParams.get('url');
   assert.ok(src?.endsWith('.webp'),path+' image must use WebP: '+src);
   if(!checked.has(src)){const bytes=readFileSync('public'+src);assert.equal(bytes.toString('ascii',0,4),'RIFF',src);assert.equal(bytes.toString('ascii',8,12),'WEBP',src);checked.add(src);}
  }
 }
});
test('all sitemap pages share identity, navigation and footer language selection',async()=>{
 const xml=await(await request('/sitemap.xml')).text();
 const paths=[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(x=>new URL(x[1]).pathname);
 assert.ok(paths.length>60);
 for(const path of paths){const html=await render(path),lang=path.match(/^\/(en|fr|es)(?:\/|$)/)?.[1]??'pt';
 assert.ok(html.includes(statements[lang]),path+' identity');
 assert.match(html,/<header[^>]+blog-site-header/,path);
 assert.match(html,/<footer[^>]+blog-footer/,path);
 const footer=html.match(/<footer[^>]+blog-footer[\s\S]*?<\/footer>/)[0];assert.match(footer,/<select/,path);
 assert.equal((html.match(/<h1\b/g)||[]).length,1,path);
 }
 console.log('Validated '+paths.length+' sitemap pages');
});
test('blog cards expose each article image, author, publication date and reading time',async()=>{
 for(const prefix of ['','/en','/fr','/es']){const html=await render(prefix+'/blog');
 const cards=[...html.matchAll(/<a[^>]+class="post-card"[^>]*>([\s\S]*?)<\/a>/g)];assert.ok(cards.length>=2,prefix);
 for(const [,card] of cards){assert.match(card,/<img[^>]+class="post-card-image"/);assert.match(card,/<strong>[^<]+<\/strong>/);assert.match(card,/<time dateTime="\d{4}-\d{2}-\d{2}"/i);assert.match(card,/post-card-meta/);
 const src=card.match(/<img[^>]+src="([^"]+)"/)[1];assert.ok(existsSync('public'+src),src);
 }
 }
});
test('annual plan scope, BRL pricing and direct contact remain aligned in every language',async()=>{
 for(const prefix of ['','/en','/fr','/es'])for(const path of [prefix||'/',prefix+'/sites',prefix+'/seo',prefix+'/google-meu-negocio',prefix+'/quanto-custa-criar-um-site',prefix+'/criacao-de-sites-online']){
 const html=await render(path);assert.ok(html.includes('One Page'),path);assert.ok(html.includes('data-pricing-currency="BRL"'),path);assert.ok(html.includes('wa.me/5588996956479'),path);assert.doesNotMatch(html,/rv-currency/);
 }
});
test('legacy service redirects point to a section that exists',async()=>{
 for(const prefix of ['','/en','/fr','/es']){const r=await request(prefix+'/servicos');assert.ok([301,302,307,308].includes(r.status));const url=new URL(r.headers.get('location'),'https://ravytdigital.com');const html=await render(url.pathname);assert.ok(html.includes('id="'+url.hash.slice(1)+'"'));}
});
test('internal page links and section anchors resolve',async()=>{
 const failures=[],checked=new Set();
 for(const [path,html] of [...rendered]){
  const markup=html.replace(/<script\b[\s\S]*?<\/script>/g,'');
  for(const m of markup.matchAll(/<a\b[^>]*href="([^"]+)"/g)){
   const href=m[1];if(!href.startsWith('/')&&!href.startsWith('#'))continue;
   const url=new URL(href,'https://ravytdigital.com'+path),key=url.pathname+url.hash;
   if(checked.has(key))continue;checked.add(key);
   const r=await request(url.pathname);if(r.status===404){failures.push(path+' → '+href);continue;}
   if(url.hash&&r.status===200){const target=await r.text(),id=decodeURIComponent(url.hash.slice(1));if(!target.includes('id="'+id+'"'))failures.push(path+' → '+href+' (anchor missing)');}
  }
 }
 assert.deepEqual(failures,[]);
});
