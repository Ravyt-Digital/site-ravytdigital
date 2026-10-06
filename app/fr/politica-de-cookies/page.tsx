import RegionalLegalNotice from "@/components/i18n/RegionalLegalNotice";
import { pageMetadata } from "@/locales/fr/lib/metadata";
import type { Metadata } from "next";
import LegalPage from "@/locales/fr/components/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Politique relative aux cookies",
  description: "Comment Ravyt Digital utilise le stockage essentiel et la mesure avec consentement.",
  alternates: { canonical: "/fr/politica-de-cookies" },
});

export default function CookiePolicyPage() {
  return <LegalPage eyebrow="Confidentialité et choix" title="Politique relative aux cookies" updated="5 octobre 2026">
    <p className="legal-lead"> Cette politique explique comment le site de Ravyt Digital utilise le stockage local et les technologies de mesure. </p>
    <h2> 1. Stockage essentiel </h2>
    <p> Nous utilisons un stockage local strictement nécessaire pour enregistrer votre choix d’accepter ou de refuser les fonctions de mesure. Cette fonction ne sert pas à créer des profils. </p>
    <p> Un cookie essentiel mémorise la langue choisie pendant 12 mois au maximum afin de conserver votre préférence lors des prochaines visites. </p>
    <h2> 2. Mesure avec consentement </h2>
    <p> Metricool, Google Analytics, le Pixel Meta, l’API Conversions de Meta et notre propre mesure ne sont activés qu’après acceptation. Ils peuvent enregistrer les pages vues, défilements, clics externes, téléchargements, interactions vidéo, recherches internes, clics sur WhatsApp, e-mail et téléphone, appels à l’action principaux et envois de formulaires terminés. Aucun de ces événements ne comprend de nom, d’adresse e-mail, de numéro de téléphone, de contenu de message, de données de santé ou d’autres contenus de formulaires. </p>
    <h2> 3. Refus </h2>
    <p> En cas de refus, les fonctions de mesure non essentielles de Metricool, Google et Meta restent désactivées. Les liens WhatsApp et e-mail continuent à fonctionner normalement. </p>
    <h2> 4. Modifier votre choix </h2><p> Utilisez « Modifier les préférences de confidentialité » en bas de chaque page. En cas de refus, les nouveaux événements ne sont plus envoyés. La mesure de Meta peut servir à l’attribution et à l’optimisation des campagnes publicitaires, toujours sous réserve de votre acceptation. </p><h2> 5. Contact </h2>
    <p> Les questions peuvent être envoyées à <a href="mailto:ola@ravytdigital.com">ola@ravytdigital.com</a>.</p>
  <RegionalLegalNotice lang="fr" kind="cookies"/>
    </LegalPage>;
}
