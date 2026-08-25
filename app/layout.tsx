import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Criação de Sites e Gestão de Redes Sociais no Ceará",
    template: "%s | Ravyt Digital",
  },
  description: "Agência em Tianguá especializada em criação de sites profissionais e gestão de redes sociais para empresas do Ceará e de outras regiões do Brasil.",
  applicationName: "Ravyt Digital",
  authors: [
    { name: "Ytala Cabral", url: `${SITE_URL}/autores/ytala-cabral` },
    { name: "Marcio Cabral", url: `${SITE_URL}/autores/marcio-cabral` },
  ],
  creator: "Ravyt Digital",
  publisher: "Ravyt Digital",
  category: "Marketing digital",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Ravyt Digital",
    title: "Criação de Sites e Gestão de Redes Sociais no Ceará",
    description: "Agência em Tianguá que cria sites profissionais e gerencia redes sociais para empresas do Ceará e de outras regiões do Brasil.",
    images: [{ url: "/brand/ravyt-social-card.jpg", width: 1200, height: 630, alt: "Ravyt Digital — criação de sites e gestão de redes sociais no Ceará" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Criação de Sites e Gestão de Redes Sociais no Ceará",
    description: "Criação de sites profissionais e gestão de redes sociais para empresas do Ceará.",
    images: ["/brand/ravyt-social-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "theme-color": "#1A1C1E",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <a
          rel="me"
          href="https://mastodon.social/@ravytdigital"
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            border: 0,
          }}
        >
          Mastodon
        </a>
        {children}
        <Analytics />
        <FloatingWhatsApp />
        <CookieConsent />
      </body>
    </html>
  );
}
