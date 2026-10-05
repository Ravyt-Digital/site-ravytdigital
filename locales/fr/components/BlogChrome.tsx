import {LanguageSwitcher} from "@/components/i18n/Regional";
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import MobileMenu from "@/locales/fr/components/MobileMenu";
import { whatsappUrl } from "@/locales/fr/lib/contact";

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
        <a className="brand-link" href="/fr" aria-label="Ravyt Digital — page d’accueil"><BlogBrand /></a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          <a href="/fr/seo">SEO</a><a href="/fr/google-meu-negocio"> Présence locale </a><a href="/fr/sites" aria-current={current === "sites" ? "page" : undefined}>Sites</a><a href="/fr/cases"> Réalisations </a><a href="/fr/sobre"> À propos de Ravyt </a><a href="/fr/blog" aria-current={current === "insights" ? "page" : undefined}>Blog</a><a href="/fr/contato" aria-current={current === "contact" ? "page" : undefined}> Contact </a>
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
        <a href="/fr" aria-label="Ravyt Digital — page d’accueil"><BlogBrand dark /></a>
        <p> SEO, présence locale et sites stratégiques pour que votre entreprise soit trouvée et choisie. </p>
        <nav aria-label="Liens du pied de page">
          <a href="/fr/recursos/checklist-presenca-google">Checklist Google</a>
          <a href="/fr/seo">SEO</a><a href="/fr/google-meu-negocio"> Présence locale </a>
          <a href="/fr/sites"> Sites stratégiques </a><a href="/fr/cases"> Réalisations </a><a href="/fr/diagnostico"> Diagnostic </a>
          <a href="/fr/sobre"> À propos de Ravyt </a>
          <a href="/fr/blog">Blog</a>
          <a href="/fr/contato"> Contact </a>

          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" aria-label="Échanger sur WhatsApp (s’ouvre dans un nouvel onglet)">WhatsApp</a>
          <a href="mailto:ola@ravytdigital.com" data-track="email_click">ola@ravytdigital.com</a>
        </nav>
      </div>
      <div className="shell business-details"><p>YTALA RAVENA DE SOUSA SILVA CABRAL CONTEUDO DIGITAL LTDA - ME · CNPJ 26.114.696/0001-70</p><address>Avenida Paulista, 1636, Conj. 4 PAVM, Bela Vista, São Paulo - SP · CEP 01310-200</address><p> Services à distance dans le monde entier · <a href="tel:+5588996956479">(88) 99695-6479</a></p></div><div className="shell footer-bottom">
        <span>© 2026 Ravyt Digital</span>
        <p> Communication numérique et création de sites. </p>
        <div><a href="/fr/politica-de-privacidade"> Politique de confidentialité </a><a href="/fr/politica-de-cookies"> Politique relative aux cookies </a><a href="/fr/termos-de-uso"> Conditions d’utilisation </a></div>
      </div>
      <p className="shell site-credit"> Site développé par <a href="https://ravytdigital.com">Ravyt Digital</a></p>
    </footer>
  );
}
