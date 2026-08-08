"use client";

import { useEffect, useState } from "react";

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
          <a href={section("#servicos")} onClick={() => setOpen(false)}>Serviços <span>01</span></a>
          <a href={section("#projetos")} onClick={() => setOpen(false)}>Projetos <span>02</span></a>
          <a href={section("#metodo")} onClick={() => setOpen(false)}>Como fazemos <span>03</span></a>
          <a href={section("#sobre")} onClick={() => setOpen(false)}>A Ravyt <span>04</span></a>
          {/* A plain anchor avoids a Vinext client-proxy issue in the interactive menu. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/blog" onClick={() => setOpen(false)}>Blog <span>05</span></a>
          <a className="menu-contact" href={section("#contato")} onClick={() => setOpen(false)}>Iniciar um projeto ↗</a>
        </nav>
      </div>
    </div>
  );
}
