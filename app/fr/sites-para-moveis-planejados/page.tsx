import SegmentedLanding from "@/locales/fr/components/SegmentedLanding";
import { pageMetadata } from "@/locales/fr/lib/metadata";

export const metadata = pageMetadata({
  title: "Sites pour les entreprises de meubles sur mesure",
  description: "Sites de mobilier sur mesure avec espaces, SEO et contact facile. Profil d’entreprise Google sous réserve d’éligibilité. Forfait annuel One Page : R$ 597 (réals brésiliens).",
  alternates: { canonical: "/fr/sites-para-moveis-planejados" },
});

export default function Page() { return <SegmentedLanding segment="moveis"/>; }
