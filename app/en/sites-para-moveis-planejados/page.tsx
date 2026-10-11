import SegmentedLanding from "@/locales/en/components/SegmentedLanding";
import { pageMetadata } from "@/locales/en/lib/metadata";

export const metadata = pageMetadata({
  title: "Websites for Custom Furniture Companies",
  description: "Custom furniture websites with room showcases, SEO and easy contact. Google Business Profile when eligible. One Page annual plan: R$ 597 (Brazilian reais).",
  alternates: { canonical: "/en/sites-para-moveis-planejados" },
});

export default function Page() { return <SegmentedLanding segment="moveis"/>; }
