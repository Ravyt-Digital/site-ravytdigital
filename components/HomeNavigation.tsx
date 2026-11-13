"use client";

import { useState } from 'react';
import { contactHref } from '@/lib/home-content';

const links = [
  ['Sites', '/site-profissional'],
  ['Planos', '/#planos'],
  ['Projetos', '/#projetos'],
  ['Google Meu Negócio', '/google-meu-negocio'],
  ['Contato', '/#contato'],
];

export default function HomeNavigation() {
  const [open, setOpen] = useState(false);
  return <header className="rv-header">
    <div className="shell rv-nav">
      <a href="/" aria-label="Ravyt Digital — início">
        <img src="/brand/ravyt-logo-high-contrast.webp" alt="Ravyt Digital" width={900} height={300} />
      </a>
      <button className="rv-menu-button" type="button" aria-expanded={open} aria-controls="home-menu" onClick={() => setOpen(!open)}>
        {open ? 'Fechar ×' : 'Menu ☰'}
      </button>
      <nav id="home-menu" className={open ? 'is-open' : ''} aria-label="Menu principal">
        {links.map(([text, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{text}</a>)}
        <a className="rv-nav-cta" href={contactHref} data-contact-cta onClick={() => setOpen(false)}>WhatsApp <span aria-hidden="true">↗</span></a>
      </nav>
    </div>
  </header>;
}
