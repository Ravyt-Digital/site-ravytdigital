import HomeNavigation from './HomeNavigation';
import SiteFooter from './SiteFooter';
import StructuredData from './StructuredData';
import {homeContent} from '@/lib/home-content';
import QuoteLink from './QuoteLink';
import {websitePath} from '@/lib/services';
import {breadcrumb, webpage} from '@/lib/seo';
import {portfolioPlanningArticle} from '@/lib/site-articles';
import {siteSegments, type SiteSegmentId} from '@/lib/site-segments';
import {SITE_URL} from '@/lib/site';

export default function SiteSegmentPage({id}: {id: SiteSegmentId}) {
  const segment = siteSegments[id];
  const project = homeContent.projects.find(item => item.id === segment.projectId)!;
  const image = project.image.replace('.webp', '-800.webp');
  const smallImage = project.image.replace('.webp', '-480.webp');
  const heading = segment.name + ' ' + segment.emphasis;
  const url = SITE_URL + segment.path;

  return <>
    <HomeNavigation />
    <main className="rv-home" id="conteudo">
      <div className="rd-segment-top">
        <div className="shell">
          <nav aria-label="Caminho da página"><ol className="rv-breadcrumb">
            <li><a href="/">Início</a></li><li aria-current="page">{segment.label}</li>
          </ol></nav>
          <section className="rd-segment-hero" aria-labelledby="segment-title">
            <div className="rv-hero-copy">
              <h1 id="segment-title">{segment.name}{' '}<em>{segment.emphasis}</em></h1>
              <p className="rv-hero-description">{segment.intro}</p>
              <div className="rv-actions">
                <QuoteLink type="site" segment={id} />
              </div>
            </div>
            <figure className="rd-segment-preview">
              <img src={image} srcSet={smallImage + ' 480w, ' + image + ' 800w'}
                sizes="(max-width:800px) 92vw, 44vw" width={800} height={383}
                alt={'Captura da página inicial do conceito ' + project.name} />
              <figcaption>
                <span className="rv-demo-label">Projeto conceitual</span>
                <strong>{project.name}</strong>
                <p>{segment.projectCaption}</p>
              </figcaption>
            </figure>
          </section>
        </div>
      </div>

      <section className="rv-section shell rv-seo-section" aria-labelledby="segment-needs">
        <h2 id="segment-needs">{segment.cardsTitle}</h2>
        <div className="rv-seo-grid">{segment.cards.map(([title, detail]) =>
          <article key={title}><h3>{title}</h3><p>{detail}</p></article>
        )}</div>
      </section>

      <section className="rv-section shell rd-split rd-segment-scope" id="escopo" aria-labelledby="segment-scope">
        <div>
          <h2 id="segment-scope">Como definimos as páginas do seu site</h2>
          <p>Organizamos as informações sobre a empresa, os serviços e os projetos que você pode publicar. O orçamento descreve o que será criado e como o visitante pode entrar em contato.</p>
          <a href={websitePath} className="rv-text-link">Conhecer o serviço de criação de sites <span className="rd-arrow rd-arrow-up" aria-hidden="true" /></a>
        </div>
        <div className="rd-service-panel">
          <h3>O que detalhamos no orçamento</h3>
          <ul>
            <li><strong>Estrutura</strong><span>Páginas, categorias do portfólio e ações de contato.</span></li>
            <li><strong>Materiais</strong><span>Responsáveis pelos textos, pelas imagens e pelas revisões.</span></li>
            <li><strong>Entrega</strong><span>Prazo, investimento, domínio, hospedagem e acessos.</span></li>
          </ul>
        </div>
      </section>

      <section className="rv-section shell rd-segment-checklist" aria-labelledby="segment-checklist">
        <h2 id="segment-checklist">{segment.checklistTitle}</h2>
        <ul>{segment.checklist.map(item => <li key={item}>{item}</li>)}</ul>
        <a href={portfolioPlanningArticle} className="rv-text-link">Usar o guia para montar o portfólio <span className="rd-arrow rd-arrow-up" aria-hidden="true" /></a>
      </section>

      <section className="rv-faq-section" aria-labelledby="segment-faq">
        <div className="shell rv-faq-grid">
          <h2 id="segment-faq">Dúvidas <em>antes de contratar</em></h2>
          <div className="rv-faq-list">{segment.faq.map(([question, answer]) => <details key={question}>
            <summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p>
          </details>)}</div>
        </div>
      </section>

      <section className="rv-final shell">
        <h2>Vamos definir o que seu site <em>precisa mostrar?</em></h2>
        <p>{segment.briefing}</p>
        <div className="rd-actions">
          <QuoteLink type="site" segment={id} />
        </div>
      </section>
    </main>
    <SiteFooter />
    <StructuredData data={{'@context':'https://schema.org','@graph':[
      {...webpage(segment.path, heading, segment.description),mainEntity:{'@id':url+'#service'}},
      breadcrumb(segment.path, segment.label),
      {'@type':'Service','@id':url+'#service',name:heading,url,description:segment.description,
        provider:{'@id':SITE_URL+'/#organization'},areaServed:{'@type':'Country',name:'Brasil'}},
    ]}} />
  </>;
}
