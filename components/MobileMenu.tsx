"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { whatsappUrl } from "@/lib/contact";

export default function MobileMenu({ fromSubpage = false }: { fromSubpage?: boolean }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const section = (hash: string) => fromSubpage ? `/${hash}` : hash;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (!open) return;
      const controls = root.current?.querySelectorAll<HTMLElement>("button, a[href]");
      if (!controls?.length) return;
      if (event.key === "Escape") { setOpen(false); controls[0].focus(); }
      if (event.key === "Tab") {
        const first=controls[0],last=controls[controls.length-1];
        if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
        else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.toggle("menu-open", open);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <div className="mobile-menu" ref={root}>
      <button className="menu-trigger" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
        <span /><span /><span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
      </button>
      <div className={`menu-panel${open ? " is-open" : ""}`} id="mobile-navigation" aria-hidden={!open}>
        <nav aria-label="Navegação para celular">
          <Link href="/gestao-de-midias-sociais" onClick={() => setOpen(false)}>Mídias sociais <span>01</span></Link>
          <Link href="/criacao-de-sites-online" onClick={() => setOpen(false)}>Criação de sites <span>02</span></Link>
          <a href={section("#sobre")} onClick={() => setOpen(false)}>A Ravyt <span>03</span></a>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog <span>04</span></Link>
          <a href="/contato" onClick={() => setOpen(false)}>Contato <span>05</span></a>
          <a className="menu-contact" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-track="primary_cta_click" aria-label="Conversar com Ytala pelo WhatsApp (abre em nova aba)" onClick={() => setOpen(false)}>CONVERSAR COM YTALA ↗</a>
        </nav>
      </div>
    </div>
  );
}
