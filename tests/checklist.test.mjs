import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../dist/server/index.js';
const env={ASSETS:{fetch:async()=>new Response('',{status:404})}},ctx={waitUntil(){},passThroughOnException(){}};
const fetchPage=path=>worker.fetch(new Request('https://ravytdigital.com'+path,{headers:{'user-agent':'SEO-audit-bot'}}),env,ctx);
test('the resource is indexable, translated and cited in all four languages', async()=>{
  const titles=['Checklist de presença no Google','Google presence checklist','Checklist de présence sur Google','Checklist de presencia en Google'];
  const prefixes=['','/en','/fr','/es'];
  const sitemap=await (await fetchPage('/sitemap.xml')).text();
  for(const [index,prefix] of prefixes.entries()){
    const path=prefix+'/recursos/checklist-presenca-google';
    const response=await fetchPage(path);assert.equal(response.status,200,path);
    const html=await response.text();
    const visible=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'');
    assert.ok(visible.includes(titles[index]),path);
    assert.equal((visible.match(/type="checkbox"/g)||[]).length,12,path);
    assert.equal((visible.match(/<h1[ >]/g)||[]).length,1,path);
    assert.match(html,new RegExp('<link rel="canonical" href="https://ravytdigital.com'+path+'"'));
    assert.equal((html.match(/<link rel="alternate" hrefLang=/gi)||[]).length,5,path);
    assert.ok(sitemap.includes('<loc>https://ravytdigital.com'+path+'</loc>'));
    assert.ok(visible.includes('https://support.google.com/business/answer/3038177'));
    const schema=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(([,json])=>JSON.parse(json)).find(data=>data['@type']==='WebPage');
    assert.equal(schema.mainEntity.numberOfItems,12);
    assert.equal(schema.url,'https://ravytdigital.com'+path);
    assert.equal(schema.isAccessibleForFree,true);
    if(prefix) assert.ok(!visible.includes('pontos conferidos'),path+' must not show Portuguese instructions');
    for(const source of ['', '/cases', '/blog']){
      const listing=await (await fetchPage(prefix+source || '/')).text();
      assert.ok(listing.includes('href="'+path+'"'),prefix+source+' resource link');
    }
  }
});
