import {BlogHeader,BlogFooter} from '@/locales/en/components/BlogChrome';

import {PriceText} from "@/components/i18n/Regional";
import type { ReactNode } from "react";
/* eslint-disable @next/next/no-html-link-for-pages */

export default function LegalPage({ eyebrow, title, children, updated = "September 13, 2026" }: { eyebrow: string; title: string; children: ReactNode; updated?: string }) {
  return (
    <><BlogHeader/><main id="conteudo" tabIndex={-1} className="legal-page">
      <section className="legal-hero">
        <div className="shell"><p>{<PriceText>{eyebrow}</PriceText>}</p><h1>{<PriceText>{title}</PriceText>}</h1><span> Last updated: {<PriceText>{updated}</PriceText>}</span></div>
      </section>
      <article className="legal-content shell">{<PriceText>{children}</PriceText>}</article>
    </main><BlogFooter/></>
  );
}
