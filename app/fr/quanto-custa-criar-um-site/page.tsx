
import {PriceText} from "@/components/i18n/Regional";
import Breadcrumbs from "@/locales/fr/components/Breadcrumbs";
import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/locales/fr/lib/metadata";
import { BlogFooter, BlogHeader } from "@/locales/fr/components/BlogChrome";
import { whatsappUrl } from "@/locales/fr/lib/contact";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title:"Combien coûte un site ? Comprendre le devis",
  description:"Google + Site + SEO : forfait annuel unique de R$ 597,00, payable par Pix, carte ou boleto, installation incluse, avec site professionnel, domaine, hébergement, mises à jour et support.",
  alternates:{canonical:"/fr/quanto-custa-criar-um-site"},
});

const factors=[
  ["Structure","Un site d’une page et un site institutionnel multipage exigent des volumes différents de planification, textes, design et vérification."],
  ["Contenu","Les textes, images et éléments déjà disponibles modifient le travail nécessaire. La proposition doit préciser qui fournit et vérifie chaque élément."],
  ["Rôles","Les formulaires, intégrations, catalogues et autres fonctionnalités doivent être détaillés avant le devis. Une boutique en ligne a son propre périmètre."],
  ["Coûts récurrents","L’enregistrement et le renouvellement du domaine, l’hébergement, les outils tiers et la maintenance doivent être détaillés. Les coûts mensuels et annuels doivent être clairs."],
];

export default function Page(){
  const schema={"@context":"https://schema.org","@type":"WebPage",name:"Combien coûte la création d’un site ?",url:`${SITE_URL}/quanto-custa-criar-um-site`,about:{"@id":`${SITE_URL}/criacao-de-sites-online#service`},publisher:{"@id":`${SITE_URL}/#organization`}};
  return <><BlogHeader current="sites"/><main id="conteudo" tabIndex={-1} className="specialist-page"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <header className="specialist-hero"><div className="shell"><Breadcrumbs items={[{name:"Accueil",href:"/fr"},{name:"Création de sites en ligne",href:"/fr/criacao-de-sites-online"},{name:"Devis de création de sites",href:"/fr/quanto-custa-criar-um-site"}]} /><p className="section-kicker"> Devis de création de site </p><h1> Combien coûte la création d’un site professionnel ? </h1><p><PriceText> L’offre Google + Site + SEO propose un forfait annuel unique de R$ 597,00, payable par Pix, carte ou boleto, avec installation incluse et une carte NFC pour les avis Google en bonus. Le site professionnel comprend domaine, hébergement, mises à jour et support, avec un périmètre détaillé dans la proposition. </PriceText></p><a className="button button-light" href={whatsappUrl("Bonjour ! Je souhaite un devis pour créer un site. Mon entreprise :")} target="_blank" rel="noopener noreferrer"> DEMANDER UN DEVIS POUR LE SITE </a></div></header>
    <section className="specialist-section"><div className="shell two-columns"><div><p className="section-kicker"> Ce qui modifie le prix </p><h2> Le même mot « site » peut désigner des projets très différents. </h2><p> Un site d’une page présentant un service n’a pas le même périmètre qu’un site institutionnel avec plusieurs rubriques, des contenus propres et des fonctionnalités supplémentaires. Un prix isolé ne permet donc pas de savoir si deux propositions livrent la même chose. </p><p><PriceText> Le forfait annuel unique coûte R$ 597,00, payable par Pix, carte ou boleto. Il comprend l’installation, la maintenance pendant 12 mois et une carte NFC pour les avis Google en bonus. La planification des pages et les responsabilités sont détaillées dans la proposition. </PriceText><Link href="/fr/criacao-de-sites-online"> Découvrez le service de création de sites avec domaine propre → </Link></p></div><div className="check-list">{<PriceText>{factors.map(([title,text])=><p key={title}><strong>{<PriceText>{title}</PriceText>}.</strong> {<PriceText>{text}</PriceText>}</p>)}</PriceText>}</div></div></section>
    <section className="process-section"><div className="shell"><p className="section-kicker"> Avant de commander </p><h2> Que demander dans un devis de site. </h2><div className="process-grid"><article><span>01</span><h3> Livrables </h3><p> Nombre de pages, textes, design pour mobile et ordinateur, vérification et publication. </p></article><article><span>02</span><h3> Domaine et hébergement </h3><p> Qui l’enregistre, qui paie le renouvellement et qui gère les accès après la livraison. </p></article><article><span>03</span><h3> Maintenance </h3><p> Ce qui sera mis à jour, pendant combien de temps et quels services sont facturés séparément. </p></article><article><span>04</span><h3> Délais et validation </h3><p> Étapes du projet, éléments à fournir par le client et nombre de cycles de révision. </p></article></div></div></section>
    <section className="faq-section"><div className="shell"><p className="section-kicker"> Questions fréquentes </p><h2> Comprendre la proposition </h2><div className="faq-list"><details><summary> Le domaine propre est-il inclus dans le prix ? </summary><p> Le domaine et l’hébergement sont inclus dans la forfait annuel. La proposition précise la titularité, les accès et les conditions du domaine. </p></details><details><summary> Le devis comprend-il la maintenance ? </summary><p> Oui. La création, les mises à jour et le support sont inclus dans l’offre annuelle Google + Site + SEO. La proposition précise le périmètre des modifications. </p></details><details><summary> Un site plus cher garantit-il la première position sur Google ? </summary><p> Non. La structure technique et le contenu peuvent aider les moteurs de recherche à comprendre les pages, mais personne ne peut garantir une position précise. </p></details></div></div></section>
    <section className="final-specialist-cta"><div className="shell"><h2> Google + Site + SEO : choisissez votre forfait. </h2><p> Dites-nous quels services vous proposez, si vous avez déjà un domaine et quelles pages vous pensez nécessaires. Ravyt accompagne les clients de tout le Brésil. </p><a className="button button-light" href={whatsappUrl("Bonjour ! Je souhaite un devis pour créer un site. Mon entreprise :")} target="_blank" rel="noopener noreferrer"> DEMANDER UN DEVIS </a></div></section>
  </main><BlogFooter/></>;
}
