/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import { whatsappUrl } from "@/lib/contact";

function BlogBrand({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`brand-lockup${dark ? " brand-lockup-dark" : ""}`}>
      <Image src="/brand/ravyt-logo-header.webp" alt="Ravyt Digital" width={438} height={118} priority unoptimized />
    </span>
  );
}

export function BlogHeader({ current }: { current?: "services" | "social" | "sites" | "insights" | "contact" }) {
  return (
    <header className="blog-site-header">
      <div className="shell blog-nav">
        <a className="brand-link" href="/" aria-label="Ravyt Digital â€” pÃ¡gina inicial"><BlogBrand /></a>
        <nav className="desktop-nav" aria-label="NavegaÃ§Ã£o principal">
          <a href="/seo">SEO</a><a href="/google-meu-negocio">PresenÃ§a Local</a><a href="/sites" aria-current={current === "sites" ? "page" : undefined}>Sites</a><a href="/cases">Cases</a><a href="/sobre">A Ravyt</a><a href="/blog" aria-current={current === "insights" ? "page" : undefined}>Blog</a>
        </nav>
        <a className="header-cta" href="/diagnostico" data-track="primary_cta_click">Analisar minha presenÃ§a digital <span aria-hidden="true">â†—</span></a>
        <MobileMenu fromSubpage />
      </div>
    </header>
  );
}

export function BlogFooter() {
  return (
    <footer className="footer blog-footer">
      <div className="shell footer-top">
        <a href="/" aria-label="Ravyt Digital â€” pÃ¡gina inicial"><BlogBrand dark /></a>
        <p>SEO, presenÃ§a local e sites estratÃ©gicos para sua empresa ser encontrada e escolhida.</p>
        <nav aria-label="Links do rodapÃ©">
          <a href="/seo">SEO</a><a href="/google-meu-negocio">PresenÃ§a Local</a>
          <a href="/sites">Sites EstratÃ©gicos</a><a href="/cases">Cases</a><a href="/diagnostico">DiagnÃ³stico</a>
          <a href="/sobre">A Ravyt</a>
          <a href="/blog">Blog</a>
          <a href="/contato">Contato</a>
          <a href="https://www.instagram.com/ravytdigital/" target="_blank" rel="noopener noreferrer">Instagram da Ravyt â†—</a>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" aria-label="Conversar pelo WhatsApp (abre em nova aba)">WhatsApp</a>
          <a href="mailto:ola@ravytdigital.com" data-track="email_click">ola@ravytdigital.com</a>
        </nav>
      </div>
      <div className="shell business-details"><p>YTALA RAVENA DE SOUSA SILVA CABRAL CONTEUDO DIGITAL LTDA - ME Â· CNPJ 26.114.696/0001-70</p><address>Avenida Paulista, 1636, Conj. 4 PAVM, Bela Vista, SÃ£o Paulo - SP Â· CEP 01310-200</address><p>Atendimento remoto em todo o Brasil Â· <a href="tel:+5588996956479">(88) 99695-6479</a></p></div><div className="shell footer-bottom">
        <span>Â© 2026 Ravyt Digital</span>
        <p>ComunicaÃ§Ã£o digital e criaÃ§Ã£o de sites.</p>
        <div><a href="/politica-de-privacidade">PolÃ­tica de Privacidade</a><a href="/politica-de-cookies">PolÃ­tica de Cookies</a><a href="/termos-de-uso">Termos de Uso</a></div>
      </div>
      <p className="shell site-credit">Site Desenvolvido Por <a href="https://ravytdigital.com">Ravyt Digital</a></p>
    </footer>
  );
}
