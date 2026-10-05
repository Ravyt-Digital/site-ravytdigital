import { pageMetadata } from "@/locales/es/lib/metadata";
import type { Metadata } from "next";
import LegalPage from "@/locales/es/components/LegalPage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Política de privacidad",
  description: "Comprende cómo trata Ravyt Digital los datos personales, las preferencias de cookies y las solicitudes de los titulares.",
  alternates: { canonical: `${SITE_URL}/politica-de-privacidade` },
});

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Privacidad y transparencia" title="Política de privacidad" updated="4 de octubre de 2026">
      <p className="legal-lead"> Ravyt Digital respeta tu privacidad. Esta política explica claramente qué datos pueden tratarse durante tu interacción con nuestro sitio y canales de contacto. </p>
      <h2> 1. Quién es responsable de los datos </h2>
      <p> Ravyt Digital actúa como responsable del tratamiento de los datos personales relacionados con este sitio y los contactos comerciales recibidos por sus canales. Las dudas o solicitudes pueden enviarse a <a href="mailto:ola@ravytdigital.com">ola@ravytdigital.com</a>.</p>
      <h2> 2. Qué información puede recopilarse </h2>
      <ul>
        <li> Información que decidas enviar directamente por WhatsApp o correo, bajo las reglas del canal elegido; </li>
        <li> Nombre, empresa, correo, teléfono, servicios de interés y mensaje cuando envías el formulario de contacto; </li>
        <li> Datos técnicos esenciales, como dirección IP, tipo de dispositivo, navegador y registros de seguridad proporcionados por la infraestructura de alojamiento; </li>
        <li> Tu elección sobre cookies y funciones de medición, almacenada localmente en el dispositivo. </li>
      </ul>
      <p> Los eventos de medición no incluyen nombres, correos, teléfonos, contenido de mensajes, datos de salud u otra información personal o sensible introducida en los formularios. </p>
      <h2> 3. Para qué usamos esta información </h2>
      <p> Los datos pueden usarse para responder solicitudes, preparar propuestas, prestar servicios contratados, mantener la seguridad y el funcionamiento del sitio, mejorar la experiencia y cumplir obligaciones legales o reglamentarias. </p>
      <h2> 4. Fundamentos del tratamiento </h2>
      <p> El tratamiento se realiza según los supuestos aplicables de la Ley General de Protección de Datos de Brasil, incluidos el consentimiento, los procedimientos relacionados con contratos, el cumplimiento de obligaciones legales y el interés legítimo evaluado respetando los derechos del titular. Consulta el <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709compilado.htm" target="_blank" rel="noreferrer">  texto oficial consolidado de la LGPD </a>.</p>
      <h2> 5. Cookies y almacenamiento local </h2>
      <p> El sitio utiliza almacenamiento esencial para recordar tu elección de privacidad. Tras tu aceptación, la medición propia, Google Analytics administrado por Google Tag Manager, el píxel de Meta y la API de conversiones de Meta registran vistas, desplazamientos, descargas, interacciones con vídeos, búsquedas internas, clics en canales de contacto y envíos completados de formularios. No enviamos a estas herramientas los datos personales de los formularios ni el contenido de los mensajes. La medición de Meta puede apoyar la atribución, el remarketing y la optimización de campañas publicitarias. Puedes revocar o cambiar tu autorización con el botón «Cambiar preferencias de privacidad», disponible al final de todas las páginas. </p>
      <h2> 6. Uso compartido </h2>
      <p> No vendemos datos personales. La información solo puede compartirse con proveedores necesarios para alojamiento, comunicación, seguridad, medición y ejecución de servicios, incluidos Google y Meta cuando existe consentimiento, dentro del límite adecuado para cada finalidad o por obligación legal. </p>
      <h2> 7. Conservación y seguridad </h2>
      <p> Los datos se conservan solo durante el tiempo necesario para la finalidad indicada, la relación comercial o el cumplimiento de obligaciones aplicables. Adoptamos medidas razonables de organización y seguridad, aunque ningún entorno digital está totalmente exento de riesgos. </p>
      <h2> 8. Tus derechos </h2>
      <p> Según la legislación aplicable, puedes solicitar confirmación del tratamiento, acceso, rectificación, información sobre uso compartido, anonimización, bloqueo o eliminación cuando corresponda, y revocar consentimientos. Para ejercer tus derechos, usa el correo indicado en esta página. </p>
      <h2> 9. Enlaces externos y actualizaciones </h2>
      <p> Los enlaces de correo u otros servicios siguen las políticas de esas plataformas. Esta política puede actualizarse para reflejar cambios en el sitio, los servicios o la legislación; la fecha de la versión vigente siempre se indicará arriba. </p>
    </LegalPage>
  );
}
