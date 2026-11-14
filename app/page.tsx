import HomeNavigation from '@/components/HomeNavigation';
import SiteFooter from '@/components/SiteFooter';
import Testimonials from '@/components/Testimonials';
import PortfolioGallery from '@/components/PortfolioGallery';
import HeroWebsitePreview from '@/components/HeroWebsitePreview';
import StructuredData from '@/components/StructuredData';
import QuoteLink from '@/components/QuoteLink';
import ArticleCard from '@/components/ArticleCard';
import {webpage} from '@/lib/seo';
import {agencyTitle, agencyDescription, appPath, websitePath} from '@/lib/services';
import {articles, blogPath} from '@/lib/site-articles';
import {SITE_URL} from '@/lib/site';

const faqs = [
  ['Como a Ravyt calcula o orçamento?', 'A proposta considera o que precisa ser criado, os materiais disponíveis, as funcionalidades e as integrações. Depois da conversa inicial, você recebe o escopo, o prazo e o investimento para avaliar.'],
  ['Preciso ter todas as telas ou páginas definidas?', 'Você pode começar com o objetivo do projeto, quem vai usar e o que essa pessoa precisa fazer. Se já tiver referências, um site atual ou um protótipo, inclua essas informações no pedido.'],
  ['Como ficam domínio, hospedagem e publicação?', 'A proposta define o ambiente indicado, quem controla os acessos e quais custos de fornecedores precisam ser considerados para publicar e manter o projeto.'],
  ['A Ravyt atende empresas de outras cidades?', 'Sim. As conversas e as revisões podem acontecer online. A Ravyt atende projetos em todo o Brasil.'],
];

export default function Home() {
  return <>
    <HomeNavigation />
    <StructuredData data={{'@context':'https://schema.org','@graph':[
      webpage('/', agencyTitle, agencyDescription),
      ...[[websitePath, 'Criação de sites profissionais'], [appPath, 'Criação de aplicativos']].map(([path, name]) =>
        ({'@type':'Service','@id':SITE_URL+path+'#service',name,url:SITE_URL+path,
          provider:{'@id':SITE_URL+'/#organization'},areaServed:{'@type':'Country',name:'Brasil'}})),
    ]}} />
    <main id="conteudo" className="rv-home">
      <section className="rd-hero" id="inicio" aria-labelledby="hero-title">
        <div className="rv-hero shell">
          <div className="rv-hero-copy">
            <h1 id="hero-title">Criamos sites <em>e aplicativos.</em></h1>
            <p className="rv-hero-description">Sites para apresentar seu negócio e facilitar o contato. Aplicativos web e para celular para simplificar a rotina de clientes e equipes. Atendemos empresas em todo o Brasil.</p>
            <div className="rv-actions"><QuoteLink /></div>
          </div>
          <HeroWebsitePreview />
        </div>
      </section>

      <section className="rv-section shell rv-seo-section" id="servicos" aria-labelledby="services-title">
        <h2 id="services-title">O que podemos <em>criar para você</em></h2>
        <div className="rv-seo-grid rd-segment-links rd-service-links">
          <article><h3><a href={websitePath}>Criação de sites</a></h3><p>Sites institucionais, portfólios e páginas para apresentar seus serviços, mostrar projetos e facilitar o contato.</p></article>
          <article><h3><a href={appPath}>Criação de aplicativos</a></h3><p>Aplicativos sob medida para facilitar um atendimento, organizar uma rotina da equipe ou reunir informações em um só lugar.</p></article>
        </div>
      </section>

      <section className="rv-section rv-portfolio-section" id="projetos" aria-labelledby="projects-title">
        <div className="shell"><div className="rv-section-heading"><h2 id="projects-title">Projetos da Ravyt</h2><p>Veja exemplos de sites, do portfólio de serviços às páginas com informações de atendimento.</p></div>
          <PortfolioGallery />
        </div>
      </section>

      <section className="rv-section shell rv-seo-section" id="como-funciona" aria-labelledby="process-title">
        <h2 id="process-title">Da primeira conversa <em>à entrega</em></h2>
        <ol className="rv-process">
          <li><h3>Briefing e orçamento</h3><p>Entendemos quem vai usar o projeto, o que precisa funcionar e quais materiais já estão disponíveis. A proposta detalha escopo, prazo e investimento.</p></li>
          <li><h3>Desenvolvimento e revisão</h3><p>Criamos as páginas ou telas e validamos os fluxos principais com você antes da entrega.</p></li>
          <li><h3>Publicação e acessos</h3><p>Testamos o que foi contratado e organizamos a publicação, os acessos e as orientações previstos na proposta.</p></li>
        </ol>
      </section>

      <section className="rv-section rv-client-section" id="clientes" aria-labelledby="reviews-title">
        <div className="shell rv-section-heading"><h2 id="reviews-title">Quem já trabalhou <em>com a Ytala</em></h2><p>Relatos sobre o atendimento e a experiência de trabalho.</p></div>
        <Testimonials />
      </section>

      <section className="rv-section shell rv-seo-section" id="guias" aria-labelledby="home-blog-title">
        <div className="rv-section-heading"><div><h2 id="home-blog-title">Blog da Ravyt</h2><p>Guias para planejar, publicar e manter um projeto digital.</p></div><a className="rv-text-link" href={blogPath}>Ver todos os artigos <span className="rd-arrow rd-arrow-up" aria-hidden="true" /></a></div>
        <div className="rv-seo-grid">{articles.slice(0, 3).map(article => <ArticleCard key={article.path} article={article} />)}</div>
      </section>

      <section className="rv-faq-section" id="perguntas" aria-labelledby="faq-title">
        <div className="shell rv-faq-grid">
          <h2 id="faq-title">Dúvidas <em>antes de começar</em></h2>
          <div className="rv-faq-list">{faqs.map(([question,answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="rv-final shell" id="contato">
        <h2>O que seu projeto <em>precisa resolver?</em></h2>
        <p>Conte qual é a ideia e quem vai usar. A Ravyt avalia o pedido e retorna pelo contato informado.</p>
        <div className="rd-actions"><QuoteLink /></div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
