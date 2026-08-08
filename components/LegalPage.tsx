import type { ReactNode } from "react";
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";

export default function LegalPage({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <main className="legal-page">
      <header className="legal-header shell">
        <a className="legal-brand" href="/" aria-label="Ravyt Digital — página inicial"><Image src="/brand/ravyt-wordmark.png" alt="Ravyt Digital" width={662} height={241} priority unoptimized /></a>
        <a className="legal-back" href="/">← Voltar ao site</a>
      </header>
      <section className="legal-hero">
        <div className="shell"><p>{eyebrow}</p><h1>{title}</h1><span>Última atualização: 5 de agosto de 2026</span></div>
      </section>
      <article className="legal-content shell">{children}</article>
      <footer className="legal-footer shell"><span>© 2026 Ravyt Digital</span><div><a href="/politica-de-privacidade">Política de Privacidade</a><a href="/termos-de-uso">Termos de Uso</a></div></footer>
    </main>
  );
}
