import type {Metadata} from 'next';
import {SITE_URL} from './site';
export function pageMetadata(path:string,title:string,description:string,type:'website'|'article'='website'):Metadata {
 const url=SITE_URL+path;
 return {title,description,alternates:{canonical:url},openGraph:{type,url,title,description,locale:'pt_BR',siteName:'Ravyt Digital',images:[{url:SITE_URL+'/brand/ravyt-social-card.webp',width:1200,height:630,alt:'Ravyt Digital'}]},twitter:{card:'summary_large_image',title,description,images:[SITE_URL+'/brand/ravyt-social-card.webp']}};
}
export function webpage(path:string,title:string,description:string){return {'@type':'WebPage','@id':SITE_URL+path+'#webpage',url:SITE_URL+path,name:title,description,inLanguage:'pt-BR',isPartOf:{'@id':SITE_URL+'/#website'},about:{'@id':SITE_URL+'/#organization'}};}
export function breadcrumb(path: string, title: string, parent?: {path: string; name: string}) {
  const pages = [{path: '/', name: 'Início'}, ...(parent ? [parent] : []), {path, name: title}];
  return {'@type':'BreadcrumbList',itemListElement:pages.map((page,index) => ({
    '@type':'ListItem',position:index+1,name:page.name,item:SITE_URL+page.path,
  }))};
}
