import type { Metadata } from "next";
import Script from "next/script";
import { SITE_URL } from "@/lib/site";
import { BlogHeader } from "@/components/BlogChrome";
import CookieConsent from "@/components/CookieConsent";

const TYPEFORM_ID = "wr1pvhAx";
const TYPEFORM_URL = `https://form.typeform.com/to/${TYPEFORM_ID}`;

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/ravytdigital/", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/ravytdigital", icon: "facebook" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ravytdigital/", icon: "linkedin" },
  { label: "WhatsApp", href: "https://wa.me/5588996956479", icon: "whatsapp" },
] as const;

function SocialIcon({ name }: { name: (typeof socialLinks)[number]["icon"] }) {
  if (name === "instagram") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="social-icon-fill" cx="17.4" cy="6.7" r="1" /></svg>;
  if (name === "facebook") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4.2c-.5-.1-1.8-.2-3.4-.2C10.4 4 8 6 8 9.7V13H4v4h4v7h5v-7h3.5l.6-4H13V10c0-1.2.3-2 1-2Z" /></svg>;
  if (name === "linkedin") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="9" width="4" height="12" /><circle cx="5" cy="5" r="2.2" /><path d="M10 9h4v1.8c.8-1.2 2.1-2.2 4.2-2.2 3.2 0 3.8 2.1 3.8 5V21h-4v-6.5c0-1.6-.3-2.8-1.9-2.8-1.7 0-2.1 1.3-2.1 3V21h-4Z" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.7 11.7 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.4Zm-8.3 18.2c-1.7 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.7 9.7 0 1 1 8.4 4.7Zm5.3-7.2c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.2l-.9 1.1c-.2.3-.5.3-.8.1-2-.9-3.3-1.7-4.6-4-.3-.6.3-.6.9-1.8.1-.2 0-.5 0-.7L7.5 6.3c-.2-.5-.4-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.3 3.4 1.5 3.6c.2.2 2.5 3.8 6 5.3.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.3-.4-.4-.9-.6Z" /></svg>;
}

export const metadata: Metadata = {
  title: "Contato",
  description: "Converse com a Ravyt Digital sobre nossos serviços ou fale conosco pelo e-mail ola@ravytdigital.com.",
  alternates: { canonical: "/contato" },
  openGraph: { title: "Contato | Ravyt Digital", description: "Formulário comercial e canais oficiais da Ravyt Digital.", url: "/contato", type: "website" },
};

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "ContactPage", "@id": `${SITE_URL}/contato#page`, url: `${SITE_URL}/contato`, name: "Contato — Ravyt Digital", description: "Formulário comercial e canais oficiais da Ravyt Digital.", isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": `${SITE_URL}/#organization` } },
      { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Ravyt Digital", url: SITE_URL, email: "ola@ravytdigital.com", sameAs: socialLinks.slice(0, 3).map((contact) => contact.href) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Contato", item: `${SITE_URL}/contato` }] },
    ],
  };

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <BlogHeader current="contact" />
      <main id="conteudo" className="contact-page">
        <section className="contact-page-section" aria-labelledby="titulo-contato">
          <div className="shell contact-page-grid">
            <div className="contact-page-copy">
              <p className="section-kicker">Seu próximo passo</p>
              <h1 id="titulo-contato">Quer conversar sobre nossos serviços?</h1>
              <p>Este formulário é exclusivo para pessoas e empresas interessadas em contratar ou conhecer melhor os serviços da Ravyt Digital.</p>
              <p className="contact-page-guidance">Para parcerias, imprensa, suporte, questões administrativas ou qualquer outro assunto, escreva para:</p>
              <a className="contact-page-email" href="mailto:ola@ravytdigital.com">ola@ravytdigital.com</a>
              <nav className="contact-socials" aria-label="Redes sociais e WhatsApp">
                {socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} title={social.label}><SocialIcon name={social.icon} /></a>)}
              </nav>
              <p className="contact-page-privacy">Seus dados são tratados conforme nossa <a href="/politica-de-privacidade">Política de Privacidade</a>.</p>
            </div>
            <div className="contact-page-form" aria-label="Formulário de contato da Ravyt Digital">
              <div data-tf-widget={TYPEFORM_ID} data-tf-hide-headers data-tf-hide-footer />
              <noscript><a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer">Abrir formulário de contato</a></noscript>
            </div>
          </div>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </main>
      <CookieConsent />
      <Script src="https://embed.typeform.com/next/embed.js" strategy="lazyOnload" />
    </>
  );
}
