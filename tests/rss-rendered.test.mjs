import test from 'node:test';
import assert from 'node:assert/strict';
import {writeFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import worker from '../dist/server/index.js';
const env={ASSETS:{fetch:async()=>new Response('',{status:404})}},ctx={waitUntil(){},passThroughOnException(){}};
const request=(path,headers={})=>worker.fetch(new Request('https://ravytdigital.com'+path,{headers}),env,ctx);
test('public RSS is valid XML and contains precisely the articles published in the blog',async()=>{const response=await request('/blog/rss.xml',{'accept-language':'fr-FR'});assert.equal(response.status,200);assert.match(response.headers.get('content-type'),/^application\/rss\+xml; charset=utf-8$/);assert.equal(response.headers.get('location'),null);const xml=await response.text();writeFileSync('/tmp/ravyt-rss-verified.xml',xml);const parsed=JSON.parse(execFileSync('python',['-c',`import xml.etree.ElementTree as E,json
root=E.parse('/tmp/ravyt-rss-verified.xml').getroot()
assert root.tag=='rss' and root.attrib['version']=='2.0'
channel=root.find('channel')
assert channel.findtext('title') and channel.findtext('link') and channel.findtext('description')
items=channel.findall('item')
for item in items:
 assert item.findtext('title') and item.findtext('link') and item.findtext('pubDate')
 assert item.findtext('{http://purl.org/rss/1.0/modules/content/}encoded')
print(json.dumps([item.findtext('link') for item in items]))`],{encoding:'utf8'}));const page=await (await request('/blog',{cookie:'ravyt_language=pt'})).text();const links=[...new Set([...page.matchAll(/href="(\/blog\/(?!rss\.xml)[^"#?]+)"/g)].map(match=>'https://ravytdigital.com'+match[1]))];assert.deepEqual([...parsed].sort(),links.sort());assert.ok(page.includes('type="application/rss+xml"'));assert.ok(page.includes('href="/blog/rss.xml"'));});
