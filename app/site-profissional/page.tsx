import type {Metadata} from 'next';
import HomeNavigation from '@/components/HomeNavigation';
import SiteFooter from '@/components/SiteFooter';
import {commercialWhatsApp} from '@/lib/home-content';
import {professional} from '@/lib/plans';
import {SITE_URL} from '@/lib/site';

const title = 'Site Profissional por R$ 2.900 | Ravyt Digital';
const description = 'Site personalizado com até 5 páginas, redação, SEO inicial e configuração de domínio próprio. Confira o escopo e solicite uma proposta.';
const url = SITE_URL + '/site-profissional';
export const metadata: Metadata = {title, description, alternates:{canonical:url}, openGraph:{title, description, url, type:'website', images:['/brand/ravyt-social-card.webp']}, twitter:{title,description,card:'summary_large_image',images:['/brand/ravyt-social-card.webp']}};

export default function ProfessionalPage() {
  return <>
    <HomeNavigation />
    <main id="conteudo" className="rv-home">
      <section className="rv-hero shell rd-hero rd-product">
        <div className="rv-hero-copy"><h1>Site <em>Profissional</em></h1>
          <p className="rv-hero-description">Dê ao seu cliente um endereço para entender seus serviços, conferir seus projetos e pedir orçamento.</p>
          <div className="rv-actions"><a href="/proposta?plano=profissional" className="rv-button">Solicitar proposta <span aria-hidden="true">↗</span></a>
            <a href="/#projetos" className="rv-text-link">Ver projetos <span aria-hidden="true">↗</span></a></div>
        </div>
        <aside className="rd-plan rd-plan-main"><h2>R$ 2.900 <small>por projeto</small></h2>
          <p>R$ 1.450 na contratação e R$ 1.450 após aprovação, antes da publicação definitiva ou transferência.</p>
          <ul>{professional.details.map(item => <li key={item}>{item}</li>)}</ul>
          <p>{professional.timeline}</p>
        </aside>
      </section>
      <section className="rv-section shell"><h2>O que você recebe</h2>
        <div className="rv-seo-grid">
          <article><h3>Uma estrutura pensada para seu negócio</h3><p>Organizamos até cinco páginas para apresentar sua empresa, serviços, portfólio e canais de contato, conforme o briefing.</p></article>
          <article><h3>Textos e design feitos para o projeto</h3><p>Redigimos as páginas com base nas informações que você valida e adaptamos o layout para celular e computador.</p></article>
          <article><h3>Configuração técnica e publicação</h3><p>Preparamos títulos e descrições para as buscas, configuramos o domínio e testamos a navegação e os links de contato.</p></article>
        </div>
      </section>
      <section className="rv-section shell"><h2>Condições de contratação</h2>
        <div className="rv-seo-grid">
          <article><h3>Domínio e hospedagem</h3><p>Você registra e renova o domínio em seu nome. Indicamos a infraestrutura compatível com o projeto, e os custos aplicáveis dos fornecedores são pagos diretamente a eles.</p></article>
          <article><h3>Prazos e revisões</h3><p>O prazo começa após a entrada e o recebimento dos materiais. A proposta define o cronograma e inclui duas rodadas de ajustes no escopo.</p></article>
          <article><h3>Depois da entrega</h3><p>A proposta define os arquivos, acessos e licenças do projeto. Corrigimos defeitos da implementação por 30 dias. A manutenção é opcional.</p></article>
        </div>
      </section>
      <section className="rv-final shell"><h2>Vamos definir as páginas <em>do seu site?</em></h2>
        <p>Conte o que você precisa apresentar. A Ravyt confirma o escopo e o prazo na proposta.</p>
        <div className="rd-actions"><a href="/proposta?plano=profissional" className="rv-button">Pedir proposta do Site Profissional</a>
          <a className="rv-text-link" href={commercialWhatsApp('Olá! Quero conversar sobre o Site Profissional de R$ 2.900.')} data-contact-cta>Conversar no WhatsApp ↗</a></div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
