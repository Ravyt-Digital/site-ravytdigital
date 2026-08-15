import type { ReactNode } from "react";
import CookieConsent from "@/components/CookieConsent";
import { BlogFooter, BlogHeader } from "@/components/BlogChrome";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <BlogHeader current="insights" />
      {children}
      <BlogFooter />
      <CookieConsent />
    </>
  );
}
