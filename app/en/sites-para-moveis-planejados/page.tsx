import NichePage, { niches } from "@/locales/en/components/NichePage";
import { pageMetadata } from "@/locales/en/lib/metadata";

export const metadata = pageMetadata({
  title: "Websites for Custom Furniture Companies",
  description: "Websites for custom furniture businesses with projects, easy contact and SEO. Google Business Profile + website + SEO in a single annual plan of R$ 597,00, payable by Pix, card or boleto.",
  alternates: { canonical: "/en/sites-para-moveis-planejados" },
});

export default function Page() { return <NichePage niche={niches.moveis}/>; }
