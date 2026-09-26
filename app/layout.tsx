import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
import StructuredData from "@/components/StructuredData";
import { organization, website } from "@/lib/structured-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "SEO, PresenÃ§a Local e Sites EstratÃ©gicos | Ravyt Digital", template: "%s | Ravyt Digital" },
  description: "SEO, Google Meu NegÃ³cio e sites estratÃ©gicos para sua empresa ser encontrada, compreendida e escolhida. Atendimento em todo o Brasil.",
  applicationName: "Ravyt Digital",
  authors: [{ name: "Ravyt Digital", url: SITE_URL }],
  creator: "Ravyt Digital", publisher: "Ravyt Digital", category: "Marketing digital e criaÃ§Ã£o de sites",
  alternates: { canonical: SITE_URL },
  openGraph: { type:"website",locale:"pt_BR",url:SITE_URL,siteName:"Ravyt Digital",title:"SEO, PresenÃ§a Local e Sites EstratÃ©gicos | Ravyt Digital",description:"Busca, presenÃ§a local e sites que conduzem da descoberta ao contato.",images:[{url:"/brand/ravyt-social-card.jpg",width:1200,height:630,alt:"Ravyt Digital"}] },
  twitter: { card:"summary_large_image",title:"SEO, PresenÃ§a Local e Sites EstratÃ©gicos | Ravyt Digital",description:"SEO, presenÃ§a local e sites estratÃ©gicos em todo o Brasil.",images:["/brand/ravyt-social-card.jpg"] },
  robots: { index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1} },
  icons:{icon:"/favicon.png",shortcut:"/favicon.png",apple:"/apple-touch-icon.png"}
};

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><head><link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/><link rel="preload" href="/fonts/fraunces-latin-italic.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/></head><body><StructuredData data={{"@context":"https://schema.org","@graph":[organization,website]}}/><a className="skip-link" href="#conteudo">Pular para o conteÃºdo</a>{children}<Analytics/><FloatingWhatsApp/><CookieConsent/></body></html>; }
