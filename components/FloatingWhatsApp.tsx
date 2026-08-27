"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  contactWhatsappUrl,
  COPYWRITING_MESSAGE,
  LANDING_PAGE_MESSAGE,
  MARCIO_WHATSAPP_NUMBER,
  YTALA_WHATSAPP_NUMBER,
} from "@/lib/contact";

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div ref={containerRef} className={`whatsapp-contact${open ? " is-open" : ""}`}>
      <div className="whatsapp-invite" aria-hidden="true">
        <strong>Fale com a Ravyt</strong>
        <span>Escolha com quem deseja conversar</span>
      </div>
      <button
        type="button"
        className="whatsapp-trigger"
        aria-expanded={open}
        aria-controls="whatsapp-team-panel"
        aria-label={open ? "Fechar opções de contato pelo WhatsApp" : "Abrir opções de contato pelo WhatsApp"}
        onClick={() => setOpen((current) => !current)}
      >
        <Image src="/brand/ravyt-symbol-2026.webp" alt="" width={245} height={235} unoptimized />
        <span aria-hidden="true" />
        <strong className="whatsapp-mobile-label">Vamos conversar sobre seu projeto</strong>
      </button>
      <section id="whatsapp-team-panel" className="whatsapp-panel" aria-hidden={!open} aria-label="Contatos da Ravyt Digital">
        <header className="whatsapp-panel-head">
          <div><span>Atendimento direto</span><strong>Com quem você deseja conversar?</strong></div>
          <button type="button" aria-label="Fechar opções de contato" onClick={() => setOpen(false)}>×</button>
        </header>
        <div className="whatsapp-people">
          <a className="whatsapp-person" href={contactWhatsappUrl(MARCIO_WHATSAPP_NUMBER, LANDING_PAGE_MESSAGE)} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" aria-label="Conversar com Márcio Cabral sobre criação de Landing Page pelo WhatsApp (abre em nova aba)">
            <Image src="/team/marcio-cabral.webp" alt="Márcio Cabral" width={120} height={120} unoptimized />
            <span><strong>Márcio Cabral</strong><small>Criação de Landing Page<br />WhatsApp: (88) 99677-7332</small></span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <a className="whatsapp-person" href={contactWhatsappUrl(YTALA_WHATSAPP_NUMBER, COPYWRITING_MESSAGE)} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" aria-label="Conversar com Ytala Cabral sobre Copywriting pelo WhatsApp (abre em nova aba)">
            <Image src="/team/ytala-cabral.webp" alt="Ytala Cabral" width={120} height={120} unoptimized />
            <span><strong>Ytala Cabral</strong><small>Copywriting<br />WhatsApp: (88) 99695-6479</small></span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
        <p>Atendimento para produtores digitais de Psicologia Parental</p>
      </section>
    </div>
  );
}
