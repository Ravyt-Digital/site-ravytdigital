import { pageMetadata } from "@/locales/es/lib/metadata";
import type { Metadata } from "next";
import { BlogFooter, BlogHeader } from "@/locales/es/components/BlogChrome";
import ContactForm from "@/locales/es/components/ContactForm";
import ScrollReveal from "@/locales/es/components/ScrollReveal";

export const metadata: Metadata = pageMetadata({ title:"Contacto", description:"Cuéntanos sobre tu proyecto de Google, SEO o creación de sitios web. Envía tu mensaje a Ravyt Digital mediante el formulario de contacto.", alternates:{canonical:"/es/contato"} });

export default function Page(){ return <><BlogHeader current="contact"/><main id="conteudo" tabIndex={-1} className="rv rv-contact"><ScrollReveal/><section className="rv-page-hero rv-contact-hero"><div className="shell"><p className="rv-label"> Contacto </p><h1> Hablemos <em>  de tu proyecto </em></h1><p className="rv-lead"> Cuéntanos un poco sobre lo que necesitas. Nuestro equipo se pondrá en contacto para entender tu proyecto e indicar el mejor camino. </p><a className="rv-button" href="#formulario"> Hablar sobre mi proyecto <span aria-hidden="true">↓</span></a></div></section><section className="rv-section rv-contact-section" id="formulario"><div className="shell rv-contact-grid"><div className="rv-contact-copy"><p className="rv-label"> Tu mensaje </p><h2> Cuéntanos qué <em>  tienes en mente. </em></h2><p className="rv-intro"> Selecciona los servicios de tu interés y comparte los detalles del proyecto. Responderemos al contacto indicado. </p></div><ContactForm/></div></section></main><BlogFooter/></>; }
