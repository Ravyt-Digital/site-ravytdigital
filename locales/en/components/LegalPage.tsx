
import {PriceText} from "@/components/i18n/Regional";
import type { ReactNode } from "react";
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";

export default function LegalPage({ eyebrow, title, children, updated = "September 13, 2026" }: { eyebrow: string; title: string; children: ReactNode; updated?: string }) {
  return (
    <main id="conteudo" tabIndex={-1} className="legal-page">
      <header className="legal-header shell">
        <a className="legal-brand" href="/en" aria-label="Ravyt Digital — home page"><Image src="/brand/ravyt-logo-2026.webp" alt="Ravyt Digital" width={875} height={235} priority unoptimized /></a>
        <a className="legal-back" href="/en"> ← Back to the website </a>
      </header>
      <section className="legal-hero">
        <div className="shell"><p>{<PriceText>{eyebrow}</PriceText>}</p><h1>{<PriceText>{title}</PriceText>}</h1><span> Last updated: {<PriceText>{updated}</PriceText>}</span></div>
      </section>
      <article className="legal-content shell">{<PriceText>{children}</PriceText>}</article>
      <footer className="legal-footer shell"><span>© 2026 Ravyt Digital</span><p className="site-credit"> Website Developed By <a href="https://ravytdigital.com">Ravyt Digital</a></p><div><a href="/en/politica-de-privacidade"> Privacy Policy </a><a href="/en/politica-de-cookies"> Cookie Policy </a><a href="/en/termos-de-uso"> Terms of Use </a></div></footer>
    </main>
  );
}
