import SegmentedLanding from "@/locales/es/components/SegmentedLanding";
import { pageMetadata } from "@/locales/es/lib/metadata";

export const metadata = pageMetadata({
  title: "Sitios web para empresas de muebles a medida",
  description: "Sitios de muebles a medida con ambientes, SEO y contacto fácil. Perfil de Empresa en Google cuando sea elegible. Plan anual One Page: R$ 597 (reales brasileños).",
  alternates: { canonical: "/es/sites-para-moveis-planejados" },
});

export default function Page() { return <SegmentedLanding segment="moveis"/>; }
