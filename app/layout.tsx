import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ravyt Digital | Sua excelência, visível no digital",
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
    title: "Ravyt Digital | Sua excelência, visível no digital",
    description: "Estratégia, design, conteúdo e tecnologia para negócios que querem ser percebidos à altura do que entregam.",
    images: [{ url: "/brand/ravyt-logo.png", width: 1920, height: 1080, alt: "Ravyt Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravyt Digital | Sua excelência, visível no digital",
    description: "Estratégia, design, conteúdo e tecnologia para sua excelência ser percebida.",
    images: ["/brand/ravyt-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#2A0669",
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
