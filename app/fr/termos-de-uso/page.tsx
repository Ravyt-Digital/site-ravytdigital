import RegionalLegalNotice from "@/components/i18n/RegionalLegalNotice";
import { pageMetadata } from "@/locales/fr/lib/metadata";
import type { Metadata } from "next";
import LegalPage from "@/locales/fr/components/LegalPage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Conditions d’utilisation",
  description: "Conditions d’accès et d’utilisation du site de Ravyt Digital.",
  alternates: { canonical: `${SITE_URL}/fr/termos-de-uso` },
});

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Conditions d’accès" title="Conditions d’utilisation" updated="5 octobre 2026">
      <p className="legal-lead"> En naviguant sur le site de Ravyt Digital, vous acceptez ces conditions. Si vous n’acceptez pas une condition, cessez d’utiliser le site. </p>
      <h2> 1. Objet du site </h2>
      <p> Ce site présente Ravyt Digital, ses services Google, sites et SEO ainsi que des contenus sur la présence numérique. Le contenu est institutionnel et informatif. </p>
      <h2> 2. Propositions et contrats </h2>
      <p> Les messages, estimations, exemples et contenus du site ne constituent ni un contrat ni une offre définitive. Le périmètre, les délais, les prix, les responsabilités et les conditions de chaque projet seront définis dans une proposition et un contrat envoyés au client avant le paiement. </p>
      <h2> 3. Propriété intellectuelle </h2>
      <p> La marque, l’identité visuelle, les textes, mises en page, éléments graphiques, codes et autres contenus produits par Ravyt sont protégés par la législation applicable. Il est interdit de copier, adapter, publier, vendre ou exploiter ces éléments sans autorisation, sous réserve des droits des clients et tiers identifiés. </p>
      <h2> 4. Utilisation appropriée </h2>
      <p> Vous vous engagez à ne pas utiliser le site pour violer des lois, les droits de tiers, les mesures de sécurité ou la disponibilité du service ; introduire du code malveillant ; tenter un accès non autorisé ; ou reproduire le contenu de façon abusive. </p>
      <h2> 5. Liens et services de tiers </h2>
      <p> Le site peut renvoyer vers des services d’e-mail ou des pages externes. Ravyt ne contrôle pas la disponibilité, les contenus ni les politiques de ces environnements, qui sont régis par leurs propres conditions. </p>
      <h2> 6. Disponibilité et informations </h2>
      <p> Nous cherchons à maintenir le site à jour et fonctionnel, mais des indisponibilités, opérations de maintenance ou informations obsolètes peuvent survenir. Rien dans ces conditions n’exclut des droits auxquels il ne peut être dérogé selon la législation applicable. </p>
      <h2> 7. Confidentialité </h2>
      <p> Le traitement des données personnelles lié au site est expliqué dans notre <a href="/fr/politica-de-privacidade"> Politique de confidentialité </a>.</p>
      <h2> 8. Modifications et législation </h2>
      <p> Ces conditions n’écartent aucune règle impérative de confidentialité, de protection des consommateurs ou de compétence applicable dans l’Union européenne ou dans votre État américain. Choisir une langue ou naviguer n’autorise pas les cookies facultatifs. Les conditions de service et les éventuels droits de rétractation seront présentés avant la conclusion du contrat conformément à la loi applicable. </p>
      <h2> 9. Contact </h2>
      <p> Les questions concernant ces conditions peuvent être envoyées à <a href="mailto:ola@ravytdigital.com">ola@ravytdigital.com</a>.</p>
    <RegionalLegalNotice lang="fr" kind="terms"/>
    </LegalPage>
  );
}
