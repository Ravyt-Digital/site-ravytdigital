import {LanguageSwitcher} from "@/components/i18n/Regional";
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import MobileMenu from "@/locales/es/components/MobileMenu";
import { whatsappUrl } from "@/locales/es/lib/contact";

function BlogBrand({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`brand-lockup${dark ? " brand-lockup-dark" : ""}`}>
      <Image src={dark ? "/brand/ravyt-footer-new.webp" : "/brand/ravyt-logo-white-20260927.webp"} alt="Ravyt Digital" width={438} height={146} priority unoptimized />
    </span>
  );
}

export function BlogHeader({ current, transparent = false }: { current?: "services" | "social" | "sites" | "insights" | "contact"; transparent?: boolean }) {
  return (
    <header className={`blog-site-header${transparent ? " is-overlay" : ""}`}>
      <div className="shell blog-nav">
        <a className="brand-link" href="/es" aria-label="Ravyt Digital — página de inicio"><BlogBrand /></a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="/es/seo">SEO</a><a href="/es/google-meu-negocio"> Presencia local </a><a href="/es/sites" aria-current={current === "sites" ? "page" : undefined}> Sitios web </a><a href="/es/cases"> Proyectos </a><a href="/es/sobre"> Sobre Ravyt </a><a href="/es/blog" aria-current={current === "insights" ? "page" : undefined}>Blog</a><a href="/es/contato" aria-current={current === "contact" ? "page" : undefined}> Contacto </a>
        </nav>
        <LanguageSwitcher/><MobileMenu fromSubpage />
      </div>
    </header>
  );
}

export function BlogFooter() {
  return (
    <footer className="footer blog-footer">
      <div className="shell footer-top">
        <a href="/es" aria-label="Ravyt Digital — página de inicio"><BlogBrand dark /></a>
        <p> SEO, presencia local y sitios estratégicos para que tu empresa sea encontrada y elegida. </p>
        <nav aria-label="Enlaces del pie de página">
          <a href="/es/seo">SEO</a><a href="/es/google-meu-negocio"> Presencia local </a>
          <a href="/es/sites"> Sitios estratégicos </a><a href="/es/cases"> Proyectos </a><a href="/es/diagnostico">Diagnóstico</a>
          <a href="/es/sobre"> Sobre Ravyt </a>
          <a href="/es/blog">Blog</a>
          <a href="/es/contato"> Contacto </a>

          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" aria-label="Hablar por WhatsApp (se abre en una pestaña nueva)">WhatsApp</a>
          <a href="mailto:ola@ravytdigital.com" data-track="email_click">ola@ravytdigital.com</a>
        </nav>
      </div>
      <div className="shell business-details"><p>YTALA RAVENA DE SOUSA SILVA CABRAL CONTEUDO DIGITAL LTDA - ME · CNPJ 26.114.696/0001-70</p><address>Avenida Paulista, 1636, Conj. 4 PAVM, Bela Vista, São Paulo - SP · CEP 01310-200</address><p> Atención remota en todo Brasil · <a href="tel:+5588996956479">(88) 99695-6479</a></p></div><div className="shell footer-bottom">
        <span>© 2026 Ravyt Digital</span>
        <p> Comunicación digital y creación de sitios web. </p>
        <div><a href="/es/politica-de-privacidade"> Política de privacidad </a><a href="/es/politica-de-cookies"> Política de cookies </a><a href="/es/termos-de-uso"> Términos de uso </a></div>
      </div>
      <p className="shell site-credit"> Sitio desarrollado por <a href="https://ravytdigital.com">Ravyt Digital</a></p>
    </footer>
  );
}
