import FooterSocialLinks from '@/components/FooterSocialLinks';
import {brandCopy} from '@/lib/brand-copy';
import {LanguageSwitcher,PriceText} from "@/components/i18n/Regional";
/* eslint-disable @next/next/no-html-link-for-pages */
import MobileMenu from "@/locales/es/components/MobileMenu";
import { whatsappUrl } from "@/locales/es/lib/contact";

function BlogBrand({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`brand-lockup${dark ? " brand-lockup-dark" : ""}`}>
      <img src={dark ? "/brand/ravyt-footer-428.webp" : "/brand/ravyt-logo-white-356.webp"} alt="Ravyt Digital" width={438} height={146} loading={dark ? "lazy" : "eager"} decoding="async" />
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
        <MobileMenu fromSubpage />
      </div>
    </header>
  );
}

export function BlogFooter() {
  return (
    <footer className="footer blog-footer">
      <div className="shell footer-top">
        <div className="footer-brand">
          <a href="/es" aria-label="Ravyt Digital — página de inicio"><BlogBrand dark /></a>
          <FooterSocialLinks lang="es"/>
        </div>
        <p>{brandCopy['es'].tagline}</p>
        <nav aria-label="Enlaces del pie de página">
          <a href="/es/recursos/checklist-presenca-google">Checklist Google</a>
          <a href="/es/seo">SEO</a><a href="/es/google-meu-negocio"> Presencia local </a>
          <a href="/es/sites"> Sitios estratégicos </a><a href="/es/cases"> Proyectos </a><a href="/es/diagnostico">Diagnóstico</a>
          <a href="/es/sobre"> Sobre Ravyt </a>
          <a href="/es/blog">Blog</a>
          <a href="/es/contato"> Contacto </a>

          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" aria-label="Hablar por WhatsApp (se abre en una pestaña nueva)">WhatsApp</a>
          <a href="mailto:ola@ravytdigital.com" data-track="email_click">ola@ravytdigital.com</a>
        </nav>
      </div>
      <div className="shell business-details"><p>YTALA RAVENA DE SOUSA SILVA CABRAL CONTEUDO DIGITAL LTDA - ME · CNPJ 26.114.696/0001-70</p><address>Avenida Paulista, 1636, Conj. 4 PAVM, Bela Vista, São Paulo - SP · CEP 01310-200</address><p><PriceText>{brandCopy['es'].remote}</PriceText> · <a href="tel:+5588996956479">(88) 99695-6479</a></p></div><div className="shell rv-footer-preferences"><LanguageSwitcher/></div><div className="shell footer-bottom">
        <span>© 2026 Ravyt Digital</span>
        <p> Comunicación digital y creación de sitios web. </p>
        <div><a href="/es/politica-de-privacidade"> Política de privacidad </a><a href="/es/politica-de-cookies"> Política de cookies </a><a href="/es/termos-de-uso"> Términos de uso </a></div>
      </div>
      <p className="shell site-credit"> Sitio desarrollado por <a href="https://ravytdigital.com">Ravyt Digital</a></p>
    </footer>
  );
}
