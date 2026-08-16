/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";

function BlogBrand({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`brand-lockup${dark ? " brand-lockup-dark" : ""}`}>
      <Image src="/brand/ravyt-logo-2026.png" alt="Ravyt Digital" width={875} height={235} priority unoptimized />
    </span>
  );
}

export function BlogHeader({ current }: { current?: "services" | "insights" | "contact" }) {
  return (
    <header className="blog-site-header">
      <div className="shell blog-nav">
        <a className="brand-link" href="/" aria-label="Ravyt Digital — página inicial"><BlogBrand /></a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="/servicos" aria-current={current === "services" ? "page" : undefined}>Serviços</a>
          <a href="/#sobre">A Ravyt</a>
          <a href="/#projetos">Cases</a>
          <a className={current === "insights" ? "is-current" : undefined} href="/blog" aria-current={current === "insights" ? "page" : undefined}>Insights</a>
          <a className={current === "contact" ? "is-current" : undefined} href="/contato" aria-current={current === "contact" ? "page" : undefined}>Contato</a>
        </nav>
        <a className="header-cta" href="/contato">Vamos conversar <span aria-hidden="true">↗</span></a>
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
          <a href="/servicos">Serviços</a>
          <a href="/#sobre">A Ravyt</a>
          <a href="/#projetos">Cases</a>
          <a href="/blog">Insights</a>
          <a href="/contato">Contato</a>
        </nav>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Ravyt Digital</span>
        <p>Criado com muito carinho por Ravyt Digital.</p>
        <div><a href="/politica-editorial">Política Editorial</a><a href="/politica-de-privacidade">Privacidade</a><a href="/termos-de-uso">Termos</a></div>
      </div>
    </footer>
  );
}
