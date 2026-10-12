import type { Metadata } from "next";
import { SITE_URL } from "./site";

// Keep the full editorial headline on-page; use concise, distinct search titles.
const searchTitles: Record<string, string[]> = {
 "/blog/perfil-empresa-google-atendimento-online": ["Atendimento online pode ter perfil no Google?", "Online services and Google Business Profile", "Activité en ligne et Profil d’entreprise Google", "Servicios online y Perfil de Empresa en Google"],
 "/blog/site-recebe-visitas-mas-nao-contatos": ["Site com visitas e sem contatos: o que revisar", "Website visits without enquiries: what to check", "Visites sans demandes : que vérifier ?", "Visitas sin contactos: qué revisar en el sitio"],
 "/blog/testar-velocidade-site-celular": ["Como testar a velocidade do site no celular", "How to test website speed on mobile", "Tester la vitesse du site sur mobile", "Cómo probar la velocidad del sitio en móvil"],
 "/blog/manutencao-de-site-o-que-inclui": ["Manutenção de site: escopo e contratação", "Website maintenance: scope and hiring", "Maintenance du site : périmètre et devis", "Mantenimiento web: alcance y contratación"],
 "/blog/instagram-nao-substitui-site-proprio": ["Instagram e site próprio: funções diferentes", "Instagram and your own website: different roles", "Instagram et site : des rôles différents", "Instagram y sitio propio: funciones diferentes"],
 "/blog/site-bonito-nao-basta": ["Site bonito: 7 sinais de confiança para revisar", "Website design: 7 trust signals to review", "Design du site : 7 points de confiance à vérifier", "Diseño web: 7 señales de confianza para revisar"],
 "/": ["Sites profissionais e presença no Google", "Professional websites and Google presence", "Sites professionnels et présence sur Google", "Sitios profesionales y presencia en Google"],
 "/contato": ["Contato para Google, Site e SEO", "Contact our Google, Website and SEO team", "Contactez notre équipe Google, site et SEO", "Contacto para Google, sitios web y SEO"],
 "/sobre": ["Sobre a Ravyt: Google, Site e SEO", "About Ravyt: Google, Websites and SEO", "À propos de Ravyt : Google, site et SEO", "Sobre Ravyt: Google, sitios web y SEO"],
 "/autores/ytala-cabral": ["Ytala Cabral: SEO e conteúdo", "Ytala Cabral: SEO and content", "Ytala Cabral : SEO et rédaction", "Ytala Cabral: SEO y contenidos"],
 "/quanto-custa-criar-um-site": ["Quanto custa criar um site profissional?", "How much does a professional website cost?", "Combien coûte un site professionnel ?", "¿Cuánto cuesta un sitio web profesional?"],
 "/blog/criacao-de-site-profissional-para-empresas": ["Site profissional: como avaliar uma proposta", "Business websites: how to choose a provider", "Site professionnel : choisir un prestataire", "Sitio profesional: cómo elegir proveedor"],
 "/blog/site-institucional-paginas-essenciais": ["Site institucional: páginas essenciais", "Corporate websites: essential pages", "Site d’entreprise : les pages essentielles", "Sitio corporativo: páginas esenciales"],
 "/criacao-de-sites-online": ["Como contratar a criação de um site online", "How to commission a website remotely", "Comment commander un site à distance", "Cómo contratar la creación de un sitio online"],
 "/sites": ["Criação de sites profissionais", "Professional website creation", "Création de sites professionnels", "Creación de sitios profesionales"],
 "/google-meu-negocio": ["Perfil da Empresa: configuração inicial", "Google Business Profile: initial setup", "Profil d’entreprise Google : mise en place", "Perfil de Empresa en Google: configuración"],
 "/sites-para-moveis-planejados": ["Sites para empresas de móveis planejados", "Websites for custom furniture businesses", "Sites pour les meubles sur mesure", "Sitios para empresas de muebles a medida"],
 "/seo": ["SEO inicial para sites profissionais", "Initial SEO for professional websites", "SEO initial pour les sites professionnels", "SEO inicial para sitios profesionales"],
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
   images: [{ url: "/brand/ravyt-social-card.webp", width: 1200, height: 630, alt: "Ravyt Digital" }],
   ...meta.openGraph, title, locale: ["pt_BR", "en_US", "fr_FR", "es_ES"][index] },
  twitter: { card: "summary_large_image", description: meta.description ?? undefined, images: ["/brand/ravyt-social-card.webp"], ...meta.twitter, title },
 };
}
