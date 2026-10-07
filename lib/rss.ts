import {formatPrices} from "./i18n/regional";
import type {BlogPost} from "../app/blog/posts";

export function xmlText(value:string){return formatPrices(value,'BRL','pt').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g,"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");}
function date(value:string){const result=new Date(value.length===10?value+"T12:00:00Z":value);if(!Number.isFinite(result.getTime()))throw new Error("Invalid article date: "+value);return result;}
function articleHtml(post:BlogPost,origin:string){
 const paragraph=(text:string)=>`<p>${xmlText(text)}</p>`;
 const heading=(text:string)=>`<h2>${xmlText(text)}</h2>`;
 const links=(items:{label:string;href:string}[])=>'<ul>'+items.map(item=>`<li><a href="${xmlText(new URL(item.href,origin).href)}">${xmlText(item.label)}</a></li>`).join('')+'</ul>';
 let html=paragraph(post.intro);
 if(post.quickAnswer)html+=heading('Resposta rápida')+paragraph(post.quickAnswer);
 for(const section of post.sections){html+=heading(section.title)+section.paragraphs.map(paragraph).join('');if(section.links?.length)html+=links(section.links);}
 if(post.comparison){html+=heading(post.comparison.title)+paragraph(post.comparison.note)+'<table><thead><tr>'+post.comparison.headers.map(text=>`<th>${xmlText(text)}</th>`).join('')+'</tr></thead><tbody>'+post.comparison.rows.map(row=>'<tr>'+row.map(text=>`<td>${xmlText(text)}</td>`).join('')+'</tr>').join('')+'</tbody></table>';}
 if(post.checklist)html+=heading(post.checklist.title)+'<ul>'+post.checklist.items.map(text=>`<li>${xmlText(text)}</li>`).join('')+'</ul>';
 if(post.editorialNote)html+=paragraph(post.editorialNote);
 if(post.sources?.length)html+=heading('Fontes')+links(post.sources.map(source=>({label:source.label,href:source.url})));
 html+=paragraph(`Leia o artigo no blog da Ravyt Digital: ${origin}/blog/${post.slug}`);
 return html;
}
export function blogRss(posts:BlogPost[],origin:string){
 const ordered=[...posts].sort((a,b)=>date(b.date).getTime()-date(a.date).getTime()||a.slug.localeCompare(b.slug));
 const updated=ordered.length?new Date(Math.max(...ordered.map(post=>date(post.modified??post.date).getTime()))).toUTCString():undefined;
 const items=ordered.map(post=>{const url=origin+'/blog/'+encodeURIComponent(post.slug);const content=articleHtml(post,origin).replace(/\]\]>/g,']]]]><![CDATA[>');return `<item><title>${xmlText(post.title)}</title><link>${xmlText(url)}</link><guid isPermaLink="true">${xmlText(url)}</guid><description>${xmlText(post.excerpt)}</description><pubDate>${date(post.date).toUTCString()}</pubDate><category>${xmlText(post.category)}</category><dc:creator>${xmlText(post.author??'Ytala Cabral')}</dc:creator><content:encoded><![CDATA[${content}]]></content:encoded></item>`;}).join('\n');
 return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/"><channel><title>Blog Ravyt Digital</title><link>${xmlText(origin+'/blog')}</link><description>Guias sobre criação de sites, presença no Google e SEO para empresas.</description><language>pt-BR</language><atom:link href="${xmlText(origin+'/blog/rss.xml')}" rel="self" type="application/rss+xml"/>${updated?'<lastBuildDate>'+updated+'</lastBuildDate>':''}<ttl>60</ttl>${items}</channel></rss>`;
}
