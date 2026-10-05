
import {PriceText} from "@/components/i18n/Regional";
import type { ReactNode } from "react";
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";

export default function LegalPage({ eyebrow, title, children, updated = "13 de septiembre de 2026" }: { eyebrow: string; title: string; children: ReactNode; updated?: string }) {
  return (
    <main id="conteudo" tabIndex={-1} className="legal-page">
      <header className="legal-header shell">
        <a className="legal-brand" href="/es" aria-label="Ravyt Digital — página de inicio"><Image src="/brand/ravyt-logo-2026.webp" alt="Ravyt Digital" width={875} height={235} priority unoptimized /></a>
        <a className="legal-back" href="/es"> ← Volver al sitio </a>
      </header>
      <section className="legal-hero">
        <div className="shell"><p>{<PriceText>{eyebrow}</PriceText>}</p><h1>{<PriceText>{title}</PriceText>}</h1><span> Última actualización: {<PriceText>{updated}</PriceText>}</span></div>
      </section>
      <article className="legal-content shell">{<PriceText>{children}</PriceText>}</article>
      <footer className="legal-footer shell"><span>© 2026 Ravyt Digital</span><p className="site-credit"> Sitio desarrollado por <a href="https://ravytdigital.com">Ravyt Digital</a></p><div><a href="/es/politica-de-privacidade"> Política de privacidad </a><a href="/es/politica-de-cookies"> Política de cookies </a><a href="/es/termos-de-uso"> Términos de uso </a></div></footer>
    </main>
  );
}
