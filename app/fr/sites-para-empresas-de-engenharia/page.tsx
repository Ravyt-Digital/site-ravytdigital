import SegmentedLanding from "@/locales/fr/components/SegmentedLanding";
import { pageMetadata } from "@/locales/fr/lib/metadata";

export const metadata = pageMetadata({
  title: "Sites pour les entreprises d’ingénierie",
  description: "Sites d’ingénierie avec spécialités, projets et SEO. Profil d’entreprise Google sous réserve d’éligibilité. Forfait annuel One Page : R$ 597 (réals brésiliens).",
  alternates: { canonical: "/fr/sites-para-empresas-de-engenharia" },
});

export default function Page() { return <SegmentedLanding segment="engenharia"/>; }
