import HomeNavigation from '@/components/HomeNavigation';
import SiteFooter from '@/components/SiteFooter';
import StructuredData from '@/components/StructuredData';
import QuoteLink from '@/components/QuoteLink';
import {breadcrumb, pageMetadata, webpage} from '@/lib/seo';
import {hostingArticle, institutionalPagesArticle, websitePricingArticle} from '@/lib/site-articles';
import {websitePath as path} from '@/lib/services';
import {SITE_URL} from '@/lib/site';

const title = 'Criação de Sites para Arquitetos e Engenheiros | Ravyt Digital';
const description = 'Criação e reformulação de sites e portfólios para arquitetura e engenharia. Apresente projetos, obras e especialidades e facilite pedidos de proposta.';
export const metadata = pageMetadata(path, title, description);

export default function ProfessionalPage() {
  return <>
    <HomeNavigation />
    <main id="conteudo" className="rv-home">
      <div className="shell"><nav aria-label="Caminho da página"><ol className="rv-breadcrumb">
        <li><a href="/">Início</a></li><li aria-current="page">Criação de sites</li>
      </ol></nav></div>
      <section className="rv-section shell rd-split rd-service-hero">
        <div><h1>Criação de sites para <em>arquitetos e engenheiros</em></h1>
          <p>Quem chega por uma indicação precisa entender seus serviços e ver projetos ou obras relevantes. Criamos sites para ajudar essa pessoa a avaliar seu trabalho e enviar um pedido de proposta com contexto.</p>
          <div className="rv-actions"><QuoteLink /></div>
        </div>
        <aside className="rd-service-panel" aria-labelledby="site-examples">
          <h2 id="site-examples">Que tipo de site você precisa?</h2>
          <ul>
            <li><strong>Institucional</strong><span>Para apresentar o escritório, as especialidades, as regiões atendidas e como solicitar uma proposta.</span></li>
            <li><strong>Portfólio</strong><span>Para mostrar projetos, obras e vistorias, com escopo, etapa, imagens e créditos.</span></li>
            <li><strong>Página de divulgação</strong><span>Para explicar um serviço específico, como interiores, projeto estrutural ou gerenciamento de obra.</span></li>
          </ul>
        </aside>
      </section>
      <section className="rv-section shell rv-seo-section"><h2>Como definimos o escopo</h2>
        <div className="rv-seo-grid">
          <article><h3>Páginas e conteúdo</h3><p>Definimos como apresentar serviços, equipe e portfólio. O orçamento indica quais páginas serão criadas, quem prepara fotos e textos e quais revisões estão previstas.</p></article>
          <article><h3>Navegação e funcionalidades</h3><p>Projetamos a navegação para celular e computador. Galerias por tipologia, páginas de obra e formulários por serviço entram no escopo conforme a necessidade.</p></article>
          <article><h3>Publicação e busca</h3><p>Definimos domínio, hospedagem e acessos. Na publicação, conferimos navegação, links e a configuração das páginas que devem aparecer nas buscas.</p></article>
        </div>
      </section>
      <section className="rv-section shell rv-seo-section" aria-labelledby="site-planning">
        <h2 id="site-planning">Antes de pedir um orçamento</h2>
        <div className="rv-seo-grid">
          <article><h3><a href={websitePricingArticle}>O que muda o custo de um site?</a></h3><p>Compare páginas, funcionalidades e custos recorrentes.</p></article>
          <article><h3><a href={institutionalPagesArticle}>Quais páginas um site institucional precisa?</a></h3><p>Organize o que seu cliente precisa saber para escolher.</p></article>
          <article><h3><a href={hostingArticle}>Como funcionam domínio e hospedagem?</a></h3><p>Saiba quem precisa ter acesso e o que será renovado.</p></article>
        </div>
      </section>
      <section className="rv-final shell"><h2>Vamos definir <em>o seu site?</em></h2>
        <p>Conte quais serviços quer divulgar, que projetos ou obras pode mostrar e se já tem um site.</p>
        <div className="rd-actions"><QuoteLink /></div>
      </section>
    </main>
    <SiteFooter />
    <StructuredData data={{'@context':'https://schema.org','@graph':[
      webpage(path, title, description), breadcrumb(path, 'Criação de sites'),
      {'@id':SITE_URL+path+'#service','@type':'Service',name:'Criação de sites para arquitetura e engenharia',description, audience:{'@type':'Audience',audienceType:'Arquitetos e engenheiros'},
        url:SITE_URL+path,provider:{'@id':SITE_URL+'/#organization'},areaServed:{'@type':'Country',name:'Brasil'}},
    ]}} />
  </>;
}
