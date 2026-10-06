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
import { organization, website } from "@/lib/structured-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Google + Site + SEO | Ravyt Digital", template: "%s | Ravyt Digital" },
  description: "Perfil da Empresa no Google, site profissional com domínio, hospedagem e manutenção, e SEO. Plano único anual de 597, pago por cartão ou boleto, com implantação incluída.",
  applicationName: "Ravyt Digital",
  authors: [{ name: "Ravyt Digital", url: SITE_URL }],
  creator: "Ravyt Digital", publisher: "Ravyt Digital", category: "Marketing digital e criação de sites",
  alternates: { canonical: SITE_URL },
  openGraph: { type:"website",locale:"pt_BR",url:SITE_URL,siteName:"Ravyt Digital",title:"Google + Site + SEO | Ravyt Digital",description:"Google + Site + SEO: plano único anual de 597, pago por cartão ou boleto. Cartão NFC de Avaliação do Google (disponível somente no Brasil) incluído como bônus.",images:[{url:"/brand/ravyt-social-card.jpg",width:1200,height:630,alt:"Ravyt Digital"}] },
  twitter: { card:"summary_large_image",title:"Google + Site + SEO | Ravyt Digital",description:"Google + Site + SEO para empresas em todo o mundo.",images:["/brand/ravyt-social-card.jpg"] },
  robots: { index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1} },
  icons:{icon:"/favicon.png",shortcut:"/favicon.png",apple:"/apple-touch-icon.png"}
};

export default async function RootLayout({children}:{children:React.ReactNode}) { const requestHeaders=await headers(); const lang=requestHeaders.get("x-ravyt-language")??"pt"; const currency=requestHeaders.get("x-ravyt-currency")??"USD"; const Cookie={en:CookieEn,fr:CookieFr,es:CookieEs}[lang]??CookieConsent; const Whatsapp={en:WhatsappEn,fr:WhatsappFr,es:WhatsappEs}[lang]??FloatingWhatsApp; return <html lang={lang==="pt"?"pt-BR":lang}><head><link rel="alternate" type="application/rss+xml" title="Blog Ravyt Digital — Português" href="/blog/rss.xml"/><link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/><link rel="preload" href="/fonts/fraunces-latin-italic.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/></head><body><RegionalProvider lang={lang} currency={currency}><StructuredData data={{"@context":"https://schema.org","@graph":[organization,website]}}/><a className="skip-link" href="#conteudo">{{pt:"Pular para o conteúdo",en:"Skip to content",fr:"Aller au contenu",es:"Saltar al contenido"}[lang]}</a>{children}<UtmCapture/><Analytics/><Metricool/><Whatsapp/><Cookie/></RegionalProvider></body></html>; }
