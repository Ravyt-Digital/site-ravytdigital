import NichePage, { niches } from "@/locales/en/components/NichePage";
import { pageMetadata } from "@/locales/en/lib/metadata";

export const metadata = pageMetadata({
  title: "Websites for Architecture Firms",
  description: "Websites for architecture firms with a clear portfolio, Google Business Profile and SEO. Google + Website + SEO in a single annual plan of R$ 597,00, payable by Pix, card or boleto.",
  alternates: { canonical: "/en/sites-para-escritorios-de-arquitetura" },
});

export default function Page() { return <NichePage niche={niches.arquitetura}/>; }
