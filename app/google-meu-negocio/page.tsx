import HomeNavigation from '@/components/HomeNavigation';
import SiteFooter from '@/components/SiteFooter';
import StructuredData from '@/components/StructuredData';
import {googleContactHref} from '@/lib/home-content';
import {googleBusinessMonthlyPrice, googleBusinessPath, googleBusinessPrice} from '@/lib/google-business';
import {guides} from '@/lib/guides';
import {breadcrumb, pageMetadata, webpage} from '@/lib/seo';
import {SITE_URL} from '@/lib/site';

const title = 'Otimização de Google Meu Negócio | Ravyt Digital';
const description = 'Otimização do Perfil da Empresa no Google por R$ 790. Revisão de categorias, serviços, horários e contatos. Acompanhamento opcional.';
const url = SITE_URL + googleBusinessPath;

export const metadata = pageMetadata(googleBusinessPath, title, description);

export default function GoogleBusinessPage() {
  return <><HomeNavigation />
    <main id="conteudo" className="rv-home">
      <div className="shell"><nav aria-label="Caminho da página"><ol className="rv-breadcrumb">
        <li><a href="/">Início</a></li><li aria-current="page">Google Meu Negócio</li>
      </ol></nav></div>
      <section className="rv-hero shell rd-hero rd-product">
        <div className="rv-hero-copy">
          <h1>Otimização de <em>Google Meu Negócio</em></h1>
          <p className="rv-hero-description">Ajude quem encontra sua empresa na Busca ou no Maps a entender o que você oferece, onde atende e como entrar em contato.</p>
          <div className="rv-actions">
            <a className="rv-button" href="/proposta?plano=google">Solicitar proposta <span className="rd-arrow rd-arrow-up" aria-hidden="true" /></a>
            <a className="rv-text-link" href={googleContactHref} data-contact-cta>Conversar no WhatsApp</a>
          </div>
        </div>
        <aside className="rd-plan rd-plan-main" aria-label="Investimento">
          <h2>{googleBusinessPrice}<small>Otimização inicial</small></h2>
          <ul><li>Análise da situação e da elegibilidade do perfil</li><li>Revisão de categorias, serviços, horários e contatos</li><li>Orientações sobre fotos reais e próximos passos</li></ul>
          <p>Acompanhamento opcional por <strong>{googleBusinessMonthlyPrice}</strong>, com rotinas e atualizações combinadas na proposta.</p>
        </aside>
      </section>

      <section className="rv-section shell" aria-labelledby="google-work">
        <h2 id="google-work">O que a Ravyt faz no seu perfil</h2>
        <ol className="rv-process">
          <li><h3>Confere a situação do cadastro</h3><p>Verificamos se já existe um perfil, quem tem acesso e se há pendências de verificação. Com isso, definimos o que faz sentido revisar primeiro.</p></li>
          <li><h3>Organiza as informações de atendimento</h3><p>Revisamos a categoria principal, os serviços, os horários, o telefone, o endereço ou a área de atendimento e o link do site, conforme o negócio e os recursos disponíveis.</p></li>
          <li><h3>Orienta os próximos passos</h3><p>Indicamos quais fotos e informações merecem atualização. Se o Google pedir verificação, orientamos o responsável a seguir o procedimento exibido na conta.</p></li>
        </ol>
      </section>

      <section className="rv-section shell" aria-labelledby="google-questions">
        <div className="rv-faq-grid">
          <div><h2 id="google-questions">Antes de contratar</h2><p>O serviço pode ser conduzido remotamente para empresas elegíveis de todo o Brasil.</p></div>
          <div className="rv-faq-list">
            <details><summary>Que empresas podem ter um perfil?<span aria-hidden="true">+</span></summary><p>Em geral, a empresa precisa receber clientes presencialmente ou atendê-los no local deles. A Ravyt confere a situação do negócio antes de propor a configuração. <a href="https://support.google.com/business/answer/3038177?hl=pt-BR">Consulte as diretrizes de elegibilidade do Google</a>.</p></details>
            <details><summary>Preciso pagar ao Google?<span aria-hidden="true">+</span></summary><p>O Perfil da Empresa é gratuito. O valor remunera a análise e os ajustes feitos pela Ravyt. Veja <a href="/quanto-custa-google-meu-negocio">o que está incluído no custo do serviço</a>.</p></details>
            <details><summary>Como fica a propriedade do perfil?<span aria-hidden="true">+</span></summary><p>A empresa mantém a propriedade e pode conceder acesso de gerenciamento. Se o cadastro estiver em outra conta, o primeiro passo é verificar as opções oficiais de acesso.</p></details>
            <details><summary>A otimização garante uma posição no Maps?<span aria-hidden="true">+</span></summary><p>A posição varia conforme a busca, a distância e o destaque do negócio. O trabalho da Ravyt melhora a organização das informações que você controla. <a href="https://support.google.com/business/answer/7091?hl=pt-BR">Veja como o Google explica os resultados locais</a>.</p></details>
          </div>
        </div>
      </section>

      <section className="rv-section shell rv-seo-section" aria-labelledby="google-guides">
        <h2 id="google-guides">Guias do Perfil da Empresa no Google</h2>
        <div className="rv-seo-grid">{guides.map(guide => <article key={guide.slug}>
          <h3><a href={'/' + guide.slug}>{guide.title}</a></h3><p>{guide.summary}</p>
        </article>)}</div>
      </section>

      <section className="rv-final shell">
        <h2>O que você precisa ajustar no perfil?</h2>
        <p>Informe o nome da empresa, a cidade e o que acontece quando você procura o negócio na Busca ou no Maps.</p>
        <div className="rd-actions"><a className="rv-button" href="/proposta?plano=google">Pedir proposta de otimização</a></div>
      </section>
    </main>
    <SiteFooter />
    <StructuredData data={{'@context':'https://schema.org','@graph':[
      webpage(googleBusinessPath, title, description), breadcrumb(googleBusinessPath, 'Google Meu Negócio'),
      {'@type':'Service','@id':url+'#service',name:'Otimização do Perfil da Empresa no Google',description,
        url,provider:{'@id':SITE_URL+'/#organization'},areaServed:{'@type':'Country',name:'Brasil'},
        offers:{'@type':'Offer',price:790,priceCurrency:'BRL',url}},
    ]}} />
  </>;
}
