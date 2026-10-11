import type { BlogPost } from '@/app/blog/posts';
export type ArticleCopy = {title:string;excerpt:string;category:string;intro:string;quickAnswer:string;sections:string[][];images:[string,string][];checklist:{title:string;items:string[]};comparison?:BlogPost['comparison'];serviceLabel:string;ctaTitle:string;editorialNote:string};
export function localizeArticle(original:BlogPost,lang:'en'|'fr'|'es',copy:ArticleCopy):BlogPost {
 const locale={en:'en-US',fr:'fr-FR',es:'es-ES'}[lang];
 const path=(href:string)=>href.startsWith('/')?`/${lang}${href==='/'?'':href}`:href;
 const reference={en:'Reference',fr:'Référence',es:'Referencia'}[lang];
 return {...original,...copy,dateLabel:new Intl.DateTimeFormat(locale,{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(original.date+'T12:00:00Z')),readingTime:original.readingTime.replace('min de leitura',{en:'min read',fr:'min de lecture',es:'min de lectura'}[lang]),author:original.author?{en:'Ravyt Digital team',fr:'Équipe Ravyt Digital',es:'Equipo Ravyt Digital'}[lang]:undefined,
 sections:copy.sections.map(([title,...paragraphs],i)=>({title,paragraphs,links:original.sections[i].links?.map(link=>({href:path(link.href),label:link.href.startsWith('/')?`${reference}: ${link.href.includes('/blog/')?{en:'related article',fr:'article associé',es:'artículo relacionado'}[lang]:{en:'Ravyt services',fr:'services Ravyt',es:'servicios Ravyt'}[lang]}`:`${new URL(link.href).hostname.replace(/^www\./,'')} — ${reference.toLowerCase()}`}))})),
 images:original.images?.map((image,i)=>({...image,alt:copy.images[i][0],caption:copy.images[i][1]})),sources:original.sources?.map(source=>({...source,label:new URL(source.url).hostname.replace(/^www\./,'')+' — '+reference.toLowerCase()})),serviceHref:path(original.serviceHref??'/diagnostico')};
}
