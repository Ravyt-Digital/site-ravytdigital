import NichePage, { niches } from "@/locales/fr/components/NichePage";
import { pageMetadata } from "@/locales/fr/lib/metadata";

export const metadata = pageMetadata({
  title: "Sites pour les entreprises de meubles sur mesure",
  description: "Sites pour les entreprises de meubles sur mesure avec projets, contact facile et SEO. Profil d’entreprise Google + site + SEO avec un forfait annuel unique de 597, payable par Pix, carte ou boleto.",
  alternates: { canonical: "/fr/sites-para-moveis-planejados" },
});

export default function Page() { return <NichePage niche={niches.moveis}/>; }
