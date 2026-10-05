import type { Metadata } from "next";
import { SITE_URL } from "./site";

// Keep the full editorial headline on-page; use concise, distinct search titles.
const searchTitles: Record<string, string[]> = {
 "/contato": ["Contato para Google, Site e SEO", "Contact our Google, Website and SEO team", "Contactez notre équipe Google, site et SEO", "Contacto para Google, sitios web y SEO"],
 "/sobre": ["Sobre a Ravyt: Google, Site e SEO", "About Ravyt: Google, Websites and SEO", "À propos de Ravyt : Google, site et SEO", "Sobre Ravyt: Google, sitios web y SEO"],
 "/autores/ytala-cabral": ["Ytala Cabral: SEO e conteúdo", "Ytala Cabral: SEO and content", "Ytala Cabral : SEO et rédaction", "Ytala Cabral: SEO y contenidos"],
 "/quanto-custa-criar-um-site": ["Quanto custa criar um site profissional?", "How much does a professional website cost?", "Combien coûte un site professionnel ?", "¿Cuánto cuesta un sitio web profesional?"],
 "/blog/criacao-de-site-profissional-para-empresas": ["Site profissional: como avaliar uma proposta", "Business websites: how to choose a provider", "Site professionnel : choisir un prestataire", "Sitio profesional: cómo elegir proveedor"],
 "/blog/site-institucional-paginas-essenciais": ["Site institucional: páginas essenciais", "Corporate websites: essential pages", "Site d’entreprise : les pages essentielles", "Sitio corporativo: páginas esenciales"],
 "/sites": ["Criação de sites com UX, Copy e SEO", "Strategic websites with UX and SEO", "Sites stratégiques avec UX et SEO", "Sitios estratégicos con UX y SEO"],
 "/google-meu-negocio": ["Google Meu Negócio e presença local", "Google Business Profile and local presence", "Profil d’entreprise Google et SEO local", "Perfil de Empresa en Google y SEO local"],
 "/sites-para-moveis-planejados": ["Sites para empresas de móveis planejados", "Websites for custom furniture businesses", "Sites pour les meubles sur mesure", "Sitios para empresas de muebles a medida"],
 "/seo": ["SEO estratégico para empresas", "Strategic SEO for businesses", "SEO stratégique pour les entreprises", "SEO para empresas y búsqueda orgánica"],
 "/termos-de-uso": ["Termos de uso dos serviços e do site", "Website and service terms of use", "Conditions d’utilisation du site", "Condiciones de uso del sitio"],
 "/politica-de-cookies": ["Política de cookies e preferências", "Cookie policy and privacy preferences", "Cookies et préférences de confidentialité", "Cookies y preferencias de privacidad"],
};
export function languageAlternates(canonical: string) {
 const path = new URL(canonical, SITE_URL).pathname.replace(/\/$/, "") || "/";
 const raw = path.replace(/^\/(en|fr|es)(?=\/|$)/, "") || "/";
 const suffix = raw === "/" ? "" : raw;
 return { "pt-BR": SITE_URL + suffix, en: SITE_URL + "/en" + suffix, fr: SITE_URL + "/fr" + suffix, es: SITE_URL + "/es" + suffix, "x-default": SITE_URL + suffix };
}
export function pageMetadata(meta: Metadata): Metadata {
 const canonical = String(meta.alternates?.canonical ?? "/");
 const path = new URL(canonical, SITE_URL).pathname;
 const lang = path.match(/^\/(en|fr|es)(?=\/|$)/)?.[1] ?? "pt";
 const raw = path.replace(/^\/(en|fr|es)(?=\/|$)/, "") || "/";
 const index = ["pt", "en", "fr", "es"].indexOf(lang);
 const title = searchTitles[raw]?.[index] ?? (typeof meta.title === "string" ? meta.title : "Ravyt Digital");
 return {
  ...meta, title,
  alternates: { ...meta.alternates, languages: languageAlternates(canonical) },
  openGraph: { type: "website", siteName: "Ravyt Digital", description: meta.description ?? undefined, url: canonical,
   images: [{ url: "/brand/ravyt-social-card.jpg", width: 1200, height: 630, alt: "Ravyt Digital" }],
   ...meta.openGraph, title, locale: ["pt_BR", "en_US", "fr_FR", "es_ES"][index] },
  twitter: { card: "summary_large_image", description: meta.description ?? undefined, images: ["/brand/ravyt-social-card.jpg"], ...meta.twitter, title },
 };
}
