import type {Metadata} from 'next';
import {SITE_URL} from './site';
export function pageMetadata(path:string,title:string,description:string,type:'website'|'article'='website'):Metadata {
 const url=SITE_URL+path;
 return {title,description,alternates:{canonical:url},openGraph:{type,url,title,description,locale:'pt_BR',siteName:'Ravyt Digital',images:[{url:SITE_URL+'/brand/ravyt-social-card.webp',width:1200,height:630,alt:'Ravyt Digital — Perfil da Empresa no Google'}]},twitter:{card:'summary_large_image',title,description,images:[SITE_URL+'/brand/ravyt-social-card.webp']}};
}
export function webpage(path:string,title:string,description:string){return {'@type':'WebPage','@id':SITE_URL+path+'#webpage',url:SITE_URL+path,name:title,description,inLanguage:'pt-BR',isPartOf:{'@id':SITE_URL+'/#website'},about:{'@id':SITE_URL+'/#organization'}};}
export function breadcrumb(path:string,title:string){return {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Início',item:SITE_URL+'/'},{'@type':'ListItem',position:2,name:title,item:SITE_URL+path}]};}
