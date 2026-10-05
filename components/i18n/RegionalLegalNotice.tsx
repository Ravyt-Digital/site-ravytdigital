import texts from '@/lib/i18n/legal-regions.json';
const sources=[
 'https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3',
 'https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi',
 'https://www.aepd.es/recurso-multimedia/guia-sobre-el-uso-de-las-cookies',
 'https://oag.ca.gov/privacy/ccpa',
 'https://cppa.ca.gov/faq',
];
export default function RegionalLegalNotice({lang,kind}:{lang:keyof typeof texts;kind:'privacy'|'cookies'|'terms'}){
 const t=texts[lang];
 return <section aria-label={t.heading}><h2>{t.heading}</h2><p>{t.scope}</p>
 {kind==='terms'?<p>{t.contract}</p>:<><p>{t.eu}</p>{kind==='privacy'&&<p>{t.rights}</p>}<p>{t.us}</p><p>{t.choice}</p><p>{t.data}</p><p>{t.contact}</p></>}
 <h3>{t.links[0]}</h3><ul>{sources.map((url,i)=><li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{t.links[i+1]}</a></li>)}</ul></section>;
}
