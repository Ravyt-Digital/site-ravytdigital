/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import { whatsappUrl } from "@/lib/contact";

function BlogBrand({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`brand-lockup${dark ? " brand-lockup-dark" : ""}`}>
      <Image src="/brand/ravyt-logo-2026.webp" alt="Ravyt Digital" width={875} height={235} priority unoptimized />
    </span>
  );
}

export function BlogHeader({ current }: { current?: "services" | "insights" | "contact" }) {
  return (
    <header className="blog-site-header">
      <div className="shell blog-nav">
        <a className="brand-link" href="/" aria-label="Ravyt Digital — página inicial"><BlogBrand /></a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="/#servico" aria-current={current === "services" ? "page" : undefined}>Serviço</a>
          <a href="/#sobre">A Ravyt</a>
          <a className={current === "contact" ? "is-current" : undefined} href="/contato" aria-current={current === "contact" ? "page" : undefined}>Contato</a>
        </nav>
        <a className="header-cta" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-track="primary_cta_click" aria-label="Conversar com Ytala pelo WhatsApp (abre em nova aba)">CONVERSAR COM YTALA <span aria-hidden="true">↗</span></a>
        <MobileMenu fromSubpage />
      </div>
    </header>
  );
}

export function BlogFooter() {
  return (
    <footer className="footer blog-footer">
      <div className="shell footer-top">
        <a href="/" aria-label="Ravyt Digital — página inicial"><BlogBrand dark /></a>
        <p>Social Media para Psicólogos Parentais em todo o Brasil.</p>
        <nav aria-label="Links do rodapé">
          <a href="/#servico">Serviço</a>
          <a href="/#sobre">A Ravyt</a>
          <a href="/contato">Contato</a>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" aria-label="Conversar pelo WhatsApp (abre em nova aba)">WhatsApp</a>
          <a href="mailto:ola@ravytdigital.com" data-track="email_click">ola@ravytdigital.com</a>
        </nav>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Ravyt Digital</span>
        <p>Criado com muito carinho por Ravyt Digital.</p>
        <div><a href="/politica-de-privacidade">Política de Privacidade</a><a href="/politica-de-cookies">Política de Cookies</a><a href="/termos-de-uso">Termos de Uso</a></div>
      </div>
    </footer>
  );
}
