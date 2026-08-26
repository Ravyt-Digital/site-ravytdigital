import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { BlogHeader } from "@/components/BlogChrome";
import { whatsappUrl } from "@/lib/contact";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/ravytdigital/", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/ravytdigital", icon: "facebook" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ravytdigital/", icon: "linkedin" },
  { label: "WhatsApp", href: whatsappUrl(), icon: "whatsapp" },
] as const;

const socialIconPaths = {
  instagram: "M7.03.084c-1.277.06-2.149.264-2.911.563-.789.308-1.458.72-2.123 1.388C1.33 2.703.92 3.372.616 4.162.32 4.926.12 5.798.064 7.076.008 8.354-.005 8.764.001 12.023c.006 3.259.021 3.667.083 4.947.061 1.277.264 2.148.563 2.911.308.789.72 1.457 1.388 2.123.668.665 1.337 1.074 2.129 1.38.763.295 1.636.496 2.913.552 1.277.056 1.688.069 4.946.063 3.258-.006 3.668-.021 4.948-.081 1.28-.061 2.147-.265 2.91-.564.789-.308 1.458-.72 2.123-1.388.665-.668 1.074-1.338 1.379-2.128.296-.763.497-1.636.552-2.913.056-1.281.069-1.69.063-4.948-.006-3.258-.021-3.667-.082-4.947-.061-1.279-.264-2.148-.563-2.911-.308-.789-.72-1.457-1.388-2.123C21.298 1.33 20.628.921 19.838.617 19.074.321 18.202.12 16.924.065 15.647.009 15.236-.005 11.977.001 8.718.008 8.31.022 7.03.084Zm.14 21.693c-1.17-.051-1.805-.245-2.228-.408-.561-.216-.96-.477-1.382-.895-.422-.418-.681-.819-.9-1.378-.164-.423-.362-1.058-.417-2.228-.06-1.265-.072-1.644-.079-4.848-.007-3.204.005-3.583.061-4.848.05-1.169.245-1.805.408-2.228.216-.561.476-.96.895-1.382.419-.422.818-.681 1.378-.9.423-.165 1.058-.361 2.227-.417 1.266-.06 1.645-.072 4.848-.079 3.203-.007 3.584.005 4.85.061 1.169.051 1.805.244 2.228.408.561.216.96.475 1.382.895.422.419.681.818.901 1.379.165.422.361 1.056.417 2.226.06 1.266.074 1.645.079 4.848.006 3.203-.005 3.583-.061 4.848-.051 1.17-.245 1.806-.408 2.229-.216.56-.476.96-.895 1.381-.419.422-.818.681-1.378.9-.422.165-1.058.362-2.226.417-1.266.06-1.645.072-4.849.079-3.204.007-3.582-.006-4.848-.061ZM16.953 5.586a1.44 1.44 0 1 0 2.88-.006 1.44 1.44 0 0 0-2.88.006ZM5.839 12.012a6.162 6.162 0 1 0 12.323-.024 6.162 6.162 0 0 0-12.323.024ZM8 12.008a4 4 0 1 1 4.008 3.992A4 4 0 0 1 8 12.008Z",
  facebook: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103.513.061.9.126 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.8 26.8 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
  linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.064 2.064 0 1 1 0-4.128 2.064 2.064 0 0 1 0 4.128Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z",
  whatsapp: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884ZM20.464 3.488A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z",
} as const;

function SocialIcon({ name }: { name: (typeof socialLinks)[number]["icon"] }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={socialIconPaths[name]} /></svg>;
}

export const metadata: Metadata = {
  title: "Contato",
  description: "Converse com a Ravyt Digital sobre nossos serviços ou fale conosco pelo e-mail ola@ravytdigital.com.",
  alternates: { canonical: "/contato" },
  openGraph: { title: "Contato | Ravyt Digital", description: "WhatsApp e e-mail oficiais da Ravyt Digital.", url: "/contato", type: "website", images: [{ url: "/brand/ravyt-social-card.jpg", width: 1200, height: 630, alt: "Ravyt Digital" }] },
};

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "ContactPage", "@id": `${SITE_URL}/contato#page`, url: `${SITE_URL}/contato`, name: "Contato — Ravyt Digital", description: "WhatsApp e e-mail oficiais da Ravyt Digital.", isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": `${SITE_URL}/#organization` } },
      { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Ravyt Digital", legalName: "YTALA RAVENA DE SOUSA SILVA CABRAL CONTEUDO DIGITAL LTDA - ME", taxID: "26.114.696/0001-70", url: SITE_URL, email: "ola@ravytdigital.com", address: { "@type": "PostalAddress", streetAddress: "Rua Mocinha Batista, S/N", addressLocality: "Tianguá", addressRegion: "CE", postalCode: "62320-320", addressCountry: "BR" }, sameAs: socialLinks.slice(0, 3).map((contact) => contact.href) },
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
              <h1 id="titulo-contato">Conte um pouco sobre o seu projeto.</h1>
              <p>Se você é produtor(a) digital na área de Psicologia Parental, converse diretamente com a Ravyt sobre sua landing page, cookies, pixels ou copywriting.</p>
              <a className="button button-light button-large" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" aria-label="Conversar pelo WhatsApp com a Ravyt Digital (abre em nova aba)">Conversar pelo WhatsApp <span aria-hidden="true">↗</span></a>
              <p className="contact-page-guidance">Prefere e-mail? Fale com:</p>
              <a className="contact-page-email" href="mailto:ola@ravytdigital.com" data-track="email_click">ola@ravytdigital.com</a>
              <address className="contact-page-address">Tianguá, Ceará<br />Atendimento a produtores digitais em todo o Brasil.</address>
              <nav className="contact-socials" aria-label="Redes sociais e WhatsApp">
                {socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" data-track={social.label === "WhatsApp" ? "whatsapp_click" : undefined} aria-label={`${social.label}${social.label === "WhatsApp" ? " (abre em nova aba)" : ""}`} title={social.label}><SocialIcon name={social.icon} /></a>)}
              </nav>
              <p className="contact-page-privacy">Seus dados são tratados conforme nossa <a href="/politica-de-privacidade">Política de Privacidade</a>.</p>
            </div>
            <div className="contact-page-direct" aria-label="Canais diretos de contato">
              <p className="section-kicker">Contato sem formulário</p>
              <h2>Uma conversa direta, sem campos para preencher.</h2>
              <p>Escolha WhatsApp ou e-mail. Não solicitamos dados pessoais ou informações de saúde nesta página.</p>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-track="primary_cta_click" aria-label="Quero uma landing page estratégica pelo WhatsApp (abre em nova aba)">Quero uma landing page estratégica</a>
              <a href="mailto:ola@ravytdigital.com" data-track="email_click">Enviar um e-mail</a>
            </div>
          </div>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </main>
    </>
  );
}
