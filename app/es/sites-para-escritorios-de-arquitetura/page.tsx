import SegmentedLanding from "@/locales/es/components/SegmentedLanding";
import { pageMetadata } from "@/locales/es/lib/metadata";

export const metadata = pageMetadata({
  title: "Sitios web para estudios de arquitectura",
  description: "Sitios de arquitectura con portafolio claro, SEO y Perfil de Empresa en Google cuando sea elegible. Plan anual One Page: R$ 597 (reales brasileños).",
  alternates: { canonical: "/es/sites-para-escritorios-de-arquitetura" },
});

export default function Page() { return <SegmentedLanding segment="arquitetura"/>; }
