import RegionalLegalNotice from "@/components/i18n/RegionalLegalNotice";
import { pageMetadata } from "@/locales/es/lib/metadata";
import type { Metadata } from "next";
import LegalPage from "@/locales/es/components/LegalPage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Términos de uso",
  description: "Condiciones de acceso y uso del sitio de Ravyt Digital.",
  alternates: { canonical: `${SITE_URL}/es/termos-de-uso` },
});

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Condiciones de acceso" title="Términos de uso" updated="5 de octubre de 2026">
      <p className="legal-lead"> Al navegar por el sitio de Ravyt Digital, aceptas estos términos. Si no estás de acuerdo con alguna condición, deja de utilizar el sitio. </p>
      <h2> 1. Finalidad del sitio </h2>
      <p> Este sitio presenta Ravyt Digital, sus servicios de Google, sitios web y SEO y contenidos sobre presencia digital. El contenido es institucional e informativo. </p>
      <h2> 2. Propuestas y contratación </h2>
      <p> Los mensajes, estimaciones, ejemplos y contenidos del sitio no constituyen un contrato ni una oferta definitiva. El alcance, los plazos, los precios, las responsabilidades y las condiciones de cada proyecto se definirán en una propuesta y un contrato enviados al cliente antes del pago. </p>
      <h2> 3. Propiedad intelectual </h2>
      <p> La marca, identidad visual, textos, diseños, elementos gráficos, códigos y demás contenidos producidos por Ravyt están protegidos por la legislación aplicable. No se permite copiar, adaptar, publicar, vender o explotar estos materiales sin autorización, sin perjuicio de los derechos de clientes y terceros identificados. </p>
      <h2> 4. Uso adecuado </h2>
      <p> Te comprometes a no utilizar el sitio para infringir leyes, derechos de terceros, medidas de seguridad o disponibilidad del servicio; introducir código malicioso; intentar accesos no autorizados; o reproducir contenido indebidamente. </p>
      <h2> 5. Enlaces y servicios de terceros </h2>
      <p> El sitio puede dirigir a servicios de correo o páginas externas. Ravyt no controla la disponibilidad, el contenido ni las políticas de esos entornos, que se rigen por sus propios términos. </p>
      <h2> 6. Disponibilidad e información </h2>
      <p> Buscamos mantener el sitio actualizado y funcionando correctamente, pero pueden ocurrir indisponibilidades, mantenimiento o información desactualizada. Nada en estos términos excluye derechos que no puedan ser limitados por la legislación aplicable. </p>
      <h2> 7. Privacidad </h2>
      <p> El tratamiento de datos personales relacionado con el sitio se explica en nuestra <a href="/es/politica-de-privacidade"> Política de privacidad </a>.</p>
      <h2> 8. Cambios y legislación </h2>
      <p> Estos términos no excluyen las normas imperativas de privacidad, protección del consumidor o competencia judicial aplicables en la Unión Europea o en tu estado estadounidense. Elegir un idioma o navegar no autoriza cookies opcionales. Las condiciones del servicio y los eventuales derechos de desistimiento se presentarán antes de contratar conforme a la ley aplicable. </p>
      <h2> 9. Contacto </h2>
      <p> Las dudas sobre estos términos pueden enviarse a <a href="mailto:ola@ravytdigital.com">ola@ravytdigital.com</a>.</p>
    <RegionalLegalNotice lang="es" kind="terms"/>
    </LegalPage>
  );
}
