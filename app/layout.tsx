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
  title: { default: "Gestão de Mídias Sociais e Criação de Sites | Ravyt Digital", template: "%s | Ravyt Digital" },
  description: "Agência de gestão de mídias sociais e criação de sites online com domínio próprio. Estratégia, conteúdo e construção de websites para clientes de todo o Brasil.",
  applicationName: "Ravyt Digital",
  authors: [{ name: "Ravyt Digital", url: SITE_URL }],
  creator: "Ravyt Digital", publisher: "Ravyt Digital", category: "Marketing digital e criação de sites",
  alternates: { canonical: SITE_URL },
  openGraph: { type:"website",locale:"pt_BR",url:SITE_URL,siteName:"Ravyt Digital",title:"Gestão de Mídias Sociais e Criação de Sites | Ravyt Digital",description:"Estratégia de conteúdo e sites com domínio próprio para profissionais e empresas de todo o Brasil.",images:[{url:"/brand/ravyt-social-card.jpg",width:1200,height:630,alt:"Ravyt Digital"}] },
  twitter: { card:"summary_large_image",title:"Gestão de Mídias Sociais e Criação de Sites | Ravyt Digital",description:"Gestão de mídias sociais e construção de sites online em todo o Brasil.",images:["/brand/ravyt-social-card.jpg"] },
  robots: { index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1} },
  icons:{icon:"/favicon.png",shortcut:"/favicon.png",apple:"/apple-touch-icon.png"}
};

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body><StructuredData data={{"@context":"https://schema.org","@graph":[organization,website]}}/><a className="skip-link" href="#conteudo">Pular para o conteúdo</a>{children}<Analytics/><FloatingWhatsApp/><CookieConsent/></body></html>; }
