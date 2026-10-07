
import {PriceText} from "@/components/i18n/Regional";
import Breadcrumbs from "@/locales/es/components/Breadcrumbs";
import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/locales/es/lib/metadata";
import { BlogFooter, BlogHeader } from "@/locales/es/components/BlogChrome";
import { whatsappUrl } from "@/locales/es/lib/contact";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title:"Creación de sitios web con dominio propio",
  description:"Creación de sitios con dominio propio para empresas y profesionales. Planificación, textos, diseño adaptable y estructura técnica de SEO. Atención en todo el mundo.",
  alternates:{canonical:"/es/criacao-de-sites-online"},
});
const steps=[
  ["01","Comprensión","Conocemos tus servicios, público, objetivo y materiales disponibles."],
  ["02","Estructura y textos","Organizamos las páginas, la navegación y los textos para presentar tu oferta con claridad."],
  ["03","Diseño y construcción","Creamos una experiencia adaptable, con contacto accesible en el móvil y el ordenador."],
  ["04","Revisión y publicación","Revisamos el contenido, los enlaces y el funcionamiento antes de publicar el sitio."],
];
const faqs=[
  ["¿El sitio puede tener mi propio dominio?","Sí. El proyecto puede publicarse en un dominio propio. El dominio y el alojamiento forman parte de la oferta anual Google + Sitio web + SEO; las condiciones específicas se definen en la propuesta."],
  ["¿Ravyt atiende fuera de São Paulo?","Sí. La creación de sitios web se realiza de forma remota para clientes de todo el mundo."],
  ["¿El sitio aparecerá en la primera página de Google?","No existe garantía de posición. Estructuramos títulos, descripciones, contenido, navegación y requisitos técnicos para que los buscadores puedan rastrear y comprender las páginas."],
  ["¿Hacen mantenimiento después de la entrega?","La creación, las actualizaciones y el soporte del sitio forman parte de la oferta anual Google + Sitio web + SEO. La propuesta define el alcance y las responsabilidades."],
];
export default function Page(){
  const schema={"@context":"https://schema.org","@graph":[{"@type":"Service","@id":`${SITE_URL}/criacao-de-sites-online#service`,name:"Creación de sitios web en línea",serviceType:"Creación y mantenimiento de sitios web",url:`${SITE_URL}/criacao-de-sites-online`,description:"Planificación, redacción, diseño y construcción de sitios con dominio propio para profesionales y empresas.",provider:{"@id":`${SITE_URL}/#organization`},areaServed:{"@type":"Country",name:"Brasil"}},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Inicio",item:SITE_URL},{"@type":"ListItem",position:2,name:"Creación de sitios web en línea",item:`${SITE_URL}/criacao-de-sites-online`}]}]};
  return <><BlogHeader current="sites"/><main id="conteudo" tabIndex={-1} className="specialist-page"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <header className="specialist-hero"><div className="shell"><Breadcrumbs structured={false} items={[{name:"Inicio",href:"/es"},{name:"Creación de sitios web en línea",href:"/es/criacao-de-sites-online"}]} /><p className="section-kicker"> Creación de sitios web en línea · Brasil </p><h1> Creación de un sitio web con dominio propio para tu negocio. </h1><p> Planificamos y construimos sitios institucionales adaptables para presentar tus servicios, transmitir confianza y facilitar el contacto. Cada página considera a tu público y cómo busca tu empresa. </p><a className="button button-light" href={whatsappUrl("¡Hola! Quiero hablar sobre la creación de un sitio con dominio propio.")} target="_blank" rel="noopener noreferrer"> HABLAR SOBRE MI SITIO WEB </a></div></header>
    <section className="specialist-section"><div className="shell two-columns"><div><p className="section-kicker"> De la idea a la dirección en línea </p><h2> Un sitio institucional claro, rápido de entender y fácil de usar. </h2><p> Como empresa especializada en creación de sitios, Ravyt organiza la información antes de construir: qué ofreces, a quién, por qué elegir tu trabajo y cómo contactarte. </p><p> La construcción de sitios incluye páginas adaptadas al móvil, enlaces funcionales y una base técnica de SEO. El formato y el número de páginas se definen según cada proyecto. <a href="/es/quanto-custa-criar-um-site"> Descubre qué incluye el presupuesto de un sitio web → </a></p></div><div className="check-list"><p> Planificación de la estructura y la navegación </p><p> Textos para presentar servicios y orientar el contacto </p><p> Diseño adaptable para móvil y ordenador </p><p> Configuración para la publicación con dominio propio </p><p> Títulos, descripciones y estructura técnica de SEO </p><p> Revisión de enlaces, contenido y funcionamiento </p></div></div></section>
    <section className="process-section"><div className="shell"><p className="section-kicker"> Cómo creamos </p><h2> Un proceso desde el briefing hasta la publicación. </h2><div className="process-grid">{<PriceText>{steps.map(([n,t,d])=><article key={n}><span>{<PriceText>{n}</PriceText>}</span><h3>{<PriceText>{t}</PriceText>}</h3><p>{<PriceText>{d}</PriceText>}</p></article>)}</PriceText>}</div></div></section>
    <section className="difference-section"><div className="shell two-columns"><div><p className="section-kicker"> Después de la entrega </p><h2> Tu sitio debe seguir siendo útil. </h2></div><div><p><PriceText> La información cambia, los servicios evolucionan y los enlaces deben seguir funcionando. La creación y el mantenimiento del sitio forman parte de la oferta Google + Sitio web + SEO en el plan único anual de [[annual]] ([[monthly]]/mes equivalente), con implementación incluida y pago por Pix, tarjeta o boleto. El alcance se define en la propuesta. </PriceText></p><p> Antes de definir las páginas, lee <Link href="/es/blog/site-institucional-paginas-essenciais">  lo que tu sitio institucional necesita explicar → </Link></p></div></div></section>
    <section className="faq-section"><div className="shell"><p className="section-kicker"> Preguntas frecuentes </p><h2> Antes de crear tu sitio web </h2><div className="faq-list">{<PriceText>{faqs.map(([q,a])=><details key={q}><summary>{<PriceText>{q}</PriceText>}</summary><p>{<PriceText>{a}</PriceText>}</p></details>)}</PriceText>}</div></div></section>
    <section className="final-specialist-cta"><div className="shell"><h2> ¿Planificamos tu sitio web? </h2><p> Cuéntanos qué hace tu empresa y qué páginas necesita crear. Atendemos en todo el mundo. </p><a className="button button-light" href={whatsappUrl("¡Hola! Quiero hablar sobre la creación de un sitio con dominio propio.")} target="_blank" rel="noopener noreferrer"> HABLAR POR WHATSAPP </a></div></section>
  </main><BlogFooter/></>;
}
