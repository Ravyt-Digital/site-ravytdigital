/* eslint-disable @next/next/no-html-link-for-pages */
import CookieConsent from "@/components/CookieConsent";
import MobileMenu from "@/components/MobileMenu";
import ProjectPreview from "@/components/ProjectPreview";
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
      <Image src="/brand/ravyt-logo-2026.png" alt="" width={875} height={235} priority unoptimized />
    </span>
  );
}

const services = [
  {
    number: "01",
    slug: "sites",
    type: "site",
    title: "Sites que valorizam o seu negócio",
    text: "Sites institucionais, páginas de vendas, blogs e experiências digitais pensadas para transformar visita em confiança — e confiança em ação.",
    tags: ["UX e UI", "Desenvolvimento", "SEO", "Performance"],
  },
  {
    number: "02",
    slug: "identidade-visual",
    type: "brand",
    title: "Identidade com presença e coerência",
    text: "Direção visual e sistemas de marca que organizam a percepção do público e fazem sua empresa ser reconhecida em cada ponto de contato.",
    tags: ["Identidade visual", "Direção de arte", "Design system", "Aplicações"],
  },
  {
    number: "03",
    slug: "social-media",
    type: "content",
    title: "Conteúdo que comunica valor",
    text: "Estratégia e produção de conteúdo para redes sociais com linguagem humana, direção clara e consistência para construir autoridade de verdade.",
    tags: ["Social media", "Roteiros", "Design editorial", "Calendário"],
  },
  {
    number: "04",
    slug: "estrategia-digital",
    type: "strategy",
    title: "Estratégia para conectar tudo",
    text: "Posicionamento, jornada, automações e decisões digitais conectadas para que marca, conteúdo e tecnologia trabalhem na mesma direção.",
    tags: ["Posicionamento", "Jornada", "Automação", "Crescimento"],
  },
];

const projects = [
  {
    title: "Odonto Premium",
    category: "Site institucional",
    href: "https://site-odonto-premium.ravytdigital.workers.dev/",
    image: "/projects/odonto-premium.webp",
  },
  {
    title: "Capoeira Haute-Savoie",
    category: "Site institucional",
    href: "https://site-capoeira-haute-savoie.ravytdigital.workers.dev/",
    image: "/projects/capoeira-haute-savoie.webp",
  },
  {
    title: "Excel no Agro",
    category: "Página de vendas",
    href: "https://site-excel-no-agro.ravytdigital.workers.dev/",
    image: "/projects/excel-no-agro.webp",
  },
  {
    title: "Seja Indispensável!",
    category: "Página de vendas",
    href: "https://site-seja-indispensavel.ravytdigital.workers.dev/",
    image: "/projects/seja-indispensavel.webp",
  },
  {
    title: "Ravyt Motos",
    category: "Catálogo digital",
    href: "https://site-ravyt-capacetes.ravytdigital.workers.dev/",
    image: "/projects/ravyt-motos.webp",
  },
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

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#organization`,
        name: "Ravyt Digital",
        legalName: "Ravyt Digital",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/brand/ravyt-logo-2026.png`,
          width: 875,
          height: 235,
        },
        image: `${SITE_URL}/brand/ravyt-social-card.jpg`,
        sameAs: [
          WWW_SITE_URL,
          "https://www.instagram.com/ravytdigital/",
          "https://www.facebook.com/ravytdigital",
          "https://www.linkedin.com/company/ravytdigital/",
          "https://github.com/Ravyt-Digital",
        ],
        description: "Agência de estratégia, design, Social Media e tecnologia que transforma a qualidade real de negócios em uma presença digital à mesma altura.",
        slogan: "Excelência refletida no digital.",
        areaServed: { "@type": "Country", name: "Brasil" },
        founder: [
          { "@type": "Person", name: "Ytala Cabral", jobTitle: "Direção estratégica e Social Media" },
          { "@type": "Person", name: "Marcio Cabral", jobTitle: "Especialista em criação de sites e aplicativos" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Soluções de presença digital",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.text,
              url: `${SITE_URL}/servicos#${service.slug}`,
              provider: { "@id": `${SITE_URL}/#organization` },
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Ravyt Digital",
        inLanguage: "pt-BR",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
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
              <a href="/servicos">Serviços</a>
              <a href="#sobre">A Ravyt</a>
              <a href="#projetos">Cases</a>
              <a href="/blog">Insights</a>
              <a href="/contato">Contato</a>
            </nav>
            <a className="header-cta" href="/contato">
              Vamos conversar
              <ArrowUpRight />
            </a>
            <MobileMenu />
          </header>

          <div className="hero-grid shell">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Estratégia • Design • Tecnologia
              </div>
              <h1>
                Excelência refletida <span>no digital.</span>
              </h1>
              <p className="hero-lead">
                Transformamos a qualidade real do seu negócio em uma presença digital
                à mesma altura.
              </p>
              <div className="hero-actions">
                <a className="button button-light" href="/contato">
                  Vamos conversar
                  <ArrowUpRight />
                </a>
                <a className="button button-ghost" href="#projetos">
                  Conheça nossos cases
                  <ArrowDown />
                </a>
              </div>
              <div className="hero-disciplines" aria-label="Áreas de atuação">
                <span>Estratégia</span><i /><span>Design</span><i /><span>Conteúdo</span><i /><span>Tecnologia</span>
              </div>
            </div>

            <div className="hero-art brand-evolution" aria-label="Da excelência real à presença digital de alto nível">
              <div className="brand-symbol-stage">
                <span className="brand-ring brand-ring-one" aria-hidden="true" />
                <span className="brand-ring brand-ring-two" aria-hidden="true" />
                <Image className="brand-symbol-main" src="/brand/ravyt-symbol-2026.png" alt="Símbolo Ravyt Digital" width={245} height={235} priority unoptimized />
              </div>
              <div className="brand-path" aria-label="Processo de transformação da Ravyt Digital">
                <div><i className="path-mark path-real" /><span>Excelência real</span></div>
                <b aria-hidden="true">→</b>
                <div><i className="path-mark path-transform" /><span>Transformação estratégica</span></div>
                <b aria-hidden="true">→</b>
                <div><i className="path-mark path-digital" /><span>Presença digital de alto nível</span></div>
              </div>
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
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a className="service-link" href={`/servicos#${service.slug}`}>
                    Entenda como esta solução funciona <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="work" id="projetos">
          <div className="work-glow" aria-hidden="true" />
          <div className="shell work-heading">
            <div><p className="section-kicker section-kicker-light">Projetos selecionados</p><span className="section-index section-index-light">01 — 05</span></div>
            <div className="work-heading-copy">
              <h2>Projetos que geram <em>presença, confiança e resultado.</em></h2>
              <p>Cada projeto nasce de uma visão estratégica e se transforma em uma experiência digital pensada para gerar valor.</p>
            </div>
          </div>
          <div className="projects-viewport shell">
            <div className="projects-grid" aria-label="Projetos selecionados">
            {projects.map((project, index) => (
              <article
                className={`project-card project-card-${index + 1}`}
                key={project.title}
                aria-label={`${project.title} — ${project.category}. Clique na imagem para visualizar o site completo.`}
              >
                <div className="project-visual">
                  <div className="project-browser-bar" aria-hidden="true">
                    <i /><i /><i /><span>{project.href.replace("https://", "").replace(/\/$/, "")}</span>
                  </div>
                  <ProjectPreview
                    src={project.href}
                    image={project.image}
                    title={project.title}
                    category={project.category}
                  />
                  <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="project-meta">
                  <div><small>{project.category}</small><h3>{project.title}</h3></div>
                  <a
                    className="project-action"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver projeto ${project.title} (abre em uma nova aba)`}
                  >
                    Abrir em nova aba <ArrowUpRight />
                  </a>
                </div>
              </article>
            ))}
            </div>
          </div>
          <div className="shell work-footer"><p>Cada projeto começa no negócio — não na ferramenta.</p><a href="/contato">Quero construir o próximo <ArrowUpRight /></a></div>
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

        <section className="contact" aria-labelledby="titulo-proximo-passo">
          <div className="contact-orbit contact-orbit-one" aria-hidden="true" /><div className="contact-orbit contact-orbit-two" aria-hidden="true" />
          <div className="shell contact-inner">
            <p className="section-kicker section-kicker-light">Seu próximo passo</p>
            <h2 id="titulo-proximo-passo">Vamos conversar sobre o <span>seu projeto.</span></h2>
            <p>Reunimos o formulário para novos projetos e todos os canais oficiais da Ravyt Digital em uma única página.</p>
            <div className="contact-actions"><a className="button button-light button-large" href="/contato">Ir para contato <i aria-hidden="true">↗</i></a></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-top"><a href="#inicio" aria-label="Voltar ao início"><BrandLockup dark /></a><p>Estratégia, design, conteúdo e tecnologia<br />para sua excelência ser percebida.</p><nav aria-label="Links do rodapé"><a href="/servicos">Serviços</a><a href="#sobre">A Ravyt</a><a href="#projetos">Cases</a><a href="/blog">Insights</a><a href="/contato">Contato</a></nav></div>
        <div className="shell footer-bottom"><span>© 2026 Ravyt Digital</span><p>Criado com muito carinho por Ravyt Digital.</p><div><a href="/politica-editorial">Política Editorial</a><a href="/politica-de-privacidade">Privacidade</a><a href="/termos-de-uso">Termos</a></div></div>
      </footer>

      <CookieConsent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}
