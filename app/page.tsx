/* eslint-disable @next/next/no-html-link-for-pages */
import CookieConsent from "@/components/CookieConsent";
import MobileMenu from "@/components/MobileMenu";
import { SITE_URL, WWW_SITE_URL } from "@/lib/site";
import Image from "next/image";

const ArrowUpRight = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
    <path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowDown = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17">
    <path d="M12 5v14m-6-6 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function BrandLockup({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`brand-lockup${dark ? " brand-lockup-dark" : ""}`} aria-label="Ravyt Digital">
      <Image src="/brand/ravyt-wordmark.png" alt="" width={662} height={241} priority unoptimized />
    </span>
  );
}

const services = [
  {
    number: "01",
    type: "site",
    title: "Sites que valorizam o seu negócio",
    text: "Sites institucionais, páginas de vendas, blogs e experiências digitais pensadas para transformar visita em confiança — e confiança em ação.",
    tags: ["UX e UI", "Desenvolvimento", "SEO", "Performance"],
  },
  {
    number: "02",
    type: "brand",
    title: "Identidade com presença e coerência",
    text: "Direção visual e sistemas de marca que organizam a percepção do público e fazem sua empresa ser reconhecida em cada ponto de contato.",
    tags: ["Identidade visual", "Direção de arte", "Design system", "Aplicações"],
  },
  {
    number: "03",
    type: "content",
    title: "Conteúdo que comunica valor",
    text: "Estratégia e produção de conteúdo para redes sociais com linguagem humana, direção clara e consistência para construir autoridade de verdade.",
    tags: ["Social media", "Roteiros", "Design editorial", "Calendário"],
  },
  {
    number: "04",
    type: "strategy",
    title: "Estratégia para conectar tudo",
    text: "Posicionamento, jornada, automações e decisões digitais conectadas para que marca, conteúdo e tecnologia trabalhem na mesma direção.",
    tags: ["Posicionamento", "Jornada", "Automação", "Crescimento"],
  },
];

const projects = [
  { title: "Seja Indispensável!", category: "Página de vendas", style: "book" },
  { title: "Fluência Digital", category: "Blog & conteúdo", style: "fluencia" },
  { title: "Capoeira Haute-Savoie", category: "Página de evento", style: "capoeira" },
  { title: "CEREST Tianguá", category: "Site institucional & blog", style: "cerest" },
  { title: "Ravyt Motos", category: "Marca & experiência digital", style: "motos" },
];

const steps = [
  { number: "01", title: "Mergulho", text: "Entendemos o negócio, o público e o valor que já existe — antes de pensar na aparência." },
  { number: "02", title: "Direção", text: "Definimos o que precisa ser percebido, qual história contar e como cada canal participa dela." },
  { number: "03", title: "Criação", text: "Transformamos estratégia em design, conteúdo e tecnologia com atenção real aos detalhes." },
  { number: "04", title: "Evolução", text: "Publicamos, acompanhamos e refinamos a experiência para que ela continue à altura do negócio." },
];

function ServiceGlyph({ type }: { type: string }) {
  if (type === "site") return <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="6" y="9" width="36" height="29" rx="4" /><path d="M6 17h36M12 13h.1M17 13h.1" /></svg>;
  if (type === "brand") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="m24 5 17 11v17L24 43 7 33V16Z" /><circle cx="24" cy="24" r="7" /><path d="M24 5v12m17-1-10 6M7 16l10 6M7 33l10-6m24 6-10-6M24 43V31" /></svg>;
  if (type === "content") return <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="8" y="6" width="27" height="34" rx="4" /><path d="M15 15h13M15 21h13M15 27h8" /><path d="m31 34 9-9 3 3-9 9-5 1Z" /></svg>;
  return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="10" cy="29" r="4" /><circle cx="25" cy="12" r="4" /><circle cx="39" cy="30" r="4" /><path d="m13 26 9-11m6 0 8 12M14 30h21" /></svg>;
}

function ProjectVisual({ style }: { style: string }) {
  return (
    <div className={`project-visual project-${style}`} aria-hidden="true">
      <div className="browser-bar"><i /><i /><i /><span /></div>
      {style === "book" && <div className="pv-book"><small>MARCIO CABRAL</small><strong>SEJA<br /><em>INDISPENSÁVEL!</em></strong><span>Transforme sua carreira.</span><b>CONHEÇA O LIVRO →</b></div>}
      {style === "fluencia" && <div className="pv-fluencia"><div>01</div><small>APRENDA O IDIOMA<br />DA NOVA ECONOMIA.</small><strong>FLUÊNCIA<br /><em>DIGITAL</em></strong><span>IA • PRODUTIVIDADE • AUTOMAÇÃO</span></div>}
      {style === "capoeira" && <div className="pv-capoeira"><i>G</i><small>CAPOEIRA • CULTURA • MOVIMENTO</small><strong>Guerreiros<br />dos Campeões</strong><span>HAUTE-SAVOIE</span></div>}
      {style === "cerest" && <div className="pv-cerest"><small>SAÚDE DE QUEM TRABALHA</small><strong>Cuidar do trabalhador<br />é cuidar de toda a cidade.</strong><div><i /><i /><i /></div><span>CEREST TIANGUÁ</span></div>}
      {style === "motos" && <div className="pv-motos"><small>ESTRADA, ESTILO E PROTEÇÃO</small><strong>RAVYT<br /><em>MOTOS</em></strong><div className="helmet">R</div><span>PRONTO PARA ACELERAR?</span></div>}
    </div>
  );
}

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ravyt Digital",
    url: SITE_URL,
    sameAs: [WWW_SITE_URL, "https://www.instagram.com/ravytdigital/"],
    description: "Estratégia, design, conteúdo e tecnologia para negócios que desejam refletir sua excelência no digital.",
    areaServed: "BR",
  };

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-glow glow-one" aria-hidden="true" />
          <div className="hero-glow glow-two" aria-hidden="true" />

          <header className="site-header shell">
            <a className="brand-link" href="#inicio" aria-label="Ravyt Digital — início">
              <BrandLockup />
            </a>
            <nav className="desktop-nav" aria-label="Navegação principal">
              <a href="#servicos">Serviços</a>
              <a href="#projetos">Projetos</a>
              <a href="#metodo">Como fazemos</a>
              <a href="#sobre">A Ravyt</a>
              <a href="/blog">Blog</a>
            </nav>
            <a className="header-cta" href="#contato">
              Iniciar um projeto
              <ArrowUpRight />
            </a>
            <MobileMenu />
          </header>

          <div className="hero-grid shell">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Excelência traduzida para o digital
              </div>
              <h1>
                Seu negócio já entrega <span>excelência.</span>
                <br />O digital precisa deixar isso claro.
              </h1>
              <p className="hero-lead">
                A Ravyt transforma a qualidade que seus clientes já vivem no dia a dia
                em uma presença digital que gera confiança antes mesmo do primeiro contato.
              </p>
              <div className="hero-actions">
                <a className="button button-light" href="#contato">
                  Quero elevar minha presença
                  <ArrowUpRight />
                </a>
                <a className="button button-ghost" href="#projetos">
                  Conheça nosso trabalho
                  <ArrowDown />
                </a>
              </div>
              <div className="hero-disciplines" aria-label="Áreas de atuação">
                <span>Estratégia</span><i /><span>Design</span><i /><span>Conteúdo</span><i /><span>Tecnologia</span>
              </div>
            </div>

            <div className="hero-art" aria-label="Estratégia, design, conteúdo e tecnologia orbitando a marca Ravyt Digital">
              <div className="orbit orbit-outer" aria-hidden="true" />
              <div className="orbit orbit-inner" aria-hidden="true" />
              <div className="orbit-chip chip-strategy">Estratégia</div>
              <div className="orbit-chip chip-design">Design</div>
              <div className="orbit-chip chip-content">Conteúdo</div>
              <div className="orbit-chip chip-tech">Tecnologia</div>
              <div className="brand-core">
                <div className="brand-core-glow" aria-hidden="true" />
                <div className="brand-mark" aria-hidden="true"><span>R</span><svg viewBox="0 0 58 62"><path d="M7 47 29 8l8 14 14-9-20 41-9-17Z" fill="currentColor" /></svg></div>
                <p>RAVYT</p><small>DIGITAL</small>
              </div>
              <div className="signal-card signal-card-top"><span className="signal-label">Percepção de valor</span><strong>A sua qualidade,<br />visível no digital.</strong><div className="signal-line"><i /><i /><i /><i /></div></div>
              <div className="signal-card signal-card-bottom"><div className="signal-icon"><ArrowUpRight /></div><div><span className="signal-label">Objetivo</span><strong>Presença que inspira confiança.</strong></div></div>
            </div>
          </div>

          <div className="hero-foot shell">
            <p>Não criamos apenas uma aparência bonita.</p>
            <p>Construímos a percepção certa para o seu negócio.</p>
          </div>
        </section>

        <section className="promise">
          <div className="shell promise-grid">
            <p className="section-kicker">O que a Ravyt entrega</p>
            <h2>A distância entre ser excelente e <em>parecer excelente</em> não deveria existir.</h2>
            <p className="promise-copy">Alinhamos posicionamento, identidade, conteúdo e experiência digital para que cada ponto de contato revele o verdadeiro nível do seu trabalho.</p>
          </div>
        </section>

        <section className="services" id="servicos">
          <div className="shell section-heading">
            <div><p className="section-kicker">Soluções integradas</p><span className="section-index">01 — 04</span></div>
            <h2>O digital funciona melhor quando <span>tudo conta a mesma história.</span></h2>
          </div>
          <div className="shell services-list">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-number">{service.number}</div>
                <div className="service-glyph"><ServiceGlyph type={service.type} /></div>
                <div className="service-copy"><h3>{service.title}</h3><p>{service.text}</p></div>
                <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="work" id="projetos">
          <div className="work-glow" aria-hidden="true" />
          <div className="shell work-heading">
            <div><p className="section-kicker section-kicker-light">Projetos selecionados</p><p className="work-note">Estratégia e execução conectadas em diferentes mercados.</p></div>
            <h2>Trabalhos feitos para serem <em>vistos, lembrados e escolhidos.</em></h2>
          </div>
          <div className="shell projects-grid">
            {projects.map((project, index) => (
              <article className={`project-card project-card-${index + 1}`} key={project.title}>
                <ProjectVisual style={project.style} />
                <div className="project-meta"><span>{String(index + 1).padStart(2, "0")}</span><div><small>{project.category}</small><h3>{project.title}</h3></div></div>
              </article>
            ))}
          </div>
          <div className="shell work-footer"><p>Cada projeto começa no negócio — não na ferramenta.</p><a href="#contato">Quero construir o próximo <ArrowUpRight /></a></div>
        </section>

        <section className="method" id="metodo">
          <div className="shell method-layout">
            <div className="method-intro"><p className="section-kicker">Nosso jeito de fazer</p><h2>Bonito é consequência. <span>Clareza vem primeiro.</span></h2><p>Nosso processo reduz achismos, aproxima decisões e preserva o que torna cada negócio único.</p></div>
            <div className="method-steps">
              {steps.map((step) => <article className="method-step" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="about" id="sobre">
          <div className="shell about-grid">
            <div className="about-statement"><p className="section-kicker section-kicker-light">A Ravyt Digital</p><blockquote>“Antes de criar qualquer coisa, entendemos <em>o que precisa ser percebido.</em>”</blockquote></div>
            <div className="about-copy"><p>Somos uma agência que reúne estratégia, conteúdo, design e tecnologia para cuidar da presença digital como um todo.</p><p>O nosso trabalho é fazer com que a primeira impressão do público esteja à altura da experiência que o cliente encontra depois.</p><div className="about-principles"><span>Clareza antes do excesso</span><span>Intenção em cada detalhe</span><span>Parceria sem complicação</span></div></div>
          </div>
          <div className="shell team-grid">
            <article className="team-card">
              <div className="team-photo team-photo-ytala">
                <Image src="/team/ytala-cabral.webp" alt="Ytala Cabral, responsável pela direção estratégica e Social Media da Ravyt Digital" fill sizes="(max-width: 640px) calc(100vw - 30px), (max-width: 1020px) 46vw, 32vw" unoptimized />
                <span className="team-index">01</span>
              </div>
              <div className="team-info"><p>Direção estratégica & Social Media</p><h3>Ytala Cabral</h3></div>
            </article>
            <article className="team-card">
              <div className="team-photo team-photo-marcio">
                <Image src="/team/marcio-cabral.webp" alt="Márcio Cabral, especialista na criação de sites e aplicativos da Ravyt Digital" fill sizes="(max-width: 640px) calc(100vw - 30px), (max-width: 1020px) 46vw, 32vw" unoptimized />
                <span className="team-index">02</span>
              </div>
              <div className="team-info"><p>Especialista na Criação de Sites e Aplicativos</p><h3>Márcio Cabral</h3></div>
            </article>
            <div className="team-belief"><span>Uma equipe enxuta.</span><strong>Uma visão completa do seu digital.</strong></div>
          </div>
        </section>

        <section className="contact" id="contato">
          <div className="contact-orbit contact-orbit-one" aria-hidden="true" /><div className="contact-orbit contact-orbit-two" aria-hidden="true" />
          <div className="shell contact-inner">
            <p className="section-kicker section-kicker-light">Seu próximo passo</p>
            <h2>Vamos começar a cuidar do <span>seu negócio?</span></h2>
            <p>Conte onde sua presença digital ainda não representa a qualidade do seu trabalho. A gente começa por aí.</p>
            <div className="contact-actions"><a className="button button-light button-large" href="https://www.instagram.com/ravytdigital/" target="_blank" rel="noreferrer">Conversar pelo Instagram <ArrowUpRight /></a><a className="button button-ghost button-large" href="mailto:contato@ravytdigital.com">contato@ravytdigital.com</a></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-top"><a href="#inicio" aria-label="Voltar ao início"><BrandLockup dark /></a><p>Estratégia, design, conteúdo e tecnologia<br />para sua excelência ser percebida.</p><nav aria-label="Links do rodapé"><a href="#servicos">Serviços</a><a href="#projetos">Projetos</a><a href="#metodo">Como fazemos</a><a href="#sobre">A Ravyt</a><a href="/blog">Blog</a></nav></div>
        <div className="shell footer-bottom"><span>© 2026 Ravyt Digital</span><p>Criado com muito carinho por Ravyt Digital.</p><div><a href="/politica-de-privacidade">Política de Privacidade</a><a href="/termos-de-uso">Termos de Uso</a></div></div>
      </footer>

      <CookieConsent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}
