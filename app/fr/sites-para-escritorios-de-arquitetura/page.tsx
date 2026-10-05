import NichePage, { niches } from "@/locales/fr/components/NichePage";
import { pageMetadata } from "@/locales/fr/lib/metadata";

export const metadata = pageMetadata({
  title: "Sites pour les cabinets d’architecture",
  description: "Sites pour les cabinets d’architecture avec portfolio clair, Profil d’entreprise Google et SEO. Google + Site + SEO avec un forfait annuel unique de 597, payable par carte ou boleto.",
  alternates: { canonical: "/fr/sites-para-escritorios-de-arquitetura" },
});

export default function Page() { return <NichePage niche={niches.arquitetura}/>; }
