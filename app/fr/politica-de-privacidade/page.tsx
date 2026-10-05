import RegionalLegalNotice from "@/components/i18n/RegionalLegalNotice";
import { pageMetadata } from "@/locales/fr/lib/metadata";
import type { Metadata } from "next";
import LegalPage from "@/locales/fr/components/LegalPage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Politique de confidentialité",
  description: "Découvrez comment Ravyt Digital traite les données personnelles, les préférences de cookies et les demandes des personnes concernées.",
  alternates: { canonical: `${SITE_URL}/fr/politica-de-privacidade` },
});

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Confidentialité et transparence" title="Politique de confidentialité" updated="5 octobre 2026">
      <p className="legal-lead"> Ravyt Digital respecte votre vie privée. Cette politique explique clairement quelles données peuvent être traitées lors de vos interactions avec notre site et nos canaux de contact. </p>
      <h2> 1. Qui est responsable des données </h2>
      <p> Ravyt Digital agit en tant que responsable du traitement des données personnelles liées à ce site et aux contacts commerciaux reçus via ses canaux. Les questions ou demandes peuvent être envoyées à <a href="mailto:ola@ravytdigital.com">ola@ravytdigital.com</a>.</p>
      <h2> 2. Quelles informations peuvent être collectées </h2>
      <ul>
        <li> Les informations que vous décidez d’envoyer directement par WhatsApp ou e-mail, selon les règles du canal choisi ; </li>
        <li> Nom, entreprise, e-mail, téléphone, services souhaités et message lorsque vous envoyez le formulaire de contact ; </li>
        <li> Données techniques essentielles, comme l’adresse IP, le type d’appareil, le navigateur et les journaux de sécurité fournis par l’infrastructure d’hébergement ; </li>
        <li> Votre choix relatif aux cookies et aux fonctions de mesure, stocké localement sur l’appareil. </li>
      </ul>
      <p> Les événements de mesure ne comprennent pas de nom, d’e-mail, de téléphone, de contenu de message, de données de santé ou d’autres informations saisies dans les formulaires. </p>
      <h2> 3. À quelles fins nous utilisons ces informations </h2>
      <p> Les données peuvent servir à répondre aux demandes, préparer des propositions, fournir les services convenus, maintenir la sécurité et le fonctionnement du site, améliorer l’expérience et respecter les obligations légales ou réglementaires. </p>
      <h2> 4. Fondements du traitement </h2>
      <p>Lorsque le RGPD est applicable, les bases de l’article 6 sont : consentement pour la mesure et la publicité facultatives ; démarches précontractuelles demandées et exécution du contrat pour les demandes et services ; obligations légales pour les documents requis ; intérêts légitimes, sous réserve d’une mise en balance, pour la sécurité. Le consentement peut être retiré. Les obligations américaines s’appliquent selon leur champ légal ; la LGPD reste applicable aux traitements relevant de son champ.</p>
      <h2> 5. Cookies et stockage local </h2>
      <p> Le site utilise un stockage essentiel pour mémoriser votre choix de confidentialité. Après votre acceptation, notre propre suivi, Google Analytics géré par Google Tag Manager, le Pixel Meta et l’API Conversions de Meta enregistrent les pages vues, défilements, téléchargements, interactions vidéo, recherches internes, clics sur les canaux de contact et envois de formulaires terminés. Nous n’envoyons à ces outils ni les données personnelles saisies dans les formulaires ni le contenu des messages. La mesure de Meta peut soutenir l’attribution, le remarketing et l’optimisation des campagnes publicitaires. Vous pouvez retirer ou modifier votre autorisation avec le bouton « Modifier les préférences de confidentialité » en bas de chaque page. </p>
      <h2> 6. Partage </h2>
      <p> Nous ne vendons pas de données personnelles. Les informations peuvent être partagées uniquement avec les prestataires nécessaires à l’hébergement, la communication, la sécurité, la mesure et l’exécution des services, notamment Google et Meta en cas de consentement, dans les limites adaptées à chaque finalité, ou en cas d’obligation légale. </p>
      <h2> 7. Conservation et sécurité </h2>
      <p> Les données sont conservées uniquement pendant la durée nécessaire à la finalité indiquée, à la relation commerciale ou au respect des obligations applicables. Nous adoptons des mesures raisonnables d’organisation et de sécurité, bien qu’aucun environnement numérique ne soit totalement à l’abri des risques. </p>
      <h2> 8. Vos droits </h2>
      <p> Selon la législation applicable, vous pouvez demander confirmation du traitement, accès, rectification, informations sur les partages, anonymisation, blocage ou suppression lorsqu’ils sont applicables, ainsi que retirer votre consentement. Pour exercer vos droits, utilisez l’e-mail indiqué sur cette page. </p>
      <h2> 9. Liens externes et mises à jour </h2>
      <p> Les liens vers l’e-mail ou d’autres services suivent les politiques propres à ces plateformes. Cette politique peut être mise à jour pour refléter des changements du site, des services ou de la législation ; la date de la version en vigueur sera toujours indiquée en haut. </p>
    <RegionalLegalNotice lang="fr" kind="privacy"/>
    </LegalPage>
  );
}
