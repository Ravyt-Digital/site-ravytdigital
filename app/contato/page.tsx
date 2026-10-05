import PageGuidance from "@/components/i18n/PageGuidance";
import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { BlogFooter, BlogHeader } from "@/components/BlogChrome";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = pageMetadata({ title:"Contato", description:"Conte sobre seu projeto de Google, SEO ou criação de sites. Envie sua mensagem à Ravyt Digital pelo formulário de contato.", alternates:{canonical:"/contato"} });

export default function Page(){ return <><BlogHeader current="contact"/><main id="conteudo" tabIndex={-1} className="rv rv-contact"><ScrollReveal/><section className="rv-page-hero rv-contact-hero"><div className="shell"><p className="rv-label">Contato</p><h1>Vamos conversar <em>sobre seu projeto</em></h1><p className="rv-lead">Conte um pouco sobre o que você precisa. Nossa equipe entra em contato para entender seu projeto e indicar o melhor caminho.</p><a className="rv-button" href="#formulario">Falar sobre meu projeto <span aria-hidden="true">↓</span></a></div></section><section className="rv-section rv-contact-section" id="formulario"><div className="shell rv-contact-grid"><div className="rv-contact-copy"><p className="rv-label">Sua mensagem</p><h2>Conte o que você <em>tem em mente.</em></h2><p className="rv-intro">Selecione os serviços de seu interesse e compartilhe os detalhes do projeto. Vamos responder pelo contato informado.</p></div><ContactForm/></div></section><PageGuidance kind="contact" lang="pt"/></main><BlogFooter/></>; }
