"use client";


import {PriceText} from "@/components/i18n/Regional";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";


export default function MobileMenu(_props: { fromSubpage?: boolean }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);


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
        <span /><span /><span className="sr-only">{<PriceText>{open ? "Fechar menu" : "Abrir menu"}</PriceText>}</span>
      </button>
      <div className={`menu-panel${open ? " is-open" : ""}`} id="mobile-navigation" aria-hidden={!open}>
        <nav aria-label="Navegação para celular">
          {<PriceText>{[['/seo','SEO'],['/google-meu-negocio','Presença Local'],['/sites','Sites Estratégicos'],['/cases','Cases'],['/sobre','A Ravyt'],['/blog','Blog'],['/contato','Contato']].map(([href,label])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{<PriceText>{label}</PriceText>}</Link>)}</PriceText>}
          <Link className="menu-contact" href="/diagnostico" data-track="primary_cta_click" onClick={()=>setOpen(false)}>Analisar minha presença digital ↗</Link>
        </nav>
      </div>
    </div>
  );
}
