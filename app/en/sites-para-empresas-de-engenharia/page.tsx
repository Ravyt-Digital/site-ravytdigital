import NichePage, { niches } from "@/locales/en/components/NichePage";
import { pageMetadata } from "@/locales/en/lib/metadata";

export const metadata = pageMetadata({
  title: "Websites for Engineering Companies",
  description: "Website creation for engineering companies with Google Business Profile and SEO. Google + Website + SEO in a single annual plan of 597, with payment terms in the proposal, with remote service.",
  alternates: { canonical: "/en/sites-para-empresas-de-engenharia" },
});

export default function Page() { return <NichePage niche={niches.engenharia}/>; }
