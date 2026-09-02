"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { whatsappUrl } from "@/lib/contact";

export default function MobileMenu({ fromSubpage = false }: { fromSubpage?: boolean }) {
  const [open, setOpen] = useState(false);
  const section = (hash: string) => fromSubpage ? `/${hash}` : hash;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.classList.toggle("menu-open", open);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <div className="mobile-menu">
      <button className="menu-trigger" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
        <span /><span /><span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
      </button>
      <div className={`menu-panel${open ? " is-open" : ""}`} id="mobile-navigation" aria-hidden={!open}>
        <nav aria-label="Navegação para celular">
          <a href={section("#servico")} onClick={() => setOpen(false)}>Serviço <span>01</span></a>
          <a href={section("#sobre")} onClick={() => setOpen(false)}>A Ravyt <span>02</span></a>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog <span>03</span></Link>
          <a href="/contato" onClick={() => setOpen(false)}>Contato <span>04</span></a>
          <a className="menu-contact" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-track="primary_cta_click" aria-label="Conversar com Ytala pelo WhatsApp (abre em nova aba)" onClick={() => setOpen(false)}>CONVERSAR COM YTALA ↗</a>
        </nav>
      </div>
    </div>
  );
}
