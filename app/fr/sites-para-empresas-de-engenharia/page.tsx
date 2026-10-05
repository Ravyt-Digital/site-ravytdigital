import NichePage, { niches } from "@/locales/fr/components/NichePage";
import { pageMetadata } from "@/locales/fr/lib/metadata";

export const metadata = pageMetadata({
  title: "Sites pour les entreprises d’ingénierie",
  description: "Création de sites pour les entreprises d’ingénierie avec Profil d’entreprise Google et SEO. Google + Site + SEO avec un forfait annuel unique de R$ 597,00, payable par Pix, carte ou boleto, avec services à distance.",
  alternates: { canonical: "/fr/sites-para-empresas-de-engenharia" },
});

export default function Page() { return <NichePage niche={niches.engenharia}/>; }
