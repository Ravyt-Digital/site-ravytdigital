import HomeNavigation from '@/components/HomeNavigation';
import HeroPlan from '@/components/HeroPlan';
import HomeReveal from '@/components/HomeReveal';
import SiteFooter from '@/components/SiteFooter';
import PortfolioGallery from '@/components/PortfolioGallery';
import SiteEstimate from '@/components/SiteEstimate';
import StructuredData from '@/components/StructuredData';
import QuoteLink from '@/components/QuoteLink';
import ArticleCard from '@/components/ArticleCard';
import {webpage} from '@/lib/seo';
import {agencyTitle, agencyDescription, websitePath} from '@/lib/services';
import {articles, blogPath} from '@/lib/site-articles';
import {siteSegments} from '@/lib/site-segments';
import {SITE_URL} from '@/lib/site';

const faqs = [
  ['Dá para começar com poucos projetos no portfólio?', 'Sim. Selecione trabalhos que representem os serviços que você quer vender. Estudos e renderizações podem entrar com o estágio identificado e com autorização de uso.'],
  ['Como mostrar uma obra com informações confidenciais?', 'Use apenas imagens e dados autorizados. Quando possível, descreva a tipologia, o escopo e a etapa da obra sem revelar a identidade do cliente, a localização exata ou documentos protegidos.'],
  ['Como a Ravyt calcula o orçamento?', 'O simulador soma os itens com preço definido e mostra o que ainda depende de análise.'],
  ['Como ficam domínio, hospedagem e acessos?', 'A proposta define onde o projeto será publicado, quem controla os acessos e quais custos são pagos aos fornecedores.'],
  ['Vocês atendem fora da minha cidade?', 'Sim. Atendemos arquitetos, engenheiros e suas equipes em todo o Brasil. O briefing, as revisões e a entrega podem ser feitos online.'],
];

export default function Home() {
  return <>
    <HomeNavigation />
    <StructuredData data={{'@context':'https://schema.org','@graph':[
      webpage('/', agencyTitle, agencyDescription),
      {'@type':'Service','@id':SITE_URL+websitePath+'#service',name:'Criação de sites para arquitetura e engenharia',
        url:SITE_URL+websitePath,audience:{'@type':'Audience',audienceType:'Arquitetos e engenheiros'},
        provider:{'@id':SITE_URL+'/#organization'},areaServed:{'@type':'Country',name:'Brasil'}},
    ]}} />
    <main id="conteudo" className="rv-home">
      <section className="rd-hero" id="inicio" aria-labelledby="hero-title">
        <HeroPlan />
        <div className="rv-hero shell">
          <div className="rv-hero-copy">
            <h1 id="hero-title">Criação de sites para <em>arquitetos e engenheiros.</em></h1>
            <p className="rv-hero-description">Apresente seus projetos, obras e especialidades em um site que ajude quem chega por indicação a conhecer seu trabalho e pedir uma proposta.</p>
            <div className="rv-actions"><QuoteLink className="rv-text-link" /></div>
          </div>
          <SiteEstimate />
        </div>
      </section>

      <section className="rv-section shell rv-seo-section" id="servicos" aria-labelledby="services-title">
        <h2 id="services-title" data-home-reveal>Sites para apresentar <em>seu trabalho</em></h2>
        <div className="rv-seo-grid rd-segment-links rd-service-links">
          <article data-home-reveal><h3><a href={websitePath}>Criação de sites</a></h3><p>Sites institucionais e portfólios para apresentar especialidades, explicar o escopo dos projetos e receber pedidos de proposta.</p></article>
          <article data-home-reveal><h3>Blogs e portais em WordPress</h3><p>Publique artigos técnicos, notícias do escritório e atualizações de obras em um site com painel editorial.</p></article>
        </div>
      </section>

      <section className="rv-section shell rv-seo-section rd-niche-section" aria-labelledby="niche-title">
        <h2 id="niche-title" data-home-reveal>O que seus clientes precisam ver</h2>
        <div className="rv-seo-grid rd-segment-links">
          {Object.values(siteSegments).map(segment => <article key={segment.sectionId} id={segment.sectionId} data-home-reveal>
            <h3>{segment.label}</h3><p>{segment.summary}</p>
          </article>)}
        </div>
      </section>

      <section className="rv-section rv-portfolio-section" id="projetos" aria-labelledby="projects-title">
        <div className="shell"><div className="rv-section-heading" data-home-reveal><h2 id="projects-title">Exemplos para o seu setor</h2><p>Dois projetos conceituais desenvolvidos pela Ravyt para demonstrar como organizar portfólios, obras e serviços técnicos.</p></div>
          <PortfolioGallery />
        </div>
      </section>

      <section className="rv-section shell rv-seo-section" id="como-funciona" aria-labelledby="process-title">
        <h2 id="process-title" data-home-reveal>Da primeira conversa <em>à entrega</em></h2>
        <ol className="rv-process">
          <li data-home-reveal><h3>Briefing e orçamento</h3><p>Definimos quais serviços, projetos e obras o site vai apresentar e como os visitantes poderão entrar em contato. A proposta detalha escopo, prazo e investimento.</p></li>
          <li data-home-reveal><h3>Desenvolvimento e revisão</h3><p>Criamos as páginas e revisamos com você a navegação, a apresentação do portfólio e o caminho até o contato.</p></li>
          <li data-home-reveal><h3>Publicação e acessos</h3><p>Testamos o que foi contratado e organizamos a publicação, os acessos e as orientações previstos na proposta.</p></li>
        </ol>
      </section>

      <section className="rv-section shell rv-seo-section" id="guias" aria-labelledby="home-blog-title">
        <div className="rv-section-heading" data-home-reveal><div><h2 id="home-blog-title">Blog da Ravyt</h2><p>Guias para arquitetos e engenheiros planejarem seu site e portfólio online.</p></div><a className="rv-text-link" href={blogPath}>Ver todos os artigos <span className="rd-arrow rd-arrow-up" aria-hidden="true" /></a></div>
        <div className="rv-seo-grid">{articles.slice(0, 3).map(article => <ArticleCard key={article.path} article={article} />)}</div>
      </section>

      <section className="rv-faq-section" id="perguntas" aria-labelledby="faq-title">
        <div className="shell rv-faq-grid">
          <h2 id="faq-title" data-home-reveal>Dúvidas <em>antes de começar</em></h2>
          <div className="rv-faq-list">{faqs.map(([question,answer]) => <details key={question} data-home-reveal><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="rv-final shell" id="contato" data-home-reveal>
        <h2>Vamos planejar o site <em>do seu escritório?</em></h2>
        <p>Escolha as páginas, os recursos de contato e a forma de publicação para simular o orçamento.</p>
        <div className="rd-actions"><QuoteLink /></div>
      </section>
      <HomeReveal />
    </main>
    <SiteFooter />
  </>;
}
