import { pageMetadata } from "@/locales/es/lib/metadata";
import type { Metadata } from "next";
import LegalPage from "@/locales/es/components/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Política de cookies",
  description: "Cómo utiliza Ravyt Digital el almacenamiento esencial y la medición con consentimiento.",
  alternates: { canonical: "/es/politica-de-cookies" },
});

export default function CookiePolicyPage() {
  return <LegalPage eyebrow="Privacidad y elección" title="Política de cookies" updated="4 de octubre de 2026">
    <p className="legal-lead"> Esta política explica cómo utiliza el sitio de Ravyt Digital el almacenamiento local y las tecnologías de medición. </p>
    <h2> 1. Almacenamiento esencial </h2>
    <p> Utilizamos almacenamiento local estrictamente necesario para registrar tu decisión de aceptar o rechazar las funciones de medición. Esta función no se utiliza para crear perfiles. </p>
    <p> Una cookie esencial guarda el idioma elegido durante un máximo de 12 meses para conservar tu preferencia en futuras visitas. </p>
    <h2> 2. Medición con consentimiento </h2>
    <p> Google Analytics, el píxel de Meta, la API de conversiones de Meta y la medición propia solo se activan tras la aceptación. Pueden registrar vistas de páginas, desplazamientos, clics externos, descargas, interacciones con vídeos, búsquedas internas, clics en WhatsApp, correo y teléfono, llamadas a la acción principales y envíos completados de formularios. Ninguno de estos eventos incluye nombres, correos, teléfonos, contenido de mensajes, datos de salud u otra información personal o sensible. </p>
    <h2> 3. Rechazo </h2>
    <p> Al rechazar, las funciones de medición no esenciales de Google y Meta permanecen desactivadas. Los enlaces de WhatsApp y correo siguen funcionando con normalidad. </p>
    <h2> 4. Cambiar la elección </h2><p> Usa «Cambiar preferencias de privacidad» al final de cualquier página. Al rechazar, dejan de enviarse nuevos eventos. La medición de Meta puede utilizarse para la atribución y optimización de campañas publicitarias, siempre sujeta a tu aceptación. </p><h2> 5. Contacto </h2>
    <p> Las dudas pueden enviarse a <a href="mailto:ola@ravytdigital.com">ola@ravytdigital.com</a>.</p>
  </LegalPage>;
}
