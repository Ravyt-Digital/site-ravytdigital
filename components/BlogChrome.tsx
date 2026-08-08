/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";

function BlogBrand({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`brand-lockup${dark ? " brand-lockup-dark" : ""}`}>
      <Image src="/brand/ravyt-wordmark.png" alt="Ravyt Digital" width={662} height={241} priority unoptimized />
    </span>
  );
}

export function BlogHeader() {
  return (
    <header className="blog-site-header">
      <div className="shell blog-nav">
        <a className="brand-link" href="/" aria-label="Ravyt Digital — página inicial"><BlogBrand /></a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="/#servicos">Serviços</a>
          <a href="/#projetos">Projetos</a>
          <a href="/#metodo">Como fazemos</a>
          <a href="/#sobre">A Ravyt</a>
          <a className="is-current" href="/blog">Blog</a>
        </nav>
        <a className="header-cta" href="/#contato">Iniciar um projeto <span aria-hidden="true">↗</span></a>
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
        <p>Estratégia, design, conteúdo e tecnologia<br />para sua excelência ser percebida.</p>
        <nav aria-label="Links do rodapé">
          <a href="/#servicos">Serviços</a>
          <a href="/#projetos">Projetos</a>
          <a href="/#metodo">Como fazemos</a>
          <a href="/#sobre">A Ravyt</a>
          <a href="/blog">Blog</a>
        </nav>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Ravyt Digital</span>
        <p>Criado com muito carinho por Ravyt Digital.</p>
        <div><a href="/politica-de-privacidade">Política de Privacidade</a><a href="/termos-de-uso">Termos de Uso</a></div>
      </div>
    </footer>
  );
}
