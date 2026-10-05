
import {PriceText} from "@/components/i18n/Regional";
import Breadcrumbs from "@/locales/es/components/Breadcrumbs";
import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/locales/es/lib/metadata";
import { BlogFooter, BlogHeader } from "@/locales/es/components/BlogChrome";
import { whatsappUrl } from "@/locales/es/lib/contact";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title:"¿Cuánto cuesta crear un sitio web? Entiende el presupuesto",
  description:"Google + Sitio web + SEO: plan único anual de R$ 597,00, pagado por Pix, tarjeta o boleto, con implementación incluida, sitio profesional, dominio, alojamiento, actualizaciones y soporte.",
  alternates:{canonical:"/es/quanto-custa-criar-um-site"},
});

const factors=[
  ["Estructura","Una página única y un sitio institucional con varias páginas requieren distintas cantidades de planificación, textos, diseño y revisión."],
  ["Contenido","Los textos, imágenes y materiales ya disponibles modifican el trabajo necesario. La propuesta debe indicar quién aporta y revisa cada elemento."],
  ["Funciones","Los formularios, integraciones, catálogos y otras funciones deben detallarse antes del presupuesto. Una tienda en línea tiene su propio alcance."],
  ["Costes recurrentes","El registro y la renovación del dominio, el alojamiento, las herramientas de terceros y el mantenimiento deben desglosarse. Debe quedar claro qué es mensual o anual."],
];

export default function Page(){
  const schema={"@context":"https://schema.org","@type":"WebPage",name:"¿Cuánto cuesta crear un sitio web?",url:`${SITE_URL}/quanto-custa-criar-um-site`,about:{"@id":`${SITE_URL}/criacao-de-sites-online#service`},publisher:{"@id":`${SITE_URL}/#organization`}};
  return <><BlogHeader current="sites"/><main id="conteudo" tabIndex={-1} className="specialist-page"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <header className="specialist-hero"><div className="shell"><Breadcrumbs items={[{name:"Inicio",href:"/es"},{name:"Creación de sitios web en línea",href:"/es/criacao-de-sites-online"},{name:"Presupuesto de creación de sitios web",href:"/es/quanto-custa-criar-um-site"}]} /><p className="section-kicker"> Presupuesto de creación de un sitio web </p><h1> ¿Cuánto cuesta crear un sitio web profesional? </h1><p><PriceText> La oferta Google + Sitio web + SEO tiene un plan único anual de R$ 597,00, pagado por Pix, tarjeta o boleto, con implementación incluida y una tarjeta NFC de reseñas de Google como bono. El sitio profesional incluye dominio, alojamiento, actualizaciones y soporte, con alcance detallado en la propuesta. </PriceText></p><a className="button button-light" href={whatsappUrl("¡Hola! Quiero pedir un presupuesto para crear un sitio web. Mi negocio es:")} target="_blank" rel="noopener noreferrer"> PEDIR PRESUPUESTO DEL SITIO WEB </a></div></header>
    <section className="specialist-section"><div className="shell two-columns"><div><p className="section-kicker"> Qué modifica el precio </p><h2> La misma palabra «sitio web» puede describir proyectos muy diferentes. </h2><p> Un sitio de una página para presentar un servicio tiene un alcance diferente al de un sitio institucional con varias áreas, contenidos propios y funciones adicionales. Por eso, un precio aislado no indica si dos propuestas entregan lo mismo. </p><p><PriceText> El plan único anual cuesta R$ 597,00, pagado por Pix, tarjeta o boleto. Incluye implementación, mantenimiento durante 12 meses y una tarjeta NFC de reseñas de Google como bono. La planificación de las páginas y las responsabilidades se detallan en la propuesta. </PriceText><Link href="/es/criacao-de-sites-online"> Conoce el servicio de creación de sitios con dominio propio → </Link></p></div><div className="check-list">{<PriceText>{factors.map(([title,text])=><p key={title}><strong>{<PriceText>{title}</PriceText>}.</strong> {<PriceText>{text}</PriceText>}</p>)}</PriceText>}</div></div></section>
    <section className="process-section"><div className="shell"><p className="section-kicker">Antes de contratar</p><h2> Qué pedir en un presupuesto de sitio web. </h2><div className="process-grid"><article><span>01</span><h3>Entregas</h3><p> Número de páginas, textos, diseño para móvil y ordenador, revisión y publicación. </p></article><article><span>02</span><h3> Dominio y alojamiento </h3><p> Quién registra, quién paga la renovación y quién administra los accesos después de la entrega. </p></article><article><span>03</span><h3> Mantenimiento </h3><p> Qué se actualizará, durante cuánto tiempo y qué servicios se cobran aparte. </p></article><article><span>04</span><h3> Plazos y aprobación </h3><p> Etapas del proyecto, materiales necesarios del cliente y número de rondas de revisión. </p></article></div></div></section>
    <section className="faq-section"><div className="shell"><p className="section-kicker"> Preguntas frecuentes </p><h2> Entiende la propuesta </h2><div className="faq-list"><details><summary> ¿El dominio propio está incluido en el precio? </summary><p> El dominio y el alojamiento están incluidos en el plan anual. La propuesta especifica titularidad, accesos y condiciones del dominio. </p></details><details><summary> ¿El presupuesto incluye mantenimiento? </summary><p> Sí. La creación, las actualizaciones y el soporte están incluidos en la oferta anual Google + Sitio web + SEO. La propuesta especifica el alcance de los cambios. </p></details><details><summary> ¿Un sitio más caro garantiza la primera posición en Google? </summary><p> No. La estructura técnica y el contenido pueden ayudar a los buscadores a entender las páginas, pero nadie puede garantizar una posición específica. </p></details></div></div></section>
    <section className="final-specialist-cta"><div className="shell"><h2> Google + Sitio web + SEO: elige tu plan. </h2><p> Dinos qué servicios ofreces, si ya tienes dominio y qué páginas crees necesitar. Ravyt atiende en todo Brasil. </p><a className="button button-light" href={whatsappUrl("¡Hola! Quiero pedir un presupuesto para crear un sitio web. Mi negocio es:")} target="_blank" rel="noopener noreferrer"> SOLICITAR PRESUPUESTO </a></div></section>
  </main><BlogFooter/></>;
}
