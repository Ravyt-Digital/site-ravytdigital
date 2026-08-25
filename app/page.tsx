/* eslint-disable @next/next/no-html-link-for-pages */
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
      <Image src="/brand/ravyt-logo-2026.webp" alt="" width={875} height={235} priority unoptimized />
    </span>
  );
}

const services = [
  {
    number: "01",
    slug: "sites",
    href: "/servicos/criacao-de-sites",
    type: "site",
    title: "Criação de sites profissionais",
    text: "Criamos sites institucionais, landing pages e blogs com conteúdo, design responsivo, SEO técnico e caminhos claros para orçamento ou contato.",
    tags: ["Estratégia", "Design responsivo", "SEO técnico", "Conversão"],
  },
  {
    number: "02",
    slug: "social-media",
    href: "/servicos/gestao-de-redes-sociais",
    type: "content",
    title: "Gestão estratégica de redes sociais",
    text: "Planejamos pautas, produzimos textos e peças visuais e acompanhamos o conteúdo publicado nos canais definidos para cada empresa.",
    tags: ["Posicionamento", "Planejamento", "Conteúdo", "Análise"],
  },
];

const projects = [
  {
    title: "Capoeira Haute-Savoie",
    category: "Site institucional",
    href: "https://site-capoeira-haute-savoie.ravytdigital.workers.dev/",
    image: "/projects/capoeira-haute-savoie.webp",
  },
  {
    title: "Ravyt Digital",
    category: "Site institucional",
    href: "https://ravytdigital.com/",
    image: "/projects/ravyt-digital.webp",
  },
];

const steps = [
  { number: "01", title: "Diagnóstico", text: "Levantamos os serviços, o público, a área de atendimento, os diferenciais e os objetivos comerciais da empresa." },
  { number: "02", title: "Planejamento", text: "Definimos a estrutura do site ou o plano de conteúdo, os responsáveis, os prazos e os critérios de aprovação." },
  { number: "03", title: "Produção", text: "Produzimos as páginas, os textos, os elementos visuais e os demais materiais previstos no escopo aprovado." },
  { number: "04", title: "Publicação e acompanhamento", text: "Publicamos o projeto, verificamos o funcionamento e acompanhamos os indicadores definidos para o serviço." },
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
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Ravyt Digital",
        legalName: "YTALA RAVENA DE SOUSA SILVA CABRAL CONTEUDO DIGITAL LTDA - ME",
        taxID: "26.114.696/0001-70",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/brand/ravyt-logo-2026.webp`,
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
        description: "Agência de criação de sites e gestão de redes sociais localizada em Tianguá, Ceará, com atendimento a empresas em todo o Brasil.",
        email: "ola@ravytdigital.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Mocinha Batista, S/N",
          addressLocality: "Tianguá",
          addressRegion: "CE",
          postalCode: "62320-320",
          addressCountry: "BR",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "atendimento comercial",
          email: "ola@ravytdigital.com",
          availableLanguage: "Portuguese",
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Ceará" },
          { "@type": "Country", name: "Brasil" },
        ],
        founder: [
          { "@type": "Person", name: "Ytala Cabral", jobTitle: "Direção estratégica e Social Media" },
          { "@type": "Person", name: "Marcio Cabral", jobTitle: "Especialista em criação de sites e aplicativos" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Criação de sites e gestão de redes sociais",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.text,
              url: `${SITE_URL}${service.href}`,
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
                Tianguá, Ceará • Atendimento em todo o Brasil
              </div>
              <h1>
                Criação de sites e gestão de redes sociais <span>no Ceará.</span>
              </h1>
              <p className="hero-lead">
                A Ravyt Digital é uma agência localizada em Tianguá. Criamos sites profissionais
                e fazemos a gestão de redes sociais para empresas do Ceará e de outras regiões do Brasil.
              </p>
              <div className="hero-actions">
                <a className="button button-light" href="/contato">
                  Solicitar diagnóstico
                  <ArrowUpRight />
                </a>
                <a className="button button-ghost" href="#projetos">
                  Ver projetos realizados
                  <ArrowDown />
                </a>
              </div>
              <div className="hero-disciplines" aria-label="Áreas de atuação">
                <span>Sites</span><i /><span>Social Media</span><i /><span>SEO</span><i /><span>Conteúdo</span>
              </div>
            </div>

            <div className="hero-art brand-evolution" aria-label="Site profissional e conteúdo estratégico formando uma presença digital completa">
              <div className="brand-symbol-stage">
                <span className="brand-ring brand-ring-one" aria-hidden="true" />
                <span className="brand-ring brand-ring-two" aria-hidden="true" />
                <Image className="brand-symbol-main" src="/brand/ravyt-symbol-2026.webp" alt="Símbolo Ravyt Digital" width={245} height={235} priority unoptimized />
              </div>
              <div className="brand-path" aria-label="Estrutura de presença digital da Ravyt Digital">
                <div><i className="path-mark path-real" /><span>Site profissional</span></div>
                <b aria-hidden="true">→</b>
                <div><i className="path-mark path-transform" /><span>Conteúdo estratégico</span></div>
                <b aria-hidden="true">→</b>
                <div><i className="path-mark path-digital" /><span>Contato comercial</span></div>
              </div>
            </div>
          </div>

          <div className="hero-foot shell">
            <p>Sites institucionais, landing pages, blogs e catálogos.</p>
            <p>Planejamento e produção de conteúdo para redes sociais.</p>
          </div>
        </section>

        <section className="promise">
          <div className="shell promise-grid">
            <p className="section-kicker">Agência digital em Tianguá, Ceará</p>
            <h2>Atendemos empresas com criação de sites e <em>gestão de redes sociais.</em></h2>
            <p className="promise-copy">Os projetos podem ser conduzidos presencialmente no Ceará ou de forma remota para outras regiões. Cada serviço possui escopo, página, processo e objetivo comercial próprios.</p>
          </div>
        </section>

        <section className="services" id="servicos">
          <div className="shell section-heading">
            <div><p className="section-kicker">Nossos serviços principais</p><span className="section-index">01 — 02</span></div>
            <h2>Dois serviços principais, com <span>escopos e processos separados.</span></h2>
          </div>
          <div className="shell services-list">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-number">{service.number}</div>
                <div className="service-glyph"><ServiceGlyph type={service.type} /></div>
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a className="service-link" href={service.href}>
                    Conhecer este serviço <span aria-hidden="true">↗</span>
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
            <div><p className="section-kicker section-kicker-light">Sites criados pela Ravyt</p><span className="section-index section-index-light">01 — 02</span></div>
            <div className="work-heading-copy">
              <h2>Sites institucionais com identidade, conteúdo e <em>experiência responsiva.</em></h2>
              <p>Os projetos abaixo apresentam diferentes aplicações do trabalho da Ravyt Digital, da estrutura visual à navegação completa.</p>
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
          <div className="shell work-footer"><p>Precisa de um site institucional, landing page, blog ou catálogo?</p><a href="/contato">Solicitar orçamento de site <ArrowUpRight /></a></div>
        </section>

        <section className="method" id="metodo">
          <div className="shell method-layout">
            <div className="method-intro"><p className="section-kicker">Como trabalhamos</p><h2>Diagnóstico, planejamento, produção e <span>publicação.</span></h2><p>O processo é adaptado ao serviço contratado. Sites e redes sociais possuem entregas e indicadores diferentes, mesmo quando fazem parte da mesma estratégia.</p></div>
            <div className="method-steps">
              {steps.map((step) => <article className="method-step" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="about" id="sobre">
          <div className="shell about-grid">
            <div className="about-statement"><p className="section-kicker section-kicker-light">A Ravyt Digital</p><blockquote>Agência de criação de sites e gestão de redes sociais em <em>Tianguá, Ceará.</em></blockquote></div>
            <div className="about-copy"><p>Atendemos empresas do Ceará e de outras regiões do Brasil. As reuniões, aprovações e entregas podem ser realizadas online.</p><p>Ytala Cabral responde pela direção estratégica e pelo Social Media. Márcio Cabral responde pela criação de sites e aplicativos.</p><div className="about-principles"><span>Escopo definido</span><span>Processo documentado</span><span>Atendimento direto</span></div></div>
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
            <div className="team-belief"><span>Duas áreas de atuação.</span><strong>Criação de sites e gestão de redes sociais.</strong></div>
          </div>
        </section>

        <section className="contact" aria-labelledby="titulo-proximo-passo">
          <div className="contact-orbit contact-orbit-one" aria-hidden="true" /><div className="contact-orbit contact-orbit-two" aria-hidden="true" />
          <div className="shell contact-inner">
            <p className="section-kicker section-kicker-light">Solicite uma avaliação inicial</p>
            <h2 id="titulo-proximo-passo">Precisa criar um site ou contratar a <span>gestão de redes sociais?</span></h2>
            <p>Informe o serviço desejado, a cidade da empresa e o objetivo do projeto. A Ravyt entrará em contato para entender o escopo e apresentar os próximos passos.</p>
            <div className="contact-actions"><a className="button button-light button-large" href="/contato">Solicitar diagnóstico <i aria-hidden="true">↗</i></a></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-top">
          <a href="#inicio" aria-label="Voltar ao início"><BrandLockup dark /></a>
          <div className="footer-company-data">
            <p>Criação de sites e gestão de redes sociais no Ceará, com atendimento em todo o Brasil.</p>
            <address>Rua Mocinha Batista, S/N, Centro, Tianguá - CE<br />CEP 62320-320</address>
            <p>YTALA RAVENA DE SOUSA SILVA CABRAL CONTEUDO DIGITAL LTDA - ME<br />CNPJ 26.114.696/0001-70</p>
          </div>
          <nav aria-label="Links do rodapé"><a href="/servicos">Serviços</a><a href="#sobre">A Ravyt</a><a href="#projetos">Cases</a><a href="/blog">Insights</a><a href="/contato">Contato</a></nav>
        </div>
        <div className="shell footer-bottom"><span>© 2026 Ravyt Digital</span><p>Site desenvolvido pela Ravyt Digital.</p><div><a href="/politica-editorial">Política Editorial</a><a href="/politica-de-privacidade">Privacidade</a><a href="/termos-de-uso">Termos</a></div></div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}
