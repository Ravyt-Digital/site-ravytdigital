import SegmentedLanding from "@/locales/es/components/SegmentedLanding";
import { pageMetadata } from "@/locales/es/lib/metadata";

export const metadata = pageMetadata({
  title: "Sitios web para empresas de ingeniería",
  description: "Sitios de ingeniería con especialidades, proyectos y SEO. Perfil de Empresa en Google cuando sea elegible. Plan anual One Page: R$ 597 (reales brasileños).",
  alternates: { canonical: "/es/sites-para-empresas-de-engenharia" },
});

export default function Page() { return <SegmentedLanding segment="engenharia"/>; }
