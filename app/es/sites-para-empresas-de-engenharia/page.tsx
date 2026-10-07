import NichePage, { niches } from "@/locales/es/components/NichePage";
import { pageMetadata } from "@/locales/es/lib/metadata";

export const metadata = pageMetadata({
  title: "Sitios web para empresas de ingeniería",
  description: "Creación de sitios para empresas de ingeniería con Perfil de Empresa en Google y SEO. Google + Sitio web + SEO en el plan único anual de 597, con condiciones de pago en la propuesta, con atención remota.",
  alternates: { canonical: "/es/sites-para-empresas-de-engenharia" },
});

export default function Page() { return <NichePage niche={niches.engenharia}/>; }
