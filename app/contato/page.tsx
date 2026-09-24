import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { BlogFooter, BlogHeader } from "@/components/BlogChrome";
import { whatsappUrl } from "@/lib/contact";
export const metadata: Metadata = pageMetadata({ title:"Contato", description:"Converse com a Ravyt Digital sobre gestão de mídias sociais ou criação de sites online. Atendimento em todo o Brasil.", alternates:{canonical:"/contato"} });
export default function Page(){ return <><BlogHeader current="contact"/><main id="conteudo" tabIndex={-1} className="contact-repositioned"><header className="contact-intro"><div className="shell"><p className="section-kicker">Fale com a Ravyt Digital</p><h1>Vamos conversar sobre seu projeto?</h1><p>Precisa organizar suas mídias sociais ou criar um site com domínio próprio? Conte o que você faz e o que espera melhorar. A Ravyt atende em todo o Brasil.</p><div className="hero-actions"><a className="button button-light" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">CONVERSAR PELO WHATSAPP</a><a className="button button-ghost" href="mailto:ola@ravytdigital.com">ola@ravytdigital.com</a></div></div></header></main><BlogFooter/></>; }
