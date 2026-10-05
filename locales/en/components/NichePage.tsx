import {ExchangeNote} from "@/components/i18n/Regional";

import {PriceText} from "@/components/i18n/Regional";
import Link from 'next/link';
import { BlogFooter, BlogHeader } from "@/locales/en/components/BlogChrome";
import { DiagnosticCTA } from "@/locales/en/components/Commercial";
import ScrollReveal from "@/locales/en/components/ScrollReveal";

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
    label: "For engineering companies",
    heading: "Website for engineering companies, Google and SEO.",
    intro: "Present your specialties, projects and service areas clearly to people looking for an engineering company. Ravyt creates and maintains your website and organizes your search presence.",
    challenge: "Before requesting a proposal, customers need to understand what you do.",
    challengeText: "People searching for an engineering company want to identify the types of projects served, the team’s experience and how to start a conversation. A website with clear pages for each specialty helps answer these questions.",
    site: "We structure pages for specialties, projects, team and contact, with functional mobile navigation. Domain, hosting, updates and support are part of the subscription.",
    google: "We organize Google Business Profile data, when the business is eligible, to accurately represent its location, services and service delivery.",
    seo: "We work on titles, content, internal links and technical aspects so service and project pages can be understood by search engines.",
    example: "A visual reference for engineering",
    exampleText: "Vértice Norte Engenharia, shown in the portfolio as a conceptual demonstration, illustrates a way to organize specialties and projects without confusing visitors.",
  },
  arquitetura: {
    label: "For architecture firms",
    heading: "Website for architecture firms, Google and SEO.",
    intro: "Your projects need to show your work and explain the hiring process. Ravyt creates a professional website for your firm, handles maintenance and works on its Google search structure.",
    challenge: "A portfolio needs to help visitors make a decision.",
    challengeText: "Photos attract attention, but potential clients also want to know the type of projects developed, the area served, work stages and how to contact you. Context and organization make a portfolio more useful.",
    site: "We create project and service pages with well-presented images, concise copy and clear paths to contact. The subscription includes domain, hosting, updates and support.",
    google: "When the firm is eligible for a Google Business Profile, we ensure consistent location, service and contact information.",
    seo: "We organize structure, titles, descriptions and internal links to connect services and projects to relevant searches, without promising specific rankings.",
    example: "A visual reference for architecture",
    exampleText: "Nina Valença Arquitetura is a conceptual portfolio demonstration showing projects with large images and navigation designed to showcase the work.",
  },
  moveis: {
    label: "For custom furniture companies",
    heading: "Website for custom furniture companies, Google and SEO.",
    intro: "Show spaces, materials and custom solutions on a website that makes requesting a quote easy. Ravyt combines website creation and maintenance, Google presence and SEO optimizations.",
    challenge: "Every space needs to give customers a clear next step.",
    challengeText: "People searching for custom furniture compare styles and possibilities before talking to a company. A presentation organized by room can help visitors recognize what they want and request service.",
    site: "We create a showcase of spaces and services with essential information and mobile-accessible contact. Domain, hosting, updates and support are included in the subscription.",
    google: "For eligible businesses, we organize the Google Business Profile with consistent information about operations and the local service area.",
    seo: "We structure pages for spaces and services with specific content and titles, plus technical improvements and ongoing monitoring.",
    example: "A visual reference for custom furniture",
    exampleText: "Lumea Planejados, a conceptual portfolio demonstration, highlights spaces to help visitors imagine product applications.",
  },
};

export default function NichePage({ niche }: { niche: Niche }) {
  return <><BlogHeader/><main className="rv" id="conteudo" tabIndex={-1}><ScrollReveal/>
    <section className="rv-page-hero"><div className="shell"><p className="rv-label">{<PriceText>{niche.label}</PriceText>}</p><h1>{<PriceText>{niche.heading}</PriceText>}</h1><p className="rv-lead">{<PriceText>{niche.intro}</PriceText>}</p><div className="rv-actions"><DiagnosticCTA/></div></div></section>
    <section className="rv-section" data-reveal><div className="shell"><p className="rv-label"> The starting point </p><h2>{<PriceText>{niche.challenge}</PriceText>}</h2><p className="rv-intro">{<PriceText>{niche.challengeText}</PriceText>}</p></div></section>
    <section className="rv-section rv-services" data-reveal><div className="shell"><p className="rv-label"> Google + Website + SEO </p><h2> A digital presence with three pillars. </h2><div className="rv-method"><article><span className="rv-step"> 01 / WEBSITE </span><h3> Professional website </h3><p>{<PriceText>{niche.site}</PriceText>}</p></article><article><span className="rv-step">02 / GOOGLE</span><h3> Google Business Profile </h3><p>{<PriceText>{niche.google}</PriceText>}</p></article><article><span className="rv-step">03 / SEO</span><h3> Search structure </h3><p>{<PriceText>{niche.seo}</PriceText>}</p></article></div></div></section>
    <section className="rv-section rv-dark" data-reveal><div className="shell"><p className="rv-label"> Portfolio </p><h2>{<PriceText>{niche.example}</PriceText>}</h2><p className="rv-intro">{<PriceText>{niche.exampleText}</PriceText>}</p><Link className="rv-text-link" href="/en/cases"> See demonstrations and published websites → </Link></div></section>
    <section className="rv-section rv-offer" data-reveal><div className="shell rv-offer-grid"><div><p className="rv-label"> Remote service worldwide </p><h2> An ongoing service for your business. </h2><p className="rv-intro"> Google Business Profile, subject to eligibility, professional website, domain, hosting, updates, support and SEO optimizations. The scope is detailed in the proposal. </p></div><div className="rv-offer-price"><p> Google + Website + SEO </p><strong><PriceText>R$ 597,00 </PriceText><small> /year </small></strong><ExchangeNote/><span className="rv-monthly"> <PriceText>Single annual plan · Pix, card or boleto </PriceText></span><small> No setup fee. Google Review NFC Card (available only in Brazil) included as a bonus. </small><DiagnosticCTA/></div></div></section>
  </main><BlogFooter/></>;
}
