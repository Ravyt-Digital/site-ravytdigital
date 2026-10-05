import PageGuidance from "@/components/i18n/PageGuidance";
import { pageMetadata } from "@/locales/en/lib/metadata";
import type { Metadata } from "next";
import { BlogFooter, BlogHeader } from "@/locales/en/components/BlogChrome";
import ContactForm from "@/locales/en/components/ContactForm";
import ScrollReveal from "@/locales/en/components/ScrollReveal";

export const metadata: Metadata = pageMetadata({ title:"Contact", description:"Tell us about your Google, SEO or website project. Send Ravyt Digital your message through the contact form.", alternates:{canonical:"/en/contato"} });

export default function Page(){ return <><BlogHeader current="contact"/><main id="conteudo" tabIndex={-1} className="rv rv-contact"><ScrollReveal/><section className="rv-page-hero rv-contact-hero"><div className="shell"><p className="rv-label"> Contact </p><h1> Let’s talk <em>  about your project </em></h1><p className="rv-lead"> Tell us a little about what you need. Our team will contact you to understand your project and suggest the best way forward. </p><a className="rv-button" href="#formulario"> Talk about my project <span aria-hidden="true">↓</span></a></div></section><section className="rv-section rv-contact-section" id="formulario"><div className="shell rv-contact-grid"><div className="rv-contact-copy"><p className="rv-label"> Your message </p><h2> Tell us what you <em>  have in mind. </em></h2><p className="rv-intro"> Select the services you are interested in and share your project details. We will reply using the contact information you provide. </p></div><ContactForm/></div></section><PageGuidance kind="contact" lang="en"/></main><BlogFooter/></>; }
