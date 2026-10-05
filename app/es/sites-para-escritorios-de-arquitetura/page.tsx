import NichePage, { niches } from "@/locales/es/components/NichePage";
import { pageMetadata } from "@/locales/es/lib/metadata";

export const metadata = pageMetadata({
  title: "Sitios web para estudios de arquitectura",
  description: "Sitios para estudios de arquitectura con portafolio claro, Perfil de Empresa en Google y SEO. Google + Sitio web + SEO en el plan único anual de R$ 597,00, pagado por Pix, tarjeta o boleto.",
  alternates: { canonical: "/es/sites-para-escritorios-de-arquitetura" },
});

export default function Page() { return <NichePage niche={niches.arquitetura}/>; }
