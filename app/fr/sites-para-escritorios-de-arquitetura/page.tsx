import SegmentedLanding from "@/locales/fr/components/SegmentedLanding";
import { pageMetadata } from "@/locales/fr/lib/metadata";

export const metadata = pageMetadata({
  title: "Sites pour les cabinets d’architecture",
  description: "Sites d’architecture avec portfolio clair, SEO et Profil d’entreprise Google sous réserve d’éligibilité. Forfait annuel One Page : R$ 597 (réals brésiliens).",
  alternates: { canonical: "/fr/sites-para-escritorios-de-arquitetura" },
});

export default function Page() { return <SegmentedLanding segment="arquitetura"/>; }
