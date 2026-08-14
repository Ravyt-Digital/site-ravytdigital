import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ravyt Digital | Excelência refletida no digital",
    template: "%s | Ravyt Digital",
  },
  description: "Estratégia, design, conteúdo e tecnologia para transformar a qualidade do seu negócio em uma presença digital à mesma altura.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Ravyt Digital",
    title: "Ravyt Digital | Excelência refletida no digital",
    description: "Estratégia, design, conteúdo e tecnologia para negócios que querem ser percebidos à altura do que entregam.",
    images: [{ url: "/brand/ravyt-social-card.jpg", width: 1200, height: 630, alt: "Nova identidade visual da Ravyt Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravyt Digital | Excelência refletida no digital",
    description: "Estratégia, design, conteúdo e tecnologia para sua excelência ser percebida.",
    images: ["/brand/ravyt-social-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#1A1C1E",
    "codex-preview": "development",
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
        {children}
      </body>
    </html>
  );
}
