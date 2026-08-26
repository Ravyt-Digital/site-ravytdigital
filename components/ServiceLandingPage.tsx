import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { BlogFooter, BlogHeader } from "@/components/BlogChrome";
import { whatsappUrl } from "@/lib/contact";

export type ServiceLandingData = {
  slug: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  lead: string;
  serviceName: string;
  serviceDescription: string;
  areaServed: { type: "Country" | "AdministrativeArea"; name: string }[];
  problems: { title: string; text: string }[];
  deliverables: { title: string; text: string }[];
  process: { title: string; text: string }[];
  proof: { label: string; value: string }[];
  evidenceTitle: string;
  evidenceText: string;
  evidenceLinks: { href: string; label: string }[];
  relatedTitle: string;
  relatedLinks: { href: string; label: string; description: string }[];
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
};

export default function ServiceLandingPage({ data }: { data: ServiceLandingData }) {
  const pageUrl = `${SITE_URL}/servicos/${data.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#page`,
        url: pageUrl,
        name: data.serviceName,
        description: data.serviceDescription,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${pageUrl}#service` },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: data.serviceName,
        serviceType: data.serviceName,
        description: data.serviceDescription,
        url: pageUrl,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: data.areaServed.map((area) => ({ "@type": area.type, name: area.name })),
      },
      {
        "@type": "FAQPage",
        mainEntity: data.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Serviços", item: `${SITE_URL}/servicos` },
          { "@type": "ListItem", position: 3, name: data.serviceName, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <BlogHeader current="services" />
      <main id="conteudo" className="services-page service-landing-page">
        <header className="services-hero service-landing-hero">
          <div className="shell">
            <nav className="page-breadcrumb" aria-label="Navegação estrutural">
              <Link href="/">Início</Link><span aria-hidden="true">/</span>
              <Link href="/servicos">Serviços</Link><span aria-hidden="true">/</span>
              <span aria-current="page">{data.serviceName}</span>
            </nav>
            <p className="section-kicker">{data.eyebrow}</p>
            <h1>{data.title} <em>{data.titleAccent}</em></h1>
            <p>{data.lead}</p>
            <a className="button button-light" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-track="primary_cta_click" aria-label="Solicitar orçamento pelo WhatsApp (abre em nova aba)">Solicitar orçamento pelo WhatsApp <span aria-hidden="true">↗</span></a>
          </div>
        </header>

        <section className="service-proof" aria-label="Princípios do serviço">
          <div className="shell service-proof-grid">
            {data.proof.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
          </div>
        </section>

        <section className="service-intent" aria-labelledby="problemas-resolvidos">
          <div className="shell">
            <div className="service-section-heading">
              <p className="section-kicker">Quando contratar</p>
              <h2 id="problemas-resolvidos">O serviço começa pelo problema que precisa ser resolvido.</h2>
            </div>
            <div className="service-intent-grid">
              {data.problems.map((item, index) => (
                <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-deliveries" aria-labelledby="entregas-do-servico">
          <div className="shell service-two-column">
            <div><p className="section-kicker">Escopo orientado ao objetivo</p><h2 id="entregas-do-servico">O que pode fazer parte da solução.</h2></div>
            <div className="service-delivery-list">
              {data.deliverables.map((item, index) => (
                <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-process" aria-labelledby="processo-do-servico">
          <div className="shell">
            <p className="section-kicker">Processo</p>
            <h2 id="processo-do-servico">Decisões claras antes da execução.</h2>
            <ol>
              {data.process.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="services-local service-evidence" aria-labelledby="evidencia-do-servico">
          <div className="shell services-local-grid">
            <div><p className="section-kicker">Experiência e contexto</p><h2 id="evidencia-do-servico">{data.evidenceTitle}</h2></div>
            <div><p>{data.evidenceText}</p><div className="service-evidence-links">{data.evidenceLinks.map((link) => <Link href={link.href} key={link.href}>{link.label} <span aria-hidden="true">↗</span></Link>)}</div></div>
          </div>
        </section>

        <section className="service-related" aria-labelledby="conteudos-relacionados">
          <div className="shell">
            <div className="service-section-heading"><p className="section-kicker">Aprofunde a decisão</p><h2 id="conteudos-relacionados">{data.relatedTitle}</h2></div>
            <div className="service-related-grid">
              {data.relatedLinks.map((link) => <Link href={link.href} key={link.href}><h3>{link.label}</h3><p>{link.description}</p><span>Continuar leitura ↗</span></Link>)}
            </div>
          </div>
        </section>

        <section className="services-faq" aria-labelledby="duvidas-servico">
          <div className="shell"><p className="section-kicker">Dúvidas frequentes</p><h2 id="duvidas-servico">Informação suficiente para decidir com segurança.</h2><div>{data.faqs.map((faq) => <article key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}</div></div>
        </section>

        <section className="services-cta"><div className="shell"><p>Seu próximo passo</p><h2>{data.ctaTitle}</h2><a className="button button-light" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-track="primary_cta_click" aria-label="Quero conversar sobre meu projeto pelo WhatsApp (abre em nova aba)">Quero conversar sobre meu projeto <span aria-hidden="true">↗</span></a></div></section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </main>
      <BlogFooter />
    </>
  );
}
