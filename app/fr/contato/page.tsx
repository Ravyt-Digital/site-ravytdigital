import { pageMetadata } from "@/locales/fr/lib/metadata";
import type { Metadata } from "next";
import { BlogFooter, BlogHeader } from "@/locales/fr/components/BlogChrome";
import ContactForm from "@/locales/fr/components/ContactForm";
import ScrollReveal from "@/locales/fr/components/ScrollReveal";

export const metadata: Metadata = pageMetadata({ title:"Contact", description:"Parlez-nous de votre projet Google, SEO ou de création de site. Envoyez votre message à Ravyt Digital via le formulaire de contact.", alternates:{canonical:"/fr/contato"} });

export default function Page(){ return <><BlogHeader current="contact"/><main id="conteudo" tabIndex={-1} className="rv rv-contact"><ScrollReveal/><section className="rv-page-hero rv-contact-hero"><div className="shell"><p className="rv-label"> Contact </p><h1> Parlons <em>  de votre projet </em></h1><p className="rv-lead"> Dites-nous ce dont vous avez besoin. Notre équipe vous contactera pour comprendre votre projet et vous indiquer la meilleure voie à suivre. </p><a className="rv-button" href="#formulario"> Parler de mon projet <span aria-hidden="true">↓</span></a></div></section><section className="rv-section rv-contact-section" id="formulario"><div className="shell rv-contact-grid"><div className="rv-contact-copy"><p className="rv-label"> Votre message </p><h2> Dites-nous ce que vous <em>  avez en tête. </em></h2><p className="rv-intro"> Sélectionnez les services qui vous intéressent et partagez les détails du projet. Nous vous répondrons via les coordonnées indiquées. </p></div><ContactForm/></div></section></main><BlogFooter/></>; }
