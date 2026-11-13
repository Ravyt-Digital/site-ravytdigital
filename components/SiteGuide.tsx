import type {ReactNode} from 'react';
import HomeNavigation from './HomeNavigation';
import SiteFooter from './SiteFooter';
import StructuredData from './StructuredData';
import {breadcrumb, webpage} from '@/lib/seo';
import {SITE_URL} from '@/lib/site';

export default function SiteGuide({path, title, description, children}: {
  path: string; title: string; description: string; children: ReactNode;
}) {
  const url = SITE_URL + path;
  return <><HomeNavigation />
    <main className="rv-guide shell" id="conteudo">
      <nav aria-label="Caminho da página"><ol className="rv-breadcrumb">
        <li><a href="/">Início</a></li><li aria-current="page">{title}</li>
      </ol></nav>
      <article>
        <header><h1>{title}</h1><p className="rv-guide-lead">{description}</p><p className="rv-guide-byline">Por Ravyt Digital</p></header>
        {children}
        <section className="rv-guide-cta">
          <h2>Quer definir o escopo do seu site?</h2>
          <p>Conte quais serviços oferece, que materiais já tem e qual ação espera do visitante. A Ravyt usa essas informações para preparar a proposta.</p>
          <div className="rd-actions">
            <a className="rv-button" href="/proposta">Solicitar proposta</a>
            <a className="rv-text-link" href="/site-profissional">Ver o Site Profissional</a>
          </div>
        </section>
      </article>
    </main>
    <SiteFooter />
    <StructuredData data={{'@context':'https://schema.org','@graph':[
      webpage(path, title, description), breadcrumb(path, title),
      {'@type':'Article','@id':url+'#article',headline:title,description,inLanguage:'pt-BR',
        mainEntityOfPage:{'@id':url+'#webpage'},author:{'@id':SITE_URL+'/#organization'},publisher:{'@id':SITE_URL+'/#organization'}},
    ]}} />
  </>;
}
