import SegmentedLanding from "@/locales/en/components/SegmentedLanding";
import { pageMetadata } from "@/locales/en/lib/metadata";

export const metadata = pageMetadata({
  title: "Websites for Architecture Firms",
  description: "Architecture websites with clear portfolios, SEO and Google Business Profile when eligible. One Page annual plan: R$ 597 (Brazilian reais).",
  alternates: { canonical: "/en/sites-para-escritorios-de-arquitetura" },
});

export default function Page() { return <SegmentedLanding segment="arquitetura"/>; }
