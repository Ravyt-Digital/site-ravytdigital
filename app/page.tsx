import HomeNavigation from '@/components/HomeNavigation';
import SiteFooter from '@/components/SiteFooter';
import PortfolioGallery from '@/components/PortfolioGallery';
import SiteEstimate from '@/components/SiteEstimate';
import StructuredData from '@/components/StructuredData';
import QuoteLink from '@/components/QuoteLink';
import ArticleCard from '@/components/ArticleCard';
import {webpage} from '@/lib/seo';
import {agencyTitle, agencyDescription, appPath, websitePath} from '@/lib/services';
import {articles, blogPath} from '@/lib/site-articles';
import {siteSegments} from '@/lib/site-segments';
import {SITE_URL} from '@/lib/site';

const faqs = [
  ['Dá para começar com poucos projetos no portfólio?', 'Sim. Selecione trabalhos que representem os serviços que você quer vender. Estudos e renderizações podem entrar com o estágio identificado e com autorização de uso.'],
  ['Como mostrar uma obra com informações confidenciais?', 'Use apenas imagens e dados autorizados. Quando possível, descreva a tipologia, o escopo e a etapa da obra sem revelar a identidade do cliente, a localização exata ou documentos protegidos.'],
  ['Como a Ravyt calcula o orçamento?', 'O simulador soma os itens com preço definido e mostra o que ainda depende de análise. Para aplicativos, escolha Aplicativo e descreva a rotina que sua equipe ou seus clientes precisam realizar.'],
  ['Como ficam domínio, hospedagem e acessos?', 'A proposta define onde o projeto será publicado, quem controla os acessos e quais custos são pagos aos fornecedores.'],
  ['Vocês atendem fora da minha cidade?', 'Sim. Atendemos arquitetos, engenheiros e suas equipes em todo o Brasil. O briefing, as revisões e a entrega podem ser feitos online.'],
];

export default async function Home({searchParams}: {searchParams: Promise<{projeto?: string}>}) {
  const {projeto} = await searchParams;
  return <>
    <HomeNavigation />
    <StructuredData data={{'@context':'https://schema.org','@graph':[
      webpage('/', agencyTitle, agencyDescription),
      ...[[websitePath, 'Sites e portfólios para arquitetura e engenharia'], [appPath, 'Aplicativos para arquitetura e engenharia']].map(([path, name]) =>
        ({'@type':'Service','@id':SITE_URL+path+'#service',name,url:SITE_URL+path, audience:{'@type':'Audience',audienceType:'Arquitetos e engenheiros'},
          provider:{'@id':SITE_URL+'/#organization'},areaServed:{'@type':'Country',name:'Brasil'}})),
    ]}} />
    <main id="conteudo" className="rv-home">
      <section className="rd-hero" id="inicio" aria-labelledby="hero-title">
        <div className="rv-hero shell">
          <div className="rv-hero-copy">
            <h1 id="hero-title">Sites e aplicativos para <em>arquitetos e engenheiros.</em></h1>
            <p className="rv-hero-description">Mostre projetos e obras com o contexto que seus clientes precisam para pedir uma proposta. Crie portais e aplicativos para acompanhar etapas, organizar vistorias e compartilhar informações com sua equipe.</p>
            <div className="rv-actions"><QuoteLink className="rv-text-link" /></div>
          </div>
          <SiteEstimate initialApp={projeto === 'aplicativo'} />
        </div>
      </section>

      <section className="rv-section shell rv-seo-section" id="servicos" aria-labelledby="services-title">
        <h2 id="services-title">Do portfólio à <em>rotina de obra</em></h2>
        <div className="rv-seo-grid rd-segment-links rd-service-links">
          <article><h3><a href={websitePath}>Criação de sites</a></h3><p>Sites institucionais e portfólios para apresentar especialidades, explicar o escopo dos projetos e receber pedidos de proposta.</p></article>
          <article><h3><a href={appPath}>Criação de aplicativos</a></h3><p>Portais de clientes e aplicativos web ou para celular para aprovações, vistorias e acompanhamento de projetos e obras.</p></article>
        </div>
      </section>

      <section className="rv-section shell rv-seo-section rd-niche-section" aria-labelledby="niche-title">
        <h2 id="niche-title">O que seus clientes precisam ver</h2>
        <div className="rv-seo-grid rd-segment-links">
          {Object.values(siteSegments).map(segment => <article key={segment.sectionId} id={segment.sectionId}>
            <h3>{segment.label}</h3><p>{segment.summary}</p>
          </article>)}
        </div>
      </section>

      <section className="rv-section rv-portfolio-section" id="projetos" aria-labelledby="projects-title">
        <div className="shell"><div className="rv-section-heading"><h2 id="projects-title">Exemplos para o seu setor</h2><p>Dois projetos conceituais desenvolvidos pela Ravyt para demonstrar como organizar portfólios, obras e serviços técnicos.</p></div>
          <PortfolioGallery />
        </div>
      </section>

      <section className="rv-section shell rv-seo-section" id="como-funciona" aria-labelledby="process-title">
        <h2 id="process-title">Da primeira conversa <em>à entrega</em></h2>
        <ol className="rv-process">
          <li><h3>Briefing e orçamento</h3><p>Mapeamos os serviços, os projetos que você pode mostrar e as tarefas que precisam de um aplicativo. A proposta detalha escopo, prazo e investimento.</p></li>
          <li><h3>Desenvolvimento e revisão</h3><p>Criamos as páginas ou telas e revisamos com você a navegação, a apresentação do portfólio e as tarefas previstas no escopo.</p></li>
          <li><h3>Publicação e acessos</h3><p>Testamos o que foi contratado e organizamos a publicação, os acessos e as orientações previstos na proposta.</p></li>
        </ol>
      </section>

      <section className="rv-section shell rv-seo-section" id="guias" aria-labelledby="home-blog-title">
        <div className="rv-section-heading"><div><h2 id="home-blog-title">Blog da Ravyt</h2><p>Guias para arquitetos e engenheiros planejarem seu portfólio, site ou aplicativo.</p></div><a className="rv-text-link" href={blogPath}>Ver todos os artigos <span className="rd-arrow rd-arrow-up" aria-hidden="true" /></a></div>
        <div className="rv-seo-grid">{articles.slice(0, 3).map(article => <ArticleCard key={article.path} article={article} />)}</div>
      </section>

      <section className="rv-faq-section" id="perguntas" aria-labelledby="faq-title">
        <div className="shell rv-faq-grid">
          <h2 id="faq-title">Dúvidas <em>antes de começar</em></h2>
          <div className="rv-faq-list">{faqs.map(([question,answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="rv-final shell" id="contato">
        <h2>Vamos planejar o projeto digital <em>do seu escritório?</em></h2>
        <p>Simule o orçamento do site ou conte qual rotina de projeto ou de obra seu aplicativo precisa atender.</p>
        <div className="rd-actions"><QuoteLink /></div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
