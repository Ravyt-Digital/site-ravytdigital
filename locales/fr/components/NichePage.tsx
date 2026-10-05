import {ExchangeNote} from "@/components/i18n/Regional";

import {PriceText} from "@/components/i18n/Regional";
import Link from 'next/link';
import { BlogFooter, BlogHeader } from "@/locales/fr/components/BlogChrome";
import { DiagnosticCTA } from "@/locales/fr/components/Commercial";
import ScrollReveal from "@/locales/fr/components/ScrollReveal";

type Niche = {
  label: string;
  heading: string;
  intro: string;
  challenge: string;
  challengeText: string;
  site: string;
  google: string;
  seo: string;
  example: string;
  exampleText: string;
};

export const niches: Record<'engenharia' | 'arquitetura' | 'moveis', Niche> = {
  engenharia: {
    label: "Pour les entreprises d’ingénierie",
    heading: "Site pour les entreprises d’ingénierie, Google et SEO.",
    intro: "Présentez clairement vos spécialités, projets et zones d’intervention aux personnes qui recherchent une entreprise d’ingénierie. Ravyt crée et maintient votre site et organise votre présence dans les recherches.",
    challenge: "Avant de demander une proposition, le client doit comprendre votre activité.",
    challengeText: "Ceux qui recherchent une entreprise d’ingénierie veulent identifier les types de projets pris en charge, l’expérience de l’équipe et comment entamer un échange. Un site avec des pages claires pour chaque spécialité aide à répondre à ces questions.",
    site: "Nous structurons des pages pour les spécialités, projets, équipe et contact, avec une navigation fonctionnelle sur mobile. Domaine, hébergement, mises à jour et support font partie de l’abonnement.",
    google: "Nous organisons les données du Profil d’entreprise Google, lorsque l’entreprise est éligible, pour représenter correctement sa localisation, ses services et ses modalités d’intervention.",
    seo: "Nous travaillons les titres, contenus, liens internes et aspects techniques pour que les pages de services et de projets puissent être comprises par les moteurs de recherche.",
    example: "Une référence visuelle pour l’ingénierie",
    exampleText: "Vértice Norte Engenharia, présenté dans le portfolio comme démonstration conceptuelle, montre une façon d’organiser les spécialités et projets sans désorienter le visiteur.",
  },
  arquitetura: {
    label: "Pour les cabinets d’architecture",
    heading: "Site pour les cabinets d’architecture, Google et SEO.",
    intro: "Vos projets doivent montrer votre travail et expliquer le processus de commande. Ravyt crée un site professionnel pour votre cabinet, assure la maintenance et travaille la structure pour les recherches Google.",
    challenge: "Un portfolio doit aider le visiteur à prendre une décision.",
    challengeText: "Les photos attirent l’attention, mais le client potentiel cherche aussi à connaître les types de projets, la zone desservie, les étapes du travail et comment vous contacter. Le contexte et l’organisation rendent le portfolio plus utile.",
    site: "Nous créons des pages de projets et services avec des images bien présentées, des textes précis et des parcours clairs vers le contact. L’abonnement comprend domaine, hébergement, mises à jour et support.",
    google: "Lorsque le cabinet est éligible au Profil d’entreprise Google, nous veillons à la cohérence des informations de localisation, services et accueil.",
    seo: "Nous organisons la structure, les titres, descriptions et liens internes pour relier les services et projets aux recherches pertinentes, sans promettre de positions précises.",
    example: "Une référence visuelle pour l’architecture",
    exampleText: "Nina Valença Arquitetura est une démonstration conceptuelle du portfolio présentant des projets avec de grandes images et une navigation orientée vers la découverte du travail.",
  },
  moveis: {
    label: "Pour les entreprises de meubles sur mesure",
    heading: "Site pour les entreprises de meubles sur mesure, Google et SEO.",
    intro: "Présentez les espaces, matériaux et solutions sur mesure sur un site qui facilite la demande de devis. Ravyt réunit création et maintenance du site, présence sur Google et optimisations SEO.",
    challenge: "Chaque espace doit proposer au client une prochaine étape claire.",
    challengeText: "Ceux qui recherchent des meubles sur mesure comparent les styles et possibilités avant de contacter une entreprise. Une présentation organisée par pièces peut aider le visiteur à reconnaître ce qu’il cherche et demander un accompagnement.",
    site: "Nous créons une vitrine d’espaces et services avec les informations essentielles et un contact accessible sur mobile. Domaine, hébergement, mises à jour et support sont inclus dans l’abonnement.",
    google: "Pour les entreprises éligibles, nous organisons le Profil d’entreprise Google avec des informations cohérentes sur l’activité et la zone locale desservie.",
    seo: "Nous structurons des pages pour les espaces et services, avec des contenus et titres spécifiques, ainsi que des améliorations techniques et un suivi continu.",
    example: "Une référence visuelle pour les meubles sur mesure",
    exampleText: "Lumea Planejados, une démonstration conceptuelle du portfolio, met les espaces en avant pour aider à imaginer les applications du produit.",
  },
};

export default function NichePage({ niche }: { niche: Niche }) {
  return <><BlogHeader/><main className="rv" id="conteudo" tabIndex={-1}><ScrollReveal/>
    <section className="rv-page-hero"><div className="shell"><p className="rv-label">{<PriceText>{niche.label}</PriceText>}</p><h1>{<PriceText>{niche.heading}</PriceText>}</h1><p className="rv-lead">{<PriceText>{niche.intro}</PriceText>}</p><div className="rv-actions"><DiagnosticCTA/></div></div></section>
    <section className="rv-section" data-reveal><div className="shell"><p className="rv-label"> Le point de départ </p><h2>{<PriceText>{niche.challenge}</PriceText>}</h2><p className="rv-intro">{<PriceText>{niche.challengeText}</PriceText>}</p></div></section>
    <section className="rv-section rv-services" data-reveal><div className="shell"><p className="rv-label">Google + Site + SEO</p><h2> Une présence numérique à trois piliers. </h2><div className="rv-method"><article><span className="rv-step">01 / SITE</span><h3> Site professionnel </h3><p>{<PriceText>{niche.site}</PriceText>}</p></article><article><span className="rv-step">02 / GOOGLE</span><h3> Profil d’entreprise Google </h3><p>{<PriceText>{niche.google}</PriceText>}</p></article><article><span className="rv-step">03 / SEO</span><h3> Structure pour les recherches </h3><p>{<PriceText>{niche.seo}</PriceText>}</p></article></div></div></section>
    <section className="rv-section rv-dark" data-reveal><div className="shell"><p className="rv-label"> Portfolio </p><h2>{<PriceText>{niche.example}</PriceText>}</h2><p className="rv-intro">{<PriceText>{niche.exampleText}</PriceText>}</p><Link className="rv-text-link" href="/fr/cases"> Voir les démonstrations et sites publiés → </Link></div></section>
    <section className="rv-section rv-offer" data-reveal><div className="shell rv-offer-grid"><div><p className="rv-label"> Services à distance dans le monde entier </p><h2> Un service continu pour votre entreprise. </h2><p className="rv-intro"> Profil d’entreprise Google selon l’éligibilité, site professionnel, domaine, hébergement, mises à jour, support et optimisations SEO. Le périmètre est détaillé dans la proposition. </p></div><div className="rv-offer-price"><p>Google + Site + SEO</p><strong><PriceText>R$ 597,00 </PriceText><small> /an </small></strong><ExchangeNote/><span className="rv-monthly"> Forfait annuel unique · Pix, carte ou boleto </span><small> Sans frais d’installation. Carte NFC pour les avis Google incluse en bonus. </small><DiagnosticCTA/></div></div></section>
  </main><BlogFooter/></>;
}
