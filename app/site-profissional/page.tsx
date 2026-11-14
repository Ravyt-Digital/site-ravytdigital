import HomeNavigation from '@/components/HomeNavigation';
import SiteFooter from '@/components/SiteFooter';
import StructuredData from '@/components/StructuredData';
import QuoteLink from '@/components/QuoteLink';
import SiteSegmentLinks from '@/components/SiteSegmentLinks';
import {breadcrumb, pageMetadata, webpage} from '@/lib/seo';
import {hostingArticle, institutionalPagesArticle, websitePricingArticle} from '@/lib/site-articles';
import {websitePath as path} from '@/lib/services';
import {SITE_URL} from '@/lib/site';

const title = 'Criação de Sites Profissionais Sob Medida | Ravyt Digital';
const description = 'Criação e reformulação de sites institucionais, portfólios e páginas de divulgação. Solicite um orçamento com escopo e prazo para seu projeto.';
export const metadata = pageMetadata(path, title, description);

export default function ProfessionalPage() {
  return <>
    <HomeNavigation />
    <main id="conteudo" className="rv-home">
      <div className="shell"><nav aria-label="Caminho da página"><ol className="rv-breadcrumb">
        <li><a href="/">Início</a></li><li aria-current="page">Criação de sites</li>
      </ol></nav></div>
      <section className="rv-section shell rd-split rd-service-hero">
        <div><h1>Criação de sites <em>profissionais</em></h1>
          <p>Seu cliente precisa entender o que você faz, ver exemplos do seu trabalho e encontrar o caminho para falar com você. Criamos ou reformulamos o site a partir dessas tarefas.</p>
          <div className="rv-actions"><QuoteLink /></div>
        </div>
        <aside className="rd-service-panel" aria-labelledby="site-examples">
          <h2 id="site-examples">Que tipo de site você precisa?</h2>
          <ul>
            <li><strong>Institucional</strong><span>Para apresentar a empresa, os serviços e as formas de atendimento.</span></li>
            <li><strong>Portfólio</strong><span>Para organizar projetos e explicar as decisões de cada trabalho.</span></li>
            <li><strong>Página de divulgação</strong><span>Para explicar uma oferta e conduzir a pessoa a uma ação, como pedir orçamento.</span></li>
          </ul>
        </aside>
      </section>
      <section className="rv-section shell rv-seo-section"><h2>Como definimos o escopo</h2>
        <div className="rv-seo-grid">
          <article><h3>Páginas e conteúdo</h3><p>Identificamos o que o visitante precisa saber. O orçamento é feito por projeto. Ele detalha quais páginas serão criadas, quem prepara os materiais e quais revisões estão previstas.</p></article>
          <article><h3>Navegação e funcionalidades</h3><p>O design considera o uso no celular e no computador. Blog, formulários, áreas restritas e integrações entram no escopo quando o projeto pede.</p></article>
          <article><h3>Publicação e busca</h3><p>Definimos domínio, hospedagem e acessos. Na publicação, conferimos navegação, links e a configuração das páginas que devem aparecer nas buscas.</p></article>
        </div>
      </section>
      <SiteSegmentLinks />
      <section className="rv-section shell rv-seo-section" aria-labelledby="site-planning">
        <h2 id="site-planning">Antes de pedir um orçamento</h2>
        <div className="rv-seo-grid">
          <article><h3><a href={websitePricingArticle}>O que muda o custo de um site?</a></h3><p>Compare páginas, funcionalidades e custos recorrentes.</p></article>
          <article><h3><a href={institutionalPagesArticle}>Quais páginas um site institucional precisa?</a></h3><p>Organize o que seu cliente precisa saber para escolher.</p></article>
          <article><h3><a href={hostingArticle}>Como funcionam domínio e hospedagem?</a></h3><p>Saiba quem precisa ter acesso e o que será renovado.</p></article>
        </div>
      </section>
      <section className="rv-final shell"><h2>Vamos definir <em>o seu site?</em></h2>
        <p>Conte o que sua empresa oferece, o que o visitante precisa fazer e se você já tem um site.</p>
        <div className="rd-actions"><QuoteLink /></div>
      </section>
    </main>
    <SiteFooter />
    <StructuredData data={{'@context':'https://schema.org','@graph':[
      webpage(path, title, description), breadcrumb(path, 'Criação de sites'),
      {'@id':SITE_URL+path+'#service','@type':'Service',name:'Criação de sites profissionais',description,
        url:SITE_URL+path,provider:{'@id':SITE_URL+'/#organization'},areaServed:{'@type':'Country',name:'Brasil'}},
    ]}} />
  </>;
}
