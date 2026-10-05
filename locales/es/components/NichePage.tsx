import {ExchangeNote} from "@/components/i18n/Regional";

import {PriceText} from "@/components/i18n/Regional";
import Link from 'next/link';
import { BlogFooter, BlogHeader } from "@/locales/es/components/BlogChrome";
import { DiagnosticCTA } from "@/locales/es/components/Commercial";
import ScrollReveal from "@/locales/es/components/ScrollReveal";

type Niche = {
  label: string;
  heading: string;
  intro: string;
  challenge: string;
  challengeText: string;
  site: string;
  google: string;
  seo: string;
  example: string;
  exampleText: string;
};

export const niches: Record<'engenharia' | 'arquitetura' | 'moveis', Niche> = {
  engenharia: {
    label: "Para empresas de ingeniería",
    heading: "Sitio para empresas de ingeniería, Google y SEO.",
    intro: "Presenta especialidades, proyectos y zonas de atención con claridad a quienes buscan una empresa de ingeniería. Ravyt crea y mantiene el sitio y organiza tu presencia en las búsquedas.",
    challenge: "Antes de pedir una propuesta, el cliente necesita entender tu actividad.",
    challengeText: "Quien busca una empresa de ingeniería quiere identificar los tipos de proyectos atendidos, la experiencia del equipo y cómo iniciar una conversación. Un sitio con páginas claras para cada especialidad ayuda a responder estas preguntas.",
    site: "Estructuramos páginas para especialidades, proyectos, equipo y contacto, con navegación funcional en el móvil. El dominio, el alojamiento, las actualizaciones y el soporte forman parte de la suscripción.",
    google: "Organizamos los datos del Perfil de Empresa en Google, cuando la empresa es elegible, para representar correctamente su ubicación, servicios y modalidad de atención.",
    seo: "Trabajamos títulos, contenido, enlaces internos y aspectos técnicos para que los buscadores puedan comprender las páginas de servicios y proyectos.",
    example: "Una referencia visual para ingeniería",
    exampleText: "Vértice Norte Engenharia, presentado en el portafolio como demostración conceptual, muestra una forma de organizar especialidades y proyectos sin confundir al visitante.",
  },
  arquitetura: {
    label: "Para estudios de arquitectura",
    heading: "Sitio para estudios de arquitectura, Google y SEO.",
    intro: "Tus proyectos necesitan mostrar el trabajo y explicar el proceso de contratación. Ravyt crea un sitio profesional para tu estudio, cuida el mantenimiento y trabaja la estructura para las búsquedas en Google.",
    challenge: "Un portafolio debe ayudar al visitante a tomar una decisión.",
    challengeText: "Las fotos llaman la atención, pero el cliente potencial también busca conocer el tipo de proyecto desarrollado, la zona atendida, las etapas del trabajo y cómo contactar. El contexto y la organización hacen más útil el portafolio.",
    site: "Creamos páginas de proyectos y servicios con imágenes bien presentadas, textos claros y caminos sencillos para contactar. La suscripción incluye dominio, alojamiento, actualizaciones y soporte.",
    google: "Cuando el estudio es elegible para el Perfil de Empresa en Google, cuidamos la coherencia de la información de ubicación, servicios y atención.",
    seo: "Organizamos estructura, títulos, descripciones y enlaces internos para conectar los servicios y proyectos con búsquedas relevantes, sin prometer posiciones específicas.",
    example: "Una referencia visual para arquitectura",
    exampleText: "Nina Valença Arquitetura es una demostración conceptual del portafolio que presenta proyectos con imágenes amplias y una navegación orientada a apreciar el trabajo.",
  },
  moveis: {
    label: "Para empresas de muebles a medida",
    heading: "Sitio para empresas de muebles a medida, Google y SEO.",
    intro: "Muestra ambientes, materiales y soluciones a medida en un sitio que facilite pedir presupuesto. Ravyt reúne creación y mantenimiento del sitio, presencia en Google y optimizaciones de SEO.",
    challenge: "Cada ambiente debe dar al cliente un siguiente paso claro.",
    challengeText: "Quien busca muebles a medida compara estilos y posibilidades antes de hablar con una empresa. Una presentación organizada por ambientes puede ayudar al visitante a reconocer lo que busca y solicitar atención.",
    site: "Creamos una vitrina de ambientes y servicios con información esencial y contacto accesible en el móvil. El dominio, el alojamiento, las actualizaciones y el soporte están incluidos en la suscripción.",
    google: "Para empresas elegibles, organizamos el Perfil de Empresa en Google con información coherente sobre la actividad y la zona local atendida.",
    seo: "Estructuramos páginas para ambientes y servicios, con contenido y títulos específicos, además de mejoras técnicas y seguimiento continuo.",
    example: "Una referencia visual para muebles a medida",
    exampleText: "Lumea Planejados, una demostración conceptual del portafolio, destaca ambientes para ayudar a imaginar aplicaciones del producto.",
  },
};

export default function NichePage({ niche }: { niche: Niche }) {
  return <><BlogHeader/><main className="rv" id="conteudo" tabIndex={-1}><ScrollReveal/>
    <section className="rv-page-hero"><div className="shell"><p className="rv-label">{<PriceText>{niche.label}</PriceText>}</p><h1>{<PriceText>{niche.heading}</PriceText>}</h1><p className="rv-lead">{<PriceText>{niche.intro}</PriceText>}</p><div className="rv-actions"><DiagnosticCTA/></div></div></section>
    <section className="rv-section" data-reveal><div className="shell"><p className="rv-label"> El punto de partida </p><h2>{<PriceText>{niche.challenge}</PriceText>}</h2><p className="rv-intro">{<PriceText>{niche.challengeText}</PriceText>}</p></div></section>
    <section className="rv-section rv-services" data-reveal><div className="shell"><p className="rv-label"> Google + Sitio web + SEO </p><h2> Una presencia digital con tres pilares. </h2><div className="rv-method"><article><span className="rv-step"> 01 / SITIO WEB </span><h3> Sitio profesional </h3><p>{<PriceText>{niche.site}</PriceText>}</p></article><article><span className="rv-step">02 / GOOGLE</span><h3> Perfil de Empresa en Google </h3><p>{<PriceText>{niche.google}</PriceText>}</p></article><article><span className="rv-step">03 / SEO</span><h3> Estructura para búsquedas </h3><p>{<PriceText>{niche.seo}</PriceText>}</p></article></div></div></section>
    <section className="rv-section rv-dark" data-reveal><div className="shell"><p className="rv-label"> Portafolio </p><h2>{<PriceText>{niche.example}</PriceText>}</h2><p className="rv-intro">{<PriceText>{niche.exampleText}</PriceText>}</p><Link className="rv-text-link" href="/es/cases"> Ver demostraciones y sitios publicados → </Link></div></section>
    <section className="rv-section rv-offer" data-reveal><div className="shell rv-offer-grid"><div><p className="rv-label"> Atención remota en todo el mundo </p><h2> Un servicio continuo para tu empresa. </h2><p className="rv-intro"> Perfil de Empresa en Google, según elegibilidad, sitio profesional, dominio, alojamiento, actualizaciones, soporte y optimizaciones de SEO. El alcance se detalla en la propuesta. </p></div><div className="rv-offer-price"><p> Google + Sitio web + SEO </p><strong><PriceText>R$ 597,00 </PriceText><small> /año </small></strong><ExchangeNote/><span className="rv-monthly"> Plan único anual · Pix, tarjeta o boleto </span><small> Sin tarifa de implementación. Tarjeta NFC de reseñas de Google incluida como bono. </small><DiagnosticCTA/></div></div></section>
  </main><BlogFooter/></>;
}
