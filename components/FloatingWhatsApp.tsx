"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const contacts = [
  {
    name: "Márcio Cabral",
    role: "Sites, aplicativos e tecnologia",
    image: "/team/marcio-cabral.webp",
    href: "https://wa.me/5588996777332?text=Ol%C3%A1%2C%20M%C3%A1rcio!%20Vim%20pelo%20site%20da%20Ravyt%20Digital%20e%20gostaria%20de%20conversar%20sobre%20meu%20projeto.",
  },
  {
    name: "Ytala Cabral",
    role: "Estratégia e Social Media",
    image: "/team/ytala-cabral.webp",
    href: "https://wa.me/5588996956479?text=Ol%C3%A1%2C%20Ytala!%20Vim%20pelo%20site%20da%20Ravyt%20Digital%20e%20gostaria%20de%20conversar%20sobre%20meu%20projeto.",
  },
];

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  return (
    <div className={`whatsapp-contact${open ? " is-open" : ""}`} ref={containerRef}>
      <div className="whatsapp-invite" aria-hidden={open}>
        <strong>Vamos conversar?</strong>
        <span>Escolha com quem falar</span>
      </div>

      <div className="whatsapp-panel" id="whatsapp-team" aria-hidden={!open}>
        <div className="whatsapp-panel-head">
          <div>
            <span>Ravyt Digital</span>
            <strong>Com quem você quer conversar?</strong>
          </div>
          <button type="button" onClick={() => setOpen(false)} aria-label="Fechar opções de contato">×</button>
        </div>
        <div className="whatsapp-people">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              className="whatsapp-person"
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Conversar com ${contact.name} pelo WhatsApp`}
            >
              <Image src={contact.image} alt="" width={58} height={58} unoptimized />
              <span><strong>{contact.name}</strong><small>{contact.role}</small></span>
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9" /></svg>
            </a>
          ))}
        </div>
        <p>Normalmente respondemos em horário comercial.</p>
      </div>

      <button
        className="whatsapp-trigger"
        type="button"
        aria-expanded={open}
        aria-controls="whatsapp-team"
        aria-label={open ? "Fechar contatos da Ravyt" : "Conversar com a Ravyt pelo WhatsApp"}
        onClick={() => setOpen((current) => !current)}
      >
        <Image src="/brand/ravyt-symbol-2026.png" alt="" width={245} height={235} unoptimized />
        <span aria-hidden="true" />
      </button>
    </div>
  );
}
