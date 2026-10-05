
import {PriceText} from "@/components/i18n/Regional";
import type { ReactNode } from "react";
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";

export default function LegalPage({ eyebrow, title, children, updated = "13 septembre 2026" }: { eyebrow: string; title: string; children: ReactNode; updated?: string }) {
  return (
    <main id="conteudo" tabIndex={-1} className="legal-page">
      <header className="legal-header shell">
        <a className="legal-brand" href="/fr" aria-label="Ravyt Digital — page d’accueil"><Image src="/brand/ravyt-logo-2026.webp" alt="Ravyt Digital" width={875} height={235} priority unoptimized /></a>
        <a className="legal-back" href="/fr"> ← Retour au site </a>
      </header>
      <section className="legal-hero">
        <div className="shell"><p>{<PriceText>{eyebrow}</PriceText>}</p><h1>{<PriceText>{title}</PriceText>}</h1><span> Dernière mise à jour : {<PriceText>{updated}</PriceText>}</span></div>
      </section>
      <article className="legal-content shell">{<PriceText>{children}</PriceText>}</article>
      <footer className="legal-footer shell"><span>© 2026 Ravyt Digital</span><p className="site-credit"> Site développé par <a href="https://ravytdigital.com">Ravyt Digital</a></p><div><a href="/fr/politica-de-privacidade"> Politique de confidentialité </a><a href="/fr/politica-de-cookies"> Politique relative aux cookies </a><a href="/fr/termos-de-uso"> Conditions d’utilisation </a></div></footer>
    </main>
  );
}
