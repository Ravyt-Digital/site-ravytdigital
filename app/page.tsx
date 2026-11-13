import HomeNavigation from '@/components/HomeNavigation';
import SiteFooter from '@/components/SiteFooter';
import Testimonials from '@/components/Testimonials';
import PortfolioGallery from '@/components/PortfolioGallery';
import HeroWebsitePreview from '@/components/HeroWebsitePreview';
import {PlanAdvisor} from '@/components/SalesForms';
import StructuredData from '@/components/StructuredData';
import {webpage} from '@/lib/seo';
import {contactHref, googleContactHref, homeContent} from '@/lib/home-content';
import {plans, professional, offerTitle, offerDescription} from '@/lib/plans';
import {guides} from '@/lib/guides';
import {SITE_URL} from '@/lib/site';

const faqs = [
  ['O que está incluído nos R$ 2.900?', 'O Site Profissional inclui até 5 páginas institucionais, design responsivo personalizado, redação a partir do briefing, SEO inicial, WhatsApp, configuração do seu domínio e 2 rodadas de ajustes. O escopo fica registrado na proposta.'],
  ['Como funciona o pagamento?', 'São 50% na contratação e 50% após a aprovação, antes da publicação definitiva ou transferência. No Site Profissional, são duas etapas de R$ 1.450.'],
  ['Quanto tempo leva?', 'O prazo de referência é de 5 a 7 dias úteis para o Essencial e 15 a 25 para o Profissional, contados após o pagamento inicial e o recebimento dos materiais. Projetos sob medida seguem o cronograma aprovado.'],
  ['De quem será o domínio?', 'No Profissional e no Sob Medida, você registra e renova o domínio em seu nome. A Ravyt realiza a configuração prevista na proposta. No Essencial, o endereço é um subdomínio rvt.bio administrado pela Ravyt.'],
  ['Como funciona a hospedagem?', 'Usamos Cloudflare para sites estáticos compatíveis ou hospedagem adequada para WordPress e outros recursos. No Essencial, a publicação está incluída por 12 meses e a renovação é de R$ 180 por ano. Com domínio próprio, você contrata e paga diretamente os serviços de terceiros aplicáveis.'],
  ['Preciso contratar manutenção?', 'A manutenção é opcional. Você pode solicitar ajustes avulsos ou contratar o Ravyt Care a R$ 99/mês ou o Care Plus a R$ 199/mês, conforme o ambiente e o escopo. O Care inclui suporte e uma pequena alteração mensal. O Care Plus inclui até 2 horas mensais de alterações simples.'],
  ['Como ficam acessos, arquivos e correções?', 'A proposta informa quais arquivos e acessos serão entregues, as licenças aplicáveis e as condições de transferência. A Ravyt corrige defeitos de implementação atribuíveis à entrega por 30 dias. Novas páginas e mudanças de escopo recebem orçamento próprio.'],
  ['O site vai aparecer em primeiro lugar no Google?', 'O SEO inicial prepara títulos, descrições e estrutura para as buscas. As posições variam com a concorrência, a relevância e outros fatores. A otimização do Perfil da Empresa no Google é um serviço separado, sujeito à elegibilidade.'],
];

export default function Home() {
  return <>
    <HomeNavigation />
    <StructuredData data={{'@context':'https://schema.org','@graph':[
      webpage('/', offerTitle, offerDescription),
      {'@type':'Service','@id':SITE_URL+'/#service',name:'Criação de sites profissionais',
        provider:{'@id':SITE_URL+'/#organization'},areaServed:{'@type':'Country',name:'Brasil'},
        offers:{'@type':'Offer',name:'Site Profissional',price:2900,priceCurrency:'BRL',url:SITE_URL+'/site-profissional'}},
    ]}} />
    <main id="conteudo" className="rv-home">
      <section className="rd-hero" id="inicio" aria-labelledby="hero-title">
        <div className="rv-hero shell">
          <div className="rv-hero-copy">
            <p className="rd-hero-kicker">Criação de sites profissionais</p>
            <h1 id="hero-title">Mostre seus serviços. <em>Facilite o contato.</em></h1>
            <p className="rv-hero-description">A Ravyt cria sites personalizados para empresas e profissionais de todo o Brasil, com redação para suas páginas e integração ao WhatsApp.</p>
            <div className="rd-hero-offer">
              <p><strong>{professional.price}</strong> <span>por projeto</span></p>
              <ul aria-label="O que o Site Profissional inclui">
                <li>Até 5 páginas</li><li>Domínio próprio</li><li>SEO inicial</li>
              </ul>
            </div>
            <div className="rv-actions">
              <a className="rv-button" href="/site-profissional" data-plan-click>Ver o Site Profissional <span className="rd-arrow rd-arrow-up" aria-hidden="true" /></a>
              <a className="rv-text-link" href="#projetos">Ver projetos <span className="rd-arrow rd-arrow-down" aria-hidden="true" /></a>
            </div>
          </div>
          <HeroWebsitePreview />
        </div>
      </section>

      <section className="rv-section shell rv-seo-section" aria-labelledby="situacoes-title">
        <h2 id="situacoes-title">O que seu cliente encontra <em>depois da indicação?</em></h2>
        <div className="rv-seo-grid">
          <article><h3>Seus serviços, em um só lugar</h3><p>O cliente pode entender o que você faz sem procurar a informação em várias publicações.</p></article>
          <article><h3>Trabalhos que ajudam a decidir</h3><p>Uma página de projetos mostra exemplos do que você entrega antes da primeira conversa.</p></article>
          <article><h3>Um caminho claro para pedir orçamento</h3><p>O visitante encontra o contato e consegue dizer de que serviço precisa, inclusive fora do horário comercial.</p></article>
        </div>
      </section>

      <section className="rv-section rv-portfolio-section" id="projetos" aria-labelledby="projects-title">
        <div className="shell"><div className="rv-section-heading"><h2 id="projects-title">Projetos da Ravyt</h2><p>Conheça os sites e veja como cada negócio apresenta seus serviços e orienta o próximo passo.</p></div>
          <PortfolioGallery />
        </div>
      </section>

      <section className="rv-section shell" id="planos" aria-labelledby="plans-title">
        <div className="rv-section-heading"><h2 id="plans-title">Planos e investimento</h2><p>Escolha pelo tamanho do projeto e pelo que sua empresa precisa apresentar.</p></div>
        <div className="rd-plan-grid">
          {plans.map(plan => <article className={'rd-plan' + (plan.id === 'profissional' ? ' rd-plan-main' : '')} key={plan.id}>
            <h3>{plan.name}</h3><p className="rd-plan-price">{plan.priceNote === 'a partir de' && <span>{plan.priceNote}</span>}{plan.price}{plan.priceNote === 'por projeto' && <span>{plan.priceNote}</span>}</p>
            <p>{plan.description}</p><ul>{plan.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
            <p className="rd-plan-timeline">{plan.timeline}</p>
            <a className={plan.id === 'profissional' ? 'rv-button' : 'rv-text-link'} data-plan-click href={plan.id === 'profissional' ? '/site-profissional' : '/proposta?plano=' + plan.id}>{plan.id === 'profissional' ? 'Ver escopo e condições' : 'Solicitar proposta'} <span aria-hidden="true">↗</span></a>
          </article>)}
        </div>
        <p className="rv-section-note">Pagamento de 50% na contratação e 50% após a aprovação. Domínio próprio registrado pelo cliente. Manutenção opcional.</p>
      </section>

      <section className="rv-section shell" id="consultor" aria-labelledby="advisor-title">
        <div className="rd-split">
          <div><h2 id="advisor-title">Qual site sua empresa <em>precisa?</em></h2><p>Responda a cinco perguntas e receba uma indicação de plano com base no seu projeto.</p></div>
          <PlanAdvisor />
        </div>
      </section>

      <section className="rv-section shell rv-seo-section" id="como-funciona" aria-labelledby="process-title">
        <h2 id="process-title">Da primeira conversa <em>à publicação</em></h2>
        <ol className="rv-process">
          <li><h3>Conversa e proposta</h3><p>Entendemos o negócio e confirmamos páginas, funcionalidades, prazo e investimento.</p></li>
          <li><h3>Desenvolvimento e revisão</h3><p>Com a entrada e os materiais recebidos, criamos o site e conduzimos as rodadas de ajustes previstas.</p></li>
          <li><h3>Aprovação e entrega</h3><p>Com o projeto aprovado e o pagamento final, fazemos a publicação ou a transferência acordada.</p></li>
        </ol>
      </section>

      <section className="rv-section rv-client-section" id="clientes" aria-labelledby="reviews-title">
        <div className="shell rv-section-heading"><h2 id="reviews-title">Quem já trabalhou <em>com a Ytala</em></h2><p>Relatos sobre o atendimento e a experiência de trabalho.</p></div>
        <Testimonials />
      </section>

      <section className="rv-section shell rv-seo-section" id="servicos" aria-labelledby="google-title">
        <div className="rv-section-heading">
          <div><h2 id="google-title">Perfil da Empresa <em>no Google</em></h2><p>Revisamos categorias, serviços, horários e contatos para empresas elegíveis na Busca e no Maps.</p></div>
          <div><p><strong>Otimização inicial por R$ 790</strong><br />Acompanhamento opcional por R$ 199/mês.</p><a className="rv-text-link" href={googleContactHref} data-contact-cta>Conversar sobre o Google <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="rv-seo-grid" id="guias">{guides.map(guide => <article key={guide.slug}><h3><a href={'/'+guide.slug}>{guide.title}</a></h3><p>{guide.summary}</p><a href={'/'+guide.slug}>Ler o guia <span aria-hidden="true">→</span></a></article>)}</div>
      </section>

      <section className="rv-faq-section" id="perguntas" aria-labelledby="faq-title">
        <div className="shell rv-faq-grid"><div><h2 id="faq-title">Dúvidas <em>antes de contratar</em></h2><p>Entenda os prazos, o domínio e o que acontece após a entrega.</p></div>
          <div className="rv-faq-list">{faqs.map(([question,answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="rv-final shell" id="contato">
        <h2>O que seu site precisa <em>resolver?</em></h2>
        <p>Conte sobre sua empresa e o que deseja apresentar. A Ravyt avalia o pedido e retorna pelo contato informado.</p>
        <div className="rd-actions"><a className="rv-button" href="/proposta">Solicitar proposta <span aria-hidden="true">↗</span></a><a className="rv-text-link" href={contactHref} data-contact-cta>Conversar no WhatsApp <span aria-hidden="true">↗</span></a></div>
        <div className="rd-whatsapp-avatar">
          <img src="/team/ravyt-atendimento-224.webp" alt={homeContent.contacts[0].name} width={72} height={72} loading="lazy" />
          <div><strong>{homeContent.contacts[0].name}</strong><span>Atendimento comercial · {homeContent.contacts[0].display}</span></div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
