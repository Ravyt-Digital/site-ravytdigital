import Metricool from "@/components/Metricool";
import {headers} from "next/headers";
import {RegionalProvider} from "@/components/i18n/Regional";
import CookieEn from "@/locales/en/components/CookieConsent";
import CookieFr from "@/locales/fr/components/CookieConsent";
import CookieEs from "@/locales/es/components/CookieConsent";
import WhatsappEn from "@/locales/en/components/FloatingWhatsApp";
import WhatsappFr from "@/locales/fr/components/FloatingWhatsApp";
import WhatsappEs from "@/locales/es/components/FloatingWhatsApp";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
import StructuredData from "@/components/StructuredData";
import UtmCapture from "@/components/UtmCapture";
import PageEntity from "@/components/PageEntity";
import type {SiteLanguage} from "@/lib/brand-copy";
import { organization, website, marcio, ytala } from "@/lib/structured-data";
import inlineStyles from "./globals.css?inline";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Sites e presença no Google | Ravyt Digital", template: "%s | Ravyt Digital" },
  description: "Perfil da Empresa no Google quando elegível, site profissional One Page com domínio, hospedagem e manutenção, e SEO técnico inicial. Plano anual de R$ 597,00, com condições de pagamento na proposta, com implantação incluída.",
  applicationName: "Ravyt Digital",
  authors: [{ name: "Ravyt Digital", url: SITE_URL }],
  creator: "Ravyt Digital", publisher: "Ravyt Digital", category: "Criação de sites profissionais e presença digital no Google",
  alternates: { canonical: SITE_URL },
  openGraph: { type:"website",locale:"pt_BR",url:SITE_URL,siteName:"Ravyt Digital",title:"Sites e presença no Google | Ravyt Digital",description:"Site One Page, SEO inicial e presença no Google quando elegível. Hospedagem e manutenção técnica por 12 meses. R$ 597 por ano; condições na proposta.",images:[{url:"/brand/ravyt-social-card.webp",width:1200,height:630,alt:"Ravyt Digital"}] },
  twitter: { card:"summary_large_image",title:"Sites e presença no Google | Ravyt Digital",description:"Sites e presença no Google para profissionais liberais.",images:["/brand/ravyt-social-card.webp"] },
  robots: { index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1} },
  icons:{icon:"/favicon.webp",shortcut:"/favicon.webp",apple:"/apple-touch-icon.png"}
};

export default async function RootLayout({children}:{children:React.ReactNode}) { const requestHeaders=await headers(); const home=["/","/en","/fr","/es"].includes((requestHeaders.get("x-ravyt-page-path")??"/").replace(/\/$/,"")||"/"); const lang=requestHeaders.get("x-ravyt-language")??"pt"; const Cookie={en:CookieEn,fr:CookieFr,es:CookieEs}[lang]??CookieConsent; const Whatsapp={en:WhatsappEn,fr:WhatsappFr,es:WhatsappEs}[lang]??FloatingWhatsApp; return <html lang={lang==="pt"?"pt-BR":lang}><head>{home&&<><link rel="preload" as="image" href="/mockups/site-devices-clean-400.webp" media="(max-width:700px)" fetchPriority="high"/><link rel="preload" as="image" href="/mockups/site-devices-clean-800.webp" media="(min-width:701px)" imageSrcSet="/mockups/site-devices-clean-800.webp 800w, /mockups/site-devices-clean.webp 1100w" imageSizes="(max-width:700px) calc(100vw - 40px), (max-width:900px) 40vw, 520px" fetchPriority="high"/></>}<style dangerouslySetInnerHTML={{__html:inlineStyles}}/><link rel="alternate" type="application/rss+xml" title="Blog Ravyt Digital — Português" href="/blog/rss.xml"/></head><body><RegionalProvider lang={lang} country={requestHeaders.get("x-ravyt-country")??""}><StructuredData data={{"@context":"https://schema.org","@graph":[organization,website,marcio,ytala]}}/><PageEntity path={requestHeaders.get("x-ravyt-page-path")??"/"} lang={lang as SiteLanguage}/><a className="skip-link" href="#conteudo">{{pt:"Pular para o conteúdo",en:"Skip to content",fr:"Aller au contenu",es:"Saltar al contenido"}[lang]}</a>{children}<UtmCapture/><Analytics/><Metricool/><Whatsapp/><Cookie/></RegionalProvider></body></html>; }
