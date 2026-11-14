import type {ReactNode} from 'react';
import HomeNavigation from './HomeNavigation';
import SiteFooter from './SiteFooter';
import StructuredData from './StructuredData';
import QuoteLink from './QuoteLink';
import {breadcrumb, webpage} from '@/lib/seo';
import {blogPath} from '@/lib/site-articles';
import {SITE_URL} from '@/lib/site';

export default function SiteGuide({path, title, description, published, revised, children}: {
  path: string; title: string; description: string; published?: string; revised?: string; children: ReactNode;
}) {
  const url = SITE_URL + path;
  const date = revised ?? published;
  const dateLabel = date && new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'long', timeZone: 'UTC',
  }).format(new Date(date));
  return <><HomeNavigation />
    <main className="rv-guide shell" id="conteudo">
      <nav aria-label="Caminho da página"><ol className="rv-breadcrumb">
        <li><a href="/">Início</a></li><li><a href={blogPath}>Blog</a></li><li aria-current="page">{title}</li>
      </ol></nav>
      <article>
        <header><h1>{title}</h1><p className="rv-guide-lead">{description}</p><p className="rv-guide-byline">Por Ravyt Digital{date && <> · {revised ? 'Revisado em ' : ''}<time dateTime={date}>{dateLabel}</time></>}</p></header>
        {children}
        <section className="rv-guide-cta">
          <h2>Quer tirar seu projeto do papel?</h2>
          <p>Conte o que você precisa criar. A Ravyt avalia o escopo do site ou aplicativo e responde pelo contato informado.</p>
          <div className="rd-actions"><QuoteLink /></div>
        </section>
      </article>
    </main>
    <SiteFooter />
    <StructuredData data={{'@context':'https://schema.org','@graph':[
      webpage(path, title, description), breadcrumb(path, title, {path:blogPath,name:'Blog'}),
      {'@type':'Article','@id':url+'#article',headline:title,description,inLanguage:'pt-BR',datePublished:published,dateModified:revised,
        mainEntityOfPage:{'@id':url+'#webpage'},author:{'@id':SITE_URL+'/#organization'},publisher:{'@id':SITE_URL+'/#organization'}},
    ]}} />
  </>;
}
