import StructuredData from './StructuredData';
import {SITE_URL} from '@/lib/site';
import type {SiteLanguage} from '@/lib/brand-copy';
const names={
 pt:['Contato','Sobre a Ravyt','Portfólio','Diagnóstico','Contratação online','Preço e escopo','Privacidade','Cookies','Termos de uso'],
 en:['Contact','About Ravyt','Portfolio','Assessment','Remote setup','Price and scope','Privacy','Cookies','Terms of use'],
 fr:['Contact','À propos de Ravyt','Portfolio','Diagnostic','Mise en place à distance','Prix et périmètre','Confidentialité','Cookies','Conditions d’utilisation'],
 es:['Contacto','Sobre Ravyt','Portafolio','Diagnóstico','Contratación online','Precio y alcance','Privacidad','Cookies','Términos de uso']
};
const paths=['/contato','/sobre','/cases','/diagnostico','/criacao-de-sites-online','/quanto-custa-criar-um-site','/politica-de-privacidade','/politica-de-cookies','/termos-de-uso'];
export default function PageEntity({path,lang}:{path:string;lang:SiteLanguage}){
 const raw=path.replace(/^\/(en|fr|es)(?=\/|$)/,'')||'/',prefix=lang==='pt'?'':'/'+lang;
 // Articles, author profiles and the checklist already describe their own page entity.
 if(raw.startsWith('/blog/')||raw.startsWith('/autores/')||raw.startsWith('/recursos/'))return null;
 const url=SITE_URL+(path==='/'?'/':path),graph:object[]=[{'@type':'WebPage','@id':url+'#webpage',url,inLanguage:lang==='pt'?'pt-BR':lang,isPartOf:{'@id':SITE_URL+'/#website'},about:{'@id':SITE_URL+'/#organization'}}];
 const index=paths.indexOf(raw);
 if(index>=0)graph.push({'@type':'BreadcrumbList','@id':url+'#breadcrumbs',itemListElement:[{'@type':'ListItem',position:1,name:{pt:'Início',en:'Home',fr:'Accueil',es:'Inicio'}[lang],item:SITE_URL+prefix},{'@type':'ListItem',position:2,name:names[lang][index],item:url}]});
 return <StructuredData data={{'@context':'https://schema.org','@graph':graph}}/>;
}
