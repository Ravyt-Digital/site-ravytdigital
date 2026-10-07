
import {PriceText} from "@/components/i18n/Regional";
import Breadcrumbs from "@/locales/fr/components/Breadcrumbs";
import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/locales/fr/lib/metadata";
import { BlogFooter, BlogHeader } from "@/locales/fr/components/BlogChrome";
import { whatsappUrl } from "@/locales/fr/lib/contact";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title:"Création de sites avec votre propre domaine",
  description:"Création de sites avec un domaine propre pour les entreprises et les professionnels. Planification, textes, design adaptatif et structure technique SEO. Services dans le monde entier.",
  alternates:{canonical:"/fr/criacao-de-sites-online"},
});
const steps=[
  ["01","Compréhension","Nous découvrons vos services, votre public, vos objectifs et les éléments disponibles."],
  ["02","Structure et textes","Nous organisons les pages, la navigation et les textes pour présenter votre offre clairement."],
  ["03","Design et construction","Nous créons une expérience adaptative, avec un contact accessible sur mobile et ordinateur."],
  ["04","Vérification et publication","Nous vérifions les contenus, les liens et le fonctionnement avant la mise en ligne."],
];
const faqs=[
  ["Le site peut-il utiliser mon propre domaine ?","Oui. Le projet peut être publié sur votre propre domaine. Le domaine et l’hébergement font partie de l’offre annuelle Google + Site + SEO ; les conditions précises sont définies dans la proposition."],
  ["Ravyt accompagne-t-elle des clients en dehors de São Paulo ?","Oui. La création de sites est réalisée à distance pour les clients du monde entier."],
  ["Le site apparaîtra-t-il sur la première page de Google ?","Aucune position n’est garantie. Nous structurons les titres, descriptions, contenus, navigation et exigences techniques pour que les moteurs de recherche puissent explorer et comprendre les pages."],
  ["Assurez-vous la maintenance après la livraison ?","La création, les mises à jour et le support du site font partie de l’offre annuelle Google + Site + SEO. La proposition définit le périmètre et les responsabilités."],
];
export default function Page(){
  const schema={"@context":"https://schema.org","@graph":[{"@type":"Service","@id":`${SITE_URL}/criacao-de-sites-online#service`,name:"Création de sites en ligne",serviceType:"Création et maintenance de sites",url:`${SITE_URL}/criacao-de-sites-online`,description:"Planification, rédaction, design et construction de sites avec domaine propre pour les professionnels et les entreprises.",provider:{"@id":`${SITE_URL}/#organization`},areaServed:{"@type":"Country",name:"Brésil"}},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Accueil",item:SITE_URL},{"@type":"ListItem",position:2,name:"Création de sites en ligne",item:`${SITE_URL}/criacao-de-sites-online`}]}]};
  return <><BlogHeader current="sites"/><main id="conteudo" tabIndex={-1} className="specialist-page"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <header className="specialist-hero"><div className="shell"><Breadcrumbs structured={false} items={[{name:"Accueil",href:"/fr"},{name:"Création de sites en ligne",href:"/fr/criacao-de-sites-online"}]} /><p className="section-kicker"> Création de sites en ligne · Brésil </p><h1> Création de site avec votre propre domaine pour votre entreprise. </h1><p> Nous concevons et réalisons des sites institutionnels adaptatifs pour présenter vos services, inspirer confiance et faciliter le contact. Chaque page tient compte de votre public et de la façon dont il recherche votre entreprise. </p><a className="button button-light" href={whatsappUrl("Bonjour ! Je souhaite parler de la création d’un site avec mon propre domaine.")} target="_blank" rel="noopener noreferrer"> PARLONS DE MON SITE </a></div></header>
    <section className="specialist-section"><div className="shell two-columns"><div><p className="section-kicker"> De l’idée à l’adresse en ligne </p><h2> Un site institutionnel clair, rapide à comprendre et facile à utiliser. </h2><p> En tant qu’entreprise spécialisée dans la création de sites, Ravyt organise l’information avant de construire : ce que vous proposez, à qui, pourquoi choisir votre travail et comment vous contacter. </p><p> La construction de sites comprend des pages adaptées au mobile, des liens fonctionnels et une base technique SEO. Le format et le nombre de pages sont définis selon chaque projet. <a href="/fr/quanto-custa-criar-um-site"> Découvrez ce qui entre dans le devis d’un site → </a></p></div><div className="check-list"><p> Planification de la structure et de la navigation </p><p> Textes pour présenter les services et guider la prise de contact </p><p> Design adaptatif pour mobile et ordinateur </p><p> Configuration pour la publication avec votre propre domaine </p><p> Titres, descriptions et structure technique SEO </p><p> Vérification des liens, du contenu et du fonctionnement </p></div></div></section>
    <section className="process-section"><div className="shell"><p className="section-kicker"> Comment nous créons </p><h2> Un processus du brief à la publication. </h2><div className="process-grid">{<PriceText>{steps.map(([n,t,d])=><article key={n}><span>{<PriceText>{n}</PriceText>}</span><h3>{<PriceText>{t}</PriceText>}</h3><p>{<PriceText>{d}</PriceText>}</p></article>)}</PriceText>}</div></div></section>
    <section className="difference-section"><div className="shell two-columns"><div><p className="section-kicker"> Après la livraison </p><h2> Votre site doit rester utile. </h2></div><div><p><PriceText> Les informations changent, les services évoluent et les liens doivent continuer à fonctionner. La création et la maintenance du site font partie de l’offre Google + Site + SEO avec le forfait annuel unique de [[annual]] ([[monthly]]/mois équivalent), installation incluse et paiement par Pix, carte ou boleto. Le périmètre est défini dans la proposition. </PriceText></p><p> Avant de définir les pages, lisez <Link href="/fr/blog/site-institucional-paginas-essenciais">  ce que votre site institutionnel doit expliquer → </Link></p></div></div></section>
    <section className="faq-section"><div className="shell"><p className="section-kicker"> Questions fréquentes </p><h2> Avant de créer votre site </h2><div className="faq-list">{<PriceText>{faqs.map(([q,a])=><details key={q}><summary>{<PriceText>{q}</PriceText>}</summary><p>{<PriceText>{a}</PriceText>}</p></details>)}</PriceText>}</div></div></section>
    <section className="final-specialist-cta"><div className="shell"><h2> Planifions votre site ? </h2><p> Dites-nous ce que fait votre entreprise et quelles pages elle doit créer. Nous accompagnons les clients du monde entier. </p><a className="button button-light" href={whatsappUrl("Bonjour ! Je souhaite parler de la création d’un site avec mon propre domaine.")} target="_blank" rel="noopener noreferrer"> PARLER SUR WHATSAPP </a></div></section>
  </main><BlogFooter/></>;
}
