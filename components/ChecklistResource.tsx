import Link from 'next/link';
import GoogleChecklist from '@/components/GoogleChecklist';
import StructuredData from '@/components/StructuredData';
import Breadcrumbs from '@/components/Breadcrumbs';
import { checklistCopy, checklistPath, checklistSources } from '@/lib/google-checklist';
import { SITE_URL } from '@/lib/site';

export function ChecklistCard({ lang = 'pt' }: { lang?: string }) {
  const copy = checklistCopy[lang];
  const href = (lang === 'pt' ? '' : `/${lang}`) + checklistPath;
  return <section className="rv-section checklist-card"><div className="shell"><p className="rv-label">{copy.label}</p><h2>{copy.cardTitle}</h2><p className="rv-intro">{copy.cardBody}</p><Link className="rv-text-link" href={href}>{copy.cardLink}</Link></div></section>;
}

export default function ChecklistResource({ lang = 'pt' }: { lang?: string }) {
  const copy = checklistCopy[lang];
  const prefix = lang === 'pt' ? '' : `/${lang}`;
  const url = SITE_URL + prefix + checklistPath;
  const schema = {
    '@context':'https://schema.org', '@type':'WebPage', '@id':`${url}#webpage`, url,
    name:copy.title, description:copy.description, inLanguage:lang === 'pt' ? 'pt-BR' : lang,
    isAccessibleForFree:true, publisher:{'@id':`${SITE_URL}/#organization`},
    isPartOf:{'@id':`${SITE_URL}/#website`}, datePublished:'2026-10-05', dateModified:'2026-10-05',
    citation:checklistSources, mainEntity:{'@type':'ItemList', name:copy.title, numberOfItems:copy.items.length,
      itemListElement:copy.items.map(([name, description], index) => ({'@type':'ListItem', position:index + 1, name, description}))},
  };
  return <main id="conteudo" tabIndex={-1} className="rv checklist-page"><StructuredData data={schema}/>
    <section className="rv-page-hero"><div className="shell"><Breadcrumbs items={[{name:'Ravyt Digital',href:prefix || '/'},{name:copy.title,href:prefix + checklistPath}]}/><p className="rv-label">{copy.label}</p><h1>{copy.title}</h1><p className="rv-lead">{copy.intro}</p></div></section>
    <section className="rv-section"><div className="shell"><GoogleChecklist copy={copy}/></div></section>
    <section className="rv-section checklist-references"><div className="shell"><h2>{copy.sources}</h2><ul>{checklistSources.map((href,index) => <li key={href}><a href={`${href}?hl=${lang === 'pt' ? 'pt-BR' : lang}`}>{copy.sourceLabels[index]} ↗</a></li>)}</ul><h2>{copy.cite}</h2><p>{copy.permission}</p><p className="checklist-citation">Ravyt Digital. {copy.title}. 2026. <a href={url}>{url}</a></p></div></section>
    <section className="rv-final"><div className="shell"><h2>{copy.cta}</h2><p>{copy.ctaBody}</p><Link className="rv-button" href={`${prefix}/diagnostico`}>{copy.ctaLink}</Link></div></section>
  </main>;
}
