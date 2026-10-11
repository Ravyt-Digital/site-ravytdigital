export type SiteLanguage='pt'|'en'|'fr'|'es';
// Countries with Portuguese, Spanish or French as an official national language.
// Portuguese takes precedence in Equatorial Guinea; French in other multilingual countries.
const portuguese=new Set('AO BR CV GW MZ PT ST TL GQ MO'.split(' '));
const spanish=new Set('AR BO CL CO CR CU DO EC ES GT HN MX NI PA PE PR PY SV UY VE'.split(' '));
const french=new Set('BE BF BI BJ CA CD CF CG CH CI CM DJ FR GA GN HT KM LU MC MG ML NE RW SC SN TD TG VU DZ MA TN MR MU GF GP MQ RE YT MF BL PM NC PF WF'.split(' '));
export function normalizeCountry(country:string){const code=country.toUpperCase();return /^[A-Z]{2}$/.test(code)&&!['XX','ZZ','T1'].includes(code)?code:'';}
export function countryLanguage(country:string):SiteLanguage {const code=normalizeCountry(country);return portuguese.has(code)?'pt':spanish.has(code)?'es':french.has(code)?'fr':'en';}
export function countryName(country:string,lang:SiteLanguage){const code=normalizeCountry(country);if(!code)return '';const name=new Intl.DisplayNames([lang==='pt'?'pt-BR':lang],{type:'region',fallback:'none'}).of(code);return name??'';}
const ptFeminine=new Set('AL DE AD SA DZ AR AM AU AT BE BO BA BW BG KH CN CO KR CI CR HR DK DM ER SK SI ES EE ET FI FR GM GE GR GN GQ HU IN ID IS IT JO LV LR LY LT MK MY MD MN MM NG NO NZ PL RO RU RS SY ZA SZ TH TW TN TR UA UZ VE'.split(' '));
// Exceptions to the simple gender groups, and country names normally used without an article.
const ptNoArticleM=new Set('CV IL MO MZ PT ST TL'.split(' '));
const ptNoArticleF=new Set('AO CU GD GT GY HT HN JM MG MT NA NI PA PG LC WS SG SO LK TZ UG ZM'.split(' '));
const ptMasculine=new Set('AF AZ BH BD BB BZ BT BN BR BF BI BT CA CL CY CD CG EG EC FJ GA GH IQ IR JP KE KZ KW LA LB LS LI LU MA MC ME MX NE OM PK PE PY QA RW SD SN SL SR TD TJ TM TN TT UY UZ YE ZW'.split(' '));
const ptPluralM=new Set('AE US NL'.split(' '));const ptPluralF=new Set('BS PH KM MV SC MH SB'.split(' '));
const feminineNames=new Set('AL DE AD SA DZ AR AM AU AT BE BO BA BG CN CO KR CI CR HR DK SK SI ES EE ET FI FR GM GE GR GN GQ HU IN ID IS IT JO LV LR LY LT MK MY MD MN MM NG NO NZ PL RO RU RS SY ZA TH TW TN TR UA VE'.split(' '));
export function coveragePhrase(country:string,lang:SiteLanguage){const code=normalizeCountry(country),name=countryName(code,lang);if(!name)return {pt:'em todo o mundo',en:'worldwide',fr:'partout dans le monde',es:'en todo el mundo'}[lang];
 if(lang==='en')return 'throughout '+(['US','GB','NL','PH','AE','BS','GM','CD','CG','CF','DO','MH','SB'].includes(code)?'the ':'')+name;
 if(lang==='pt'){
  if(ptPluralM.has(code))return 'em todos os '+name;if(ptPluralF.has(code))return 'em todas as '+name;
  if(ptNoArticleF.has(code))return 'em toda '+name;if(ptNoArticleM.has(code))return 'em todo '+name;
  if(ptMasculine.has(code))return 'em todo o '+name;if(ptFeminine.has(code))return 'em toda a '+name;
  return 'em todo o país ('+name+')';
 }
 if(lang==='fr'){
  if(['US','AE','NL'].includes(code))return 'dans tous les '+name;
  if(['PH','SC','MV','BS','KM','MH','SB'].includes(code))return 'dans toutes les '+name;
  if(feminineNames.has(code))return 'dans toute '+(/^[AEIOUYÀÂÉÈÊËÎÏÔÙÛÜ]/i.test(name)?'l’':'la ')+name;
  if(new Set('AF AZ BD BH BZ BT BN BR BF BI CA CL CY CD CG CM EC EG GA GH IQ IR JP KE KZ KW LA LB LS LI LU MA MC ME MX ML MZ NE NG OM PK PA PE PY PT QA RW SD SN SL SR TD TJ TM TN TT UY UZ VE VN YE ZW'.split(' ')).has(code))return 'dans tout '+(/^[AEIOUYÀÂÉÈÊËÎÏÔÙÛÜ]/i.test(name)?'l’':'le ')+name;
  return 'partout dans le pays ('+name+')';
 }
 if(['US','AE','NL'].includes(code))return 'en todos los '+name;
 if(['PH','SC','MV','BS','KM','MH','SB'].includes(code))return 'en todas las '+name;
 if(code==='IN')return 'en toda la '+name;
 return 'en tod'+(feminineNames.has(code)?'a ':'o ')+name;
}
export function regionalServiceText(text:string,country:string,lang:SiteLanguage){
 return text.replace(/((?:atendimento|Atendimento)(?: da Ravyt (?:é|oferecido))? (?:remoto )?)em todo o Brasil/g,(_,prefix)=>prefix+coveragePhrase(country,lang))
 .replace(/((?:remote services?|Remote services?) )throughout Brazil/g,(_,prefix)=>prefix+coveragePhrase(country,lang))
 .replace(/((?:service à distance|Service à distance) )dans tout le Brésil/g,(_,prefix)=>prefix+coveragePhrase(country,lang))
 .replace(/((?:atención remota|Atención remota) )en todo Brasil/g,(_,prefix)=>prefix+coveragePhrase(country,lang));
}
