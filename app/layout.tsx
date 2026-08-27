import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Landing Pages para Psicologia Parental | Ravyt Digital",
    template: "%s | Ravyt Digital",
  },
  description: "Landing pages, copywriting, cookies e instalação de pixels para produtores digitais de Psicologia Parental. Atendemos especialistas em todo o Brasil.",
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
    title: "Landing Pages para Psicologia Parental | Ravyt Digital",
    description: "Landing pages e copywriting para produtores digitais de Psicologia Parental.",
    images: [{ url: "/brand/ravyt-social-card.jpg", width: 1200, height: 630, alt: "Ravyt Digital — landing pages e copywriting para Psicologia Parental" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Pages para Psicologia Parental | Ravyt Digital",
    description: "Landing pages e copywriting para produtores digitais de Psicologia Parental.",
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
      <head>
        {/* eslint-disable-next-line @next/next/no-css-tags -- stable fallback for CDN asset resolution */}
        <link rel="stylesheet" href="/styles/site.css?v=20260827d" />
      </head>
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
