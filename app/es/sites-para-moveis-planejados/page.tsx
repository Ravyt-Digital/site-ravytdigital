import NichePage, { niches } from "@/locales/es/components/NichePage";
import { pageMetadata } from "@/locales/es/lib/metadata";

export const metadata = pageMetadata({
  title: "Sitios web para empresas de muebles a medida",
  description: "Sitios para empresas de muebles a medida con proyectos, contacto fácil y SEO. Perfil de Empresa en Google + sitio web + SEO en el plan único anual de 597, pagado por Pix, tarjeta o boleto.",
  alternates: { canonical: "/es/sites-para-moveis-planejados" },
});

export default function Page() { return <NichePage niche={niches.moveis}/>; }
