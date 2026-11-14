import HomeNavigation from '@/components/HomeNavigation';
import SiteFooter from '@/components/SiteFooter';
import StructuredData from '@/components/StructuredData';
import QuoteLink from '@/components/QuoteLink';
import {breadcrumb, pageMetadata, webpage} from '@/lib/seo';
import {siteOrAppArticle, technologyArticle} from '@/lib/site-articles';
import {appPath as path} from '@/lib/services';
import {SITE_URL} from '@/lib/site';

const title = 'Aplicativos para Arquitetura e Engenharia | Ravyt Digital';
const description = 'Aplicativos web e para celular para arquitetos e engenheiros. Organize aprovações, vistorias, registros de campo e acompanhamento de etapas.';
export const metadata = pageMetadata(path, title, description);

export default function ApplicationsPage() {
  return <>
    <HomeNavigation />
    <main id="conteudo" className="rv-home">
      <div className="shell"><nav aria-label="Caminho da página"><ol className="rv-breadcrumb">
        <li><a href="/">Início</a></li><li aria-current="page">Criação de aplicativos</li>
      </ol></nav></div>
      <section className="rv-section shell rd-split rd-service-hero">
        <div><h1>Aplicativos para <em>arquitetura e engenharia</em></h1>
          <p>Desenvolvemos aplicativos web e para celular para o escritório e o canteiro de obras. O projeto pode começar por uma tarefa concreta, como aprovar desenhos, organizar fotos de vistorias ou acompanhar o avanço de uma obra.</p>
          <div className="rv-actions"><QuoteLink appProject /></div>
        </div>
        <aside className="rd-service-panel" aria-labelledby="app-briefing">
          <h2 id="app-briefing">O que ajuda a orçar seu aplicativo</h2>
          <ul>
            <li><strong>Quem vai usar</strong><span>Clientes do escritório, arquitetos, engenheiros, equipe de campo ou parceiros.</span></li>
            <li><strong>O que precisa funcionar primeiro</strong><span>Descreva uma tarefa, como registrar uma vistoria e compartilhar o relatório.</span></li>
            <li><strong>O que já existe</strong><span>Liste as planilhas, ferramentas de gestão ou canais que a equipe usa hoje.</span></li>
          </ul>
        </aside>
      </section>
      <section className="rv-section shell rv-seo-section" aria-labelledby="app-formats">
        <h2 id="app-formats">Qual formato atende à sua rotina?</h2>
        <div className="rv-seo-grid rd-segment-links">
          <article><h3>Aplicativo web</h3><p>Acesse pelo navegador. Pode servir para o cliente acompanhar etapas, aprovar entregas e consultar arquivos do projeto.</p></article>
          <article><h3>Aplicativo para celular</h3><p>Pode servir para registrar vistorias, fotos e checklists em campo. Se a equipe precisar trabalhar sem conexão, esse requisito entra no escopo e nos testes.</p></article>
        </div>
      </section>
      <section className="rv-section shell rv-seo-section"><h2>Do problema às primeiras telas</h2>
        <div className="rv-seo-grid">
          <article><h3>Entender o fluxo de uso</h3><p>Mapeamos o que cada pessoa precisa fazer, quem pode ver plantas ou registros e como a equipe acompanha a conclusão da tarefa.</p></article>
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
        <div className="rd-actions"><QuoteLink appProject /></div>
      </section>
    </main>
    <SiteFooter />
    <StructuredData data={{'@context':'https://schema.org','@graph':[
      webpage(path, title, description), breadcrumb(path, 'Criação de aplicativos'),
      {'@type':'Service','@id':SITE_URL+path+'#service',name:'Aplicativos para arquitetura e engenharia',description, audience:{'@type':'Audience',audienceType:'Arquitetos e engenheiros'},
        url:SITE_URL+path,provider:{'@id':SITE_URL+'/#organization'},areaServed:{'@type':'Country',name:'Brasil'}},
    ]}} />
  </>;
}
