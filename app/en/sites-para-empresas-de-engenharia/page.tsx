import SegmentedLanding from "@/locales/en/components/SegmentedLanding";
import { pageMetadata } from "@/locales/en/lib/metadata";

export const metadata = pageMetadata({
  title: "Websites for Engineering Companies",
  description: "Engineering websites with technical specialties, projects and SEO. Google Business Profile when eligible. One Page annual plan: R$ 597 (Brazilian reais).",
  alternates: { canonical: "/en/sites-para-empresas-de-engenharia" },
});

export default function Page() { return <SegmentedLanding segment="engenharia"/>; }
