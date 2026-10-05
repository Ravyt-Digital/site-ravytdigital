import {LanguageSwitcher} from "@/components/i18n/Regional";
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import MobileMenu from "@/locales/en/components/MobileMenu";
import { whatsappUrl } from "@/locales/en/lib/contact";

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
        <a className="brand-link" href="/en" aria-label="Ravyt Digital — home page"><BlogBrand /></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="/en/seo">SEO</a><a href="/en/google-meu-negocio"> Local Presence </a><a href="/en/sites" aria-current={current === "sites" ? "page" : undefined}> Websites </a><a href="/en/cases"> Work </a><a href="/en/sobre"> About Ravyt </a><a href="/en/blog" aria-current={current === "insights" ? "page" : undefined}>Blog</a><a href="/en/contato" aria-current={current === "contact" ? "page" : undefined}> Contact </a>
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
        <a href="/en" aria-label="Ravyt Digital — home page"><BlogBrand dark /></a>
        <p> SEO, local presence and strategic websites to help your business be found and chosen. </p>
        <nav aria-label="Footer links">
          <a href="/en/recursos/checklist-presenca-google">Google checklist</a>
          <a href="/en/seo">SEO</a><a href="/en/google-meu-negocio"> Local Presence </a>
          <a href="/en/sites"> Strategic Websites </a><a href="/en/cases"> Work </a><a href="/en/diagnostico"> Assessment </a>
          <a href="/en/sobre"> About Ravyt </a>
          <a href="/en/blog">Blog</a>
          <a href="/en/contato"> Contact </a>

          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" aria-label="Talk on WhatsApp (opens in a new tab)">WhatsApp</a>
          <a href="mailto:ola@ravytdigital.com" data-track="email_click">ola@ravytdigital.com</a>
        </nav>
      </div>
      <div className="shell business-details"><p>YTALA RAVENA DE SOUSA SILVA CABRAL CONTEUDO DIGITAL LTDA - ME · CNPJ 26.114.696/0001-70</p><address>Avenida Paulista, 1636, Conj. 4 PAVM, Bela Vista, São Paulo - SP · CEP 01310-200</address><p> Remote service worldwide · <a href="tel:+5588996956479">(88) 99695-6479</a></p></div><div className="shell footer-bottom">
        <span>© 2026 Ravyt Digital</span>
        <p> Digital communication and website creation. </p>
        <div><a href="/en/politica-de-privacidade"> Privacy Policy </a><a href="/en/politica-de-cookies"> Cookie Policy </a><a href="/en/termos-de-uso"> Terms of Use </a></div>
      </div>
      <p className="shell site-credit"> Website Developed By <a href="https://ravytdigital.com">Ravyt Digital</a></p>
    </footer>
  );
}
