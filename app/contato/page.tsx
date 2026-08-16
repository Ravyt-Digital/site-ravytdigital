import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { BlogFooter, BlogHeader } from "@/components/BlogChrome";
import ContactFormSection from "@/components/ContactFormSection";
import CookieConsent from "@/components/CookieConsent";

const contacts = [
  {
    label: "E-mail",
    value: "ola@ravytdigital.com",
    href: "mailto:ola@ravytdigital.com",
    description: "Para dúvidas, parcerias, suporte e assuntos gerais.",
  },
  {
    label: "Instagram",
    value: "@ravytdigital",
    href: "https://www.instagram.com/ravytdigital/",
    description: "Acompanhe nossos projetos, ideias e bastidores.",
  },
  {
    label: "Facebook",
    value: "ravytdigital",
    href: "https://www.facebook.com/ravytdigital",
    description: "Encontre a página oficial da Ravyt Digital.",
  },
  {
    label: "LinkedIn",
    value: "ravytdigital",
    href: "https://www.linkedin.com/company/ravytdigital/",
    description: "Conecte-se com a Ravyt no ambiente profissional.",
  },
  {
    label: "WhatsApp",
    value: "+55 88 99695-6479",
    href: "https://wa.me/5588996956479",
    description: "Converse diretamente com a nossa equipe.",
  },
];

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Ravyt Digital por e-mail, Instagram, Facebook, LinkedIn ou WhatsApp e solicite informações sobre nossos serviços.",
  alternates: { canonical: "/contato" },
  openGraph: {
    title: "Contato | Ravyt Digital",
    description: "Todos os canais oficiais da Ravyt Digital e o formulário para novos projetos.",
    url: "/contato",
    type: "website",
  },
};

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contato#page`,
        url: `${SITE_URL}/contato`,
        name: "Contato — Ravyt Digital",
        description: "Canais oficiais de contato e formulário comercial da Ravyt Digital.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Ravyt Digital",
        url: SITE_URL,
        email: "ola@ravytdigital.com",
        telephone: "+55 88 99695-6479",
        sameAs: contacts.slice(1, 4).map((contact) => contact.href),
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "ola@ravytdigital.com",
          telephone: "+55 88 99695-6479",
          availableLanguage: "Portuguese",
          areaServed: "BR",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Contato", item: `${SITE_URL}/contato` },
        ],
      },
    ],
  };

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <BlogHeader current="contact" />
      <main id="conteudo" className="contact-page">
        <header className="contact-page-hero">
          <div className="shell">
            <nav className="page-breadcrumb" aria-label="Navegação estrutural"><Link href="/">Início</Link><span>/</span><span aria-current="page">Contato</span></nav>
            <p className="section-kicker">Fale com a Ravyt Digital</p>
            <h1>Escolha o canal certo para <em>começar a conversa.</em></h1>
            <p>Para conhecer nossos serviços ou iniciar um projeto, use o formulário comercial. Para qualquer outro assunto, fale conosco pelo e-mail <a href="mailto:ola@ravytdigital.com">ola@ravytdigital.com</a>.</p>
          </div>
        </header>

        <section className="contact-channels" aria-labelledby="canais-de-contato">
          <div className="shell">
            <p className="section-kicker">Canais oficiais</p>
            <h2 id="canais-de-contato">Você também pode falar com a gente por aqui.</h2>
            <div className="contact-channel-grid">
              {contacts.map((contact, index) => (
                <a key={contact.label} href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <small>{contact.label}</small>
                  <strong>{contact.value}</strong>
                  <p>{contact.description}</p>
                  <i aria-hidden="true">↗</i>
                </a>
              ))}
            </div>
          </div>
        </section>

        <ContactFormSection />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </main>
      <BlogFooter />
      <CookieConsent />
    </>
  );
}
