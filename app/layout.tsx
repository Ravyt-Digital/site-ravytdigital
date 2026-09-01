import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Social Media para Psicólogos Parentais | Ravyt Digital", template: "%s | Ravyt Digital" },
  description: "Agência de Social Media especializada exclusivamente em Psicologia Parental. Estratégia e conteúdo com Ytala Cabral para psicólogos de todo o Brasil.",
  applicationName: "Ravyt Digital",
  authors: [{ name: "Ytala Cabral", url: `${SITE_URL}/autores/ytala-cabral` }],
  creator: "Ytala Cabral", publisher: "Ravyt Digital", category: "Social Media para Psicólogos Parentais",
  alternates: { canonical: SITE_URL },
  openGraph: { type:"website",locale:"pt_BR",url:SITE_URL,siteName:"Ravyt Digital",title:"Social Media para Psicólogos Parentais | Ravyt Digital",description:"Estratégia e conteúdo para psicólogos parentais que desejam construir uma presença digital clara, ética e humana.",images:[{url:"/brand/ravyt-social-card.jpg",width:1200,height:630,alt:"Ravyt Digital — Social Media para Psicólogos Parentais"}] },
  twitter: { card:"summary_large_image",title:"Social Media para Psicólogos Parentais | Ravyt Digital",description:"Estratégia e conteúdo com Ytala Cabral para psicólogos parentais de todo o Brasil.",images:["/brand/ravyt-social-card.jpg"] },
  robots: { index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1} },
  icons:{icon:"/favicon.png",shortcut:"/favicon.png",apple:"/apple-touch-icon.png"}
};

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><head><link rel="stylesheet" href="/styles/site.css?v=20260901" /></head><body>{children}<Analytics/><FloatingWhatsApp/><CookieConsent/></body></html>; }
