/* Native, reviewable translated routes; no third-party translation widget. */
const ts=require('typescript'),fs=require('fs'),path=require('path');
const source=JSON.parse(fs.readFileSync('lib/i18n/source.json'));
const dict={};for(const line of fs.readFileSync('lib/i18n/translations.tsv','utf8').split('\n')){if(!line.trim())continue;const [id,...values]=line.split('\t');if(values.length!==3)throw Error('Invalid translation '+id);dict[source[+id]]=values;}
const singles={Aceitar:['Accept','Accepter','Aceptar'],Acessos:['Access','Accès','Accesos'],Brasil:['Brazil','Brésil','Brasil'],Busca:['Search','Recherche','Búsqueda'],Cases:['Work','Réalisations','Proyectos'],Confia:['Trusts','Fait confiance','Confía'],Conhecer:['Explore','Découvrir','Conocer'],Contato:['Contact','Contact','Contacto'],Conteúdo:['Content','Contenu','Contenido'],Diagnóstico:['Assessment','Diagnostic','Diagnóstico'],Empresa:['Company','Entreprise','Empresa'],Encontra:['Finds','Trouve','Encuentra'],Entendimento:['Understanding','Compréhension','Comprensión'],Entregas:['Deliverables','Livrables','Entregas'],Estrutura:['Structure','Structure','Estructura'],Fechar:['Close','Fermer','Cerrar'],Funções:['Roles','Rôles','Funciones'],Início:['Home','Accueil','Inicio'],Manutenção:['Maintenance','Maintenance','Mantenimiento'],Nome:['Name','Nom','Nombre'],Pesquisa:['Research','Recherche','Investigación'],Por:['By','Par','Por'],Portfólio:['Portfolio','Portfolio','Portafolio'],Privacidade:['Privacy','Confidentialité','Privacidad'],Publicação:['Publication','Publication','Publicación'],Recusar:['Reject','Refuser','Rechazar'],Serviços:['Services','Services','Servicios'],Site:['Website','Site','Sitio web'],Sites:['Websites','Sites','Sitios web'],Verifique:['Check','Vérifiez','Verifica'],'Google • Site • SEO':['Google • Website • SEO','Google • Site • SEO','Google • Sitio web • SEO'],'Blog Ravyt Digital':['Ravyt Digital Blog','Blog Ravyt Digital','Blog de Ravyt Digital'],'Olá! Gostaria de conversar sobre os serviços da Ravyt Digital.':['Hello! I would like to discuss Ravyt Digital’s services.','Bonjour ! Je souhaite discuter des services de Ravyt Digital.','¡Hola! Me gustaría hablar sobre los servicios de Ravyt Digital.'],'Por que o serviço é mensal?':['Why is maintenance ongoing?','Pourquoi la maintenance est-elle continue ?','¿Por qué el mantenimiento es continuo?']};
dict['Um cookie essencial guarda o idioma que você escolheu por até 12 meses, para manter sua preferência nas próximas visitas.']=['An essential cookie remembers your chosen language for up to 12 months, preserving your preference on future visits.','Un cookie essentiel mémorise la langue choisie pendant 12 mois au maximum afin de conserver votre préférence lors des prochaines visites.','Una cookie esencial guarda el idioma elegido durante un máximo de 12 meses para conservar tu preferencia en futuras visitas.'];
Object.assign(dict,singles,{"/ano":["/year","/an","/año"]});
for(const [key,values] of Object.entries(dict)){const annual=key.replace('oferta mensal Google + Site + SEO','oferta anual Google + Site + SEO').replace('mensalidade','plano anual').replace('Por que o serviço é mensal?','Por que a manutenção é contínua?');if(annual!==key)dict[annual]=values.map(value=>value.replace('monthly Google + Website + SEO offer','annual Google + Website + SEO offer').replace('monthly fee','annual plan').replace('offre mensuelle Google + Site + SEO','offre annuelle Google + Site + SEO').replace('mensualité','forfait annuel').replace('oferta mensual de Google + Sitio web + SEO','oferta anual de Google + Sitio web + SEO').replace('cuota mensual','plan anual').replace('oferta mensual Google + Sitio web + SEO','oferta anual Google + Sitio web + SEO').replace('en la mensualidad','en el plan anual'));}
function walk(d){return fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);}
const files=[...walk('app').filter(f=>f.endsWith('.tsx')&&!/^app\/(en|fr|es)\//.test(f)&&!['app/layout.tsx','app/loading.tsx','app/not-found.tsx'].includes(f)),...walk('components').filter(f=>f.endsWith('.tsx')&&!f.startsWith('components/i18n/')),'lib/commercial.ts','lib/metadata.ts','lib/contact.ts','app/blog/posts.ts','app/blog/strategic-posts.ts'];
const excluded=new Set(['className','rel','type','id','data-track','data-reveal','style','name','role','target','method']);
const paths=new Set(walk('app').filter(f=>f.endsWith('/page.tsx')&&!/^app\/(en|fr|es)\//.test(f)).map(f=>'/'+f.slice(4,-9)).map(x=>x==='/'?'/':x.replace(/\/$/,'')));
function translatedFile(f,lang){return f.startsWith('app/')?'app/'+lang+'/'+f.slice(4):'locales/'+lang+'/'+f;}
function prefix(s,lang){if(s==='/'||[...paths].some(p=>p!=='/'&&(s===p||s.startsWith(p+'/')||s.startsWith(p+'#')||s.startsWith(p+'?'))))return '/'+lang+(s==='/'?'':s);return s;}
function convert(src,f,lang,index){const sf=ts.createSourceFile(f,src,99,true,f.endsWith('tsx')?4:3),edits=[];
 function visit(n){
 if(ts.isStringLiteral(n)||ts.isNoSubstitutionTemplateLiteral(n)||ts.isJsxText(n)){
  const jsx=ts.isJsxText(n),s=jsx?n.getText(sf).replace(/\s+/g,' ').trim():n.text,attr=ts.isJsxAttribute(n.parent)?n.parent.name.getText(sf):'';
  let value=s;
  if(!excluded.has(attr)&&dict[s])value=dict[s][index];
  if(!jsx){
   if(ts.isImportDeclaration(n.parent)||ts.isExportDeclaration(n.parent)){
    const spec=s;let resolved=spec.startsWith('@/')?spec.slice(2):spec.startsWith('.')?path.normalize(path.join(path.dirname(f),spec)):null;
    if(resolved){const match=files.find(file=>file.replace(/\.(tsx?|jsx?)$/,'')===resolved);value=match?'@/'+translatedFile(match,lang).replace(/\.(tsx?|jsx?)$/,''):'@/'+resolved;}
   }else {value=prefix(value,lang); if(s==='/'&&ts.isBinaryExpression(n.parent)&&n.parent.operatorToken.kind===ts.SyntaxKind.PlusToken)value='/'+lang+'/';}
   if(s==='pt-BR'||s==='pt_BR')value=lang==='en'?(s==='pt_BR'?'en_US':'en-US'):lang==='fr'?(s==='pt_BR'?'fr_FR':'fr-FR'):(s==='pt_BR'?'es_ES':'es-ES');
  }
  if(value!==s){edits.push({start:n.getStart(sf),end:n.getEnd(),text:jsx?' '+value+' ':JSON.stringify(value)});}
 }
 if(ts.isTemplateHead(n)){const s=n.text,p=prefix(s,lang);if(p!==s)edits.push({start:n.getStart(sf),end:n.getEnd(),text:'`'+p+'${'});}
 ts.forEachChild(n,visit);
 }visit(sf);for(const e of edits.sort((a,b)=>b.start-a.start))src=src.slice(0,e.start)+e.text+src.slice(e.end);
 if(f==='lib/metadata.ts')return `import type {Metadata} from "next";
import {SITE_URL} from "@/lib/site";
export function pageMetadata(meta:Metadata):Metadata {const title=typeof meta.title==="string"?meta.title:"Ravyt Digital"; const url=String(meta.alternates?.canonical??"/${lang}");const raw=url.replace(/^\\/(en|fr|es)(?=\\/|$)/,"")||"/";return {...meta,alternates:{...meta.alternates,languages:{"pt-BR":raw,en:"/en"+(raw==="/"?"":raw),fr:"/fr"+(raw==="/"?"":raw),es:"/es"+(raw==="/"?"":raw),"x-default":raw}},openGraph:{type:"website",locale:"${{en:'en_US',fr:'fr_FR',es:'es_ES'}[lang]}",siteName:"Ravyt Digital",title,description:meta.description??undefined,url,images:[{url:"/brand/ravyt-social-card.jpg",width:1200,height:630,alt:"Ravyt Digital"}]},twitter:{card:"summary_large_image",title,description:meta.description??undefined,images:["/brand/ravyt-social-card.jpg"]}};}
`;
 src=src.replace(/\$\{SITE_URL\}\/blog/g,'$'+'{SITE_URL}/'+lang+'/blog');
 return src;
}
function prices(src,f){if(!f.endsWith('tsx')||src.includes('import {PriceText}'))return src;const sf=ts.createSourceFile(f,src,99,true,4),edits=[];let used=false;
 function visit(n){if(ts.isJsxText(n)&&/R\$\s*597/.test(n.getText(sf))){edits.push({start:n.getStart(sf),end:n.getEnd(),text:'<PriceText>'+n.getText(sf)+'</PriceText>'});used=true;}
 if(ts.isJsxExpression(n)&&n.expression&&!ts.isJsxAttribute(n.parent)&&!ts.isJsxSpreadAttribute(n.parent)&&!n.dotDotDotToken){edits.push({start:n.getStart(sf)+1,end:n.getStart(sf)+1,text:'<PriceText>{'});edits.push({start:n.getEnd()-1,end:n.getEnd()-1,text:'}</PriceText>'});used=true;}
 ts.forEachChild(n,visit);}visit(sf);
 for(const e of edits.sort((a,b)=>b.start-a.start))src=src.slice(0,e.start)+e.text+src.slice(e.end);
 if(used)src=src.replace(/^(\s*['"]use client['"];?\s*)?/,m=>m+'\nimport {PriceText} from "@/components/i18n/Regional";\n');
 if(src.includes('className="rv-offer-price"')){src=src.replace('</strong><span className="rv-plan-perk">','</strong><ExchangeNote/><span className="rv-plan-perk">').replace('</strong><span className="rv-monthly">','</strong><ExchangeNote/><span className="rv-monthly">');src='import {ExchangeNote} from "@/components/i18n/Regional";\n'+src;}
 return src;
}
for(const [i,lang] of ['en','fr','es'].entries())for(const f of files){const output=translatedFile(f,lang);fs.mkdirSync(path.dirname(output),{recursive:true});fs.writeFileSync(output,prices(convert(fs.readFileSync(f,'utf8'),f,lang,i),f));}
// The original Portuguese pages use exactly the same converter.
for(const f of files.filter(x=>x.endsWith('.tsx'))){const src=fs.readFileSync(f,'utf8');if(!src.includes('import {PriceText}'))fs.writeFileSync(f,prices(src,f));}
console.log('Generated three complete translated route trees.');
