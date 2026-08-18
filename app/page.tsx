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
    href: "/servicos/criacao-de-sites",
    type: "site",
    title: "Criação de sites profissionais",
    text: "Criamos sites institucionais, landing pages e blogs que apresentam sua empresa com clareza, fortalecem a confiança e ajudam o cliente a avançar até o contato.",
    tags: ["Estratégia", "Design responsivo", "SEO técnico", "Conversão"],
  },
  {
    number: "02",
    slug: "social-media",
    href: "/servicos/gestao-de-redes-sociais",
    type: "content",
    title: "Gestão estratégica de redes sociais",
    text: "Planejamos e produzimos conteúdos que traduzem o valor da sua empresa, mantêm uma presença consistente e aproximam a marca das pessoas certas.",
    tags: ["Posicionamento", "Planejamento", "Conteúdo", "Análise"],
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
  { number: "01", title: "Diagnóstico", text: "Entendemos seu negócio, seus clientes, seus serviços e o que hoje impede sua presença digital de transmitir confiança." },
  { number: "02", title: "Estratégia", text: "Definimos o papel do site, das redes sociais e de cada mensagem na jornada até o contato comercial." },
  { number: "03", title: "Criação", text: "Transformamos a direção em páginas, conteúdos e experiências com identidade, clareza e intenção." },
  { number: "04", title: "Publicação e evolução", text: "Colocamos a estrutura no ar, acompanhamos os sinais e refinamos o que pode gerar mais valor para o negócio." },
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
        description: "Agência de criação de sites e gestão de redes sociais localizada em Tianguá, Ceará, com atendimento a empresas em todo o Brasil.",
        slogan: "Excelência refletida no digital.",
        email: "ola@ravytdigital.com",
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
                Ajudamos empresas a apresentar melhor seus serviços, transmitir confiança
                e construir uma presença digital capaz de gerar novas oportunidades.
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
                <Image className="brand-symbol-main" src="/brand/ravyt-symbol-2026.png" alt="Símbolo Ravyt Digital" width={245} height={235} priority unoptimized />
              </div>
              <div className="brand-path" aria-label="Estrutura de presença digital da Ravyt Digital">
                <div><i className="path-mark path-real" /><span>Site profissional</span></div>
                <b aria-hidden="true">→</b>
                <div><i className="path-mark path-transform" /><span>Conteúdo estratégico</span></div>
                <b aria-hidden="true">→</b>
                <div><i className="path-mark path-digital" /><span>Marca mais forte</span></div>
              </div>
            </div>
          </div>

          <div className="hero-foot shell">
            <p>Para empresas que já entregam qualidade.</p>
            <p>Do Ceará para todo o Brasil.</p>
          </div>
        </section>

        <section className="promise">
          <div className="shell promise-grid">
            <p className="section-kicker">O problema que resolvemos</p>
            <h2>Seu negócio pode ser excelente. Mas se o digital não mostra isso, <em>o cliente não percebe.</em></h2>
            <p className="promise-copy">A Ravyt organiza o site e as redes sociais para que as pessoas entendam o que sua empresa faz, reconheçam seu valor e encontrem um caminho claro para entrar em contato.</p>
          </div>
        </section>

        <section className="services" id="servicos">
          <div className="shell section-heading">
            <div><p className="section-kicker">Nossos serviços principais</p><span className="section-index">01 — 02</span></div>
            <h2>O site constrói a base. As redes sociais mantêm <span>sua marca presente.</span></h2>
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
            <div><p className="section-kicker section-kicker-light">Sites criados pela Ravyt</p><span className="section-index section-index-light">01 — 05</span></div>
            <div className="work-heading-copy">
              <h2>Projetos que transformam bons negócios em <em>experiências digitais confiáveis.</em></h2>
              <p>Cada site é construído a partir do serviço, do público e do objetivo do cliente — sem copiar uma fórmula e apenas trocar o nome da empresa.</p>
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
          <div className="shell work-footer"><p>Seu site precisa representar a qualidade que o cliente encontrará depois.</p><a href="/contato">Quero criar meu site <ArrowUpRight /></a></div>
        </section>

        <section className="method" id="metodo">
          <div className="shell method-layout">
            <div className="method-intro"><p className="section-kicker">Como trabalhamos</p><h2>Antes de criar páginas ou posts, <span>entendemos o negócio.</span></h2><p>O site e as redes sociais precisam nascer da mesma estratégia para não transmitir mensagens diferentes sobre a mesma empresa.</p></div>
            <div className="method-steps">
              {steps.map((step) => <article className="method-step" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="about" id="sobre">
          <div className="shell about-grid">
            <div className="about-statement"><p className="section-kicker section-kicker-light">A Ravyt Digital</p><blockquote>Uma agência do Ceará para empresas que não querem <em>parecer comuns.</em></blockquote></div>
            <div className="about-copy"><p>Somos uma agência de criação de sites e gestão de redes sociais localizada em Tianguá, no Ceará, com atendimento a empresas de todo o Brasil.</p><p>Unimos estratégia, conteúdo, design e tecnologia para refletir no digital a excelência que cada cliente já entrega no dia a dia.</p><div className="about-principles"><span>Mensagem clara</span><span>Design com intenção</span><span>Parceria próxima</span></div></div>
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
            <div className="team-belief"><span>Estratégia e execução próximas.</span><strong>Site e conteúdo trabalhando para a mesma marca.</strong></div>
          </div>
        </section>

        <section className="contact" aria-labelledby="titulo-proximo-passo">
          <div className="contact-orbit contact-orbit-one" aria-hidden="true" /><div className="contact-orbit contact-orbit-two" aria-hidden="true" />
          <div className="shell contact-inner">
            <p className="section-kicker section-kicker-light">Comece por um diagnóstico</p>
            <h2 id="titulo-proximo-passo">Sua empresa precisa de um site novo ou de <span>redes sociais com direção?</span></h2>
            <p>Conte o momento do seu negócio. A Ravyt identifica a estrutura mais coerente para transformar sua presença digital em confiança e novas oportunidades.</p>
            <div className="contact-actions"><a className="button button-light button-large" href="/contato">Solicitar diagnóstico <i aria-hidden="true">↗</i></a></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-top"><a href="#inicio" aria-label="Voltar ao início"><BrandLockup dark /></a><p>Criação de sites e gestão de redes sociais<br />no Ceará, com atendimento em todo o Brasil.</p><nav aria-label="Links do rodapé"><a href="/servicos">Serviços</a><a href="#sobre">A Ravyt</a><a href="#projetos">Cases</a><a href="/blog">Insights</a><a href="/contato">Contato</a></nav></div>
        <div className="shell footer-bottom"><span>© 2026 Ravyt Digital</span><p>Criado com muito carinho por Ravyt Digital.</p><div><a href="/politica-editorial">Política Editorial</a><a href="/politica-de-privacidade">Privacidade</a><a href="/termos-de-uso">Termos</a></div></div>
      </footer>

      <CookieConsent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}
