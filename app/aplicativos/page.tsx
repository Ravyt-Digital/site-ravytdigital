import HomeNavigation from '@/components/HomeNavigation';
import SiteFooter from '@/components/SiteFooter';
import StructuredData from '@/components/StructuredData';
import QuoteLink from '@/components/QuoteLink';
import {breadcrumb, pageMetadata, webpage} from '@/lib/seo';
import {siteOrAppArticle, technologyArticle} from '@/lib/site-articles';
import {appPath as path} from '@/lib/services';
import {SITE_URL} from '@/lib/site';

const title = 'Criação de Aplicativos Sob Medida | Ravyt Digital';
const description = 'Desenvolvimento de aplicativos web e para celular sob medida para empresas. Conte o que precisa funcionar e solicite um orçamento.';
export const metadata = pageMetadata(path, title, description);

export default function ApplicationsPage() {
  return <>
    <HomeNavigation />
    <main id="conteudo" className="rv-home">
      <div className="shell"><nav aria-label="Caminho da página"><ol className="rv-breadcrumb">
        <li><a href="/">Início</a></li><li aria-current="page">Criação de aplicativos</li>
      </ol></nav></div>
      <section className="rv-section shell rd-split rd-service-hero">
        <div><h1>Criação de aplicativos <em>sob medida</em></h1>
          <p>Seus clientes ou sua equipe precisam agendar, enviar informações ou acompanhar uma solicitação? Criamos aplicativos web, acessados pelo navegador, e aplicativos para celular. O formato depende de onde e como as pessoas vão usar.</p>
          <div className="rv-actions"><QuoteLink /></div>
        </div>
        <aside className="rd-service-panel" aria-labelledby="app-briefing">
          <h2 id="app-briefing">O que ajuda a orçar seu aplicativo</h2>
          <ul>
            <li><strong>Quem vai usar</strong><span>Clientes, equipe interna ou parceiros.</span></li>
            <li><strong>O que precisa funcionar primeiro</strong><span>Descreva uma tarefa do começo ao fim.</span></li>
            <li><strong>O que já existe</strong><span>Liste os sistemas, as planilhas ou os canais usados hoje.</span></li>
          </ul>
        </aside>
      </section>
      <section className="rv-section shell rv-seo-section" aria-labelledby="app-formats">
        <h2 id="app-formats">Qual formato atende à sua rotina?</h2>
        <div className="rv-seo-grid rd-segment-links">
          <article><h3>Aplicativo web</h3><p>A pessoa acessa pelo navegador. Pode fazer sentido para portais de clientes, painéis internos ou tarefas feitas no celular e no computador.</p></article>
          <article><h3>Aplicativo para celular</h3><p>Faz sentido avaliar quando a rotina envolve uso frequente ou recursos do aparelho, como câmera. Dispositivos, distribuição e publicação são definidos no orçamento.</p></article>
        </div>
      </section>
      <section className="rv-section shell rv-seo-section"><h2>Do problema às primeiras telas</h2>
        <div className="rv-seo-grid">
          <article><h3>Entender o fluxo de uso</h3><p>Identificamos o que cada pessoa precisa fazer, quais dados entram no processo e como o usuário acompanha o resultado.</p></article>
          <article><h3>Definir a primeira versão</h3><p>O orçamento detalha as tarefas prioritárias, os acessos e as integrações incluídas. Assim você consegue avaliar a proposta pelo que será entregue.</p></article>
          <article><h3>Testar e preparar a entrega</h3><p>Conferimos os caminhos principais e combinamos os ambientes, os acessos e as responsabilidades de publicação e manutenção no escopo do projeto.</p></article>
        </div>
      </section>
      <section className="rv-section shell rv-seo-section" aria-labelledby="app-guides">
        <h2 id="app-guides">Guias para planejar o projeto</h2>
        <div className="rv-seo-grid rd-segment-links">
          <article><h3><a href={siteOrAppArticle}>Site ou aplicativo?</a></h3><p>Compare as opções pela frequência de uso e pela tarefa a resolver.</p></article>
          <article><h3><a href={technologyArticle}>Como escolher a tecnologia?</a></h3><p>Compare integrações, publicação e manutenção antes de decidir.</p></article>
        </div>
      </section>
      <section className="rv-final shell"><h2>Que tarefa o aplicativo <em>precisa facilitar?</em></h2>
        <p>Conte como ela funciona hoje. Esse exemplo ajuda a definir as primeiras funcionalidades.</p>
        <div className="rd-actions"><QuoteLink /></div>
      </section>
    </main>
    <SiteFooter />
    <StructuredData data={{'@context':'https://schema.org','@graph':[
      webpage(path, title, description), breadcrumb(path, 'Criação de aplicativos'),
      {'@type':'Service','@id':SITE_URL+path+'#service',name:'Criação de aplicativos sob medida',description,
        url:SITE_URL+path,provider:{'@id':SITE_URL+'/#organization'},areaServed:{'@type':'Country',name:'Brasil'}},
    ]}} />
  </>;
}
