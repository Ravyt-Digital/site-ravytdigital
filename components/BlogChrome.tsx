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

export function BlogHeader({ current }: { current?: "services" | "social" | "sites" | "insights" | "contact" }) {
  return (
    <header className="blog-site-header">
      <div className="shell blog-nav">
        <a className="brand-link" href="/" aria-label="Ravyt Digital — página inicial"><BlogBrand /></a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="/gestao-de-midias-sociais" aria-current={current === "social" ? "page" : undefined}>Mídias sociais</a>
          <a href="/criacao-de-sites-online" aria-current={current === "sites" ? "page" : undefined}>Criação de sites</a>
          <a href="/#sobre">A Ravyt</a>
          <a className={current === "insights" ? "is-current" : undefined} href="/blog" aria-current={current === "insights" ? "page" : undefined}>Blog</a>
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
        <p>Gestão de mídias sociais e criação de sites online em todo o Brasil.</p>
        <nav aria-label="Links do rodapé">
          <a href="/gestao-de-midias-sociais">Mídias sociais</a>
          <a href="/criacao-de-sites-online">Criação de sites</a>
          <a href="/#sobre">A Ravyt</a>
          <a href="/blog">Blog</a>
          <a href="/contato">Contato</a>
          <a href="https://www.instagram.com/ravytdigital/" target="_blank" rel="noopener noreferrer">Instagram da Ravyt ↗</a>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" aria-label="Conversar pelo WhatsApp (abre em nova aba)">WhatsApp</a>
          <a href="mailto:ola@ravytdigital.com" data-track="email_click">ola@ravytdigital.com</a>
        </nav>
      </div>
      <div className="shell business-details"><p>YTALA RAVENA DE SOUSA SILVA CABRAL CONTEUDO DIGITAL LTDA - ME · CNPJ 26.114.696/0001-70</p><address>Avenida Paulista, 1636, Conj. 4 PAVM, Bela Vista, São Paulo - SP · CEP 01310-200</address><p>Atendimento remoto em todo o Brasil · <a href="tel:+5588996956479">(88) 99695-6479</a></p></div><div className="shell footer-bottom">
        <span>© 2026 Ravyt Digital</span>
        <p>Comunicação digital e criação de sites.</p>
        <div><a href="/politica-de-privacidade">Política de Privacidade</a><a href="/politica-de-cookies">Política de Cookies</a><a href="/termos-de-uso">Termos de Uso</a></div>
      </div>
      <p className="shell site-credit">Site Desenvolvido Por <a href="https://ravytdigital.com">Ravyt Digital</a></p>
    </footer>
  );
}
