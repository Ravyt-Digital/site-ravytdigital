
import {PriceText} from "@/components/i18n/Regional";
import Breadcrumbs from "@/locales/en/components/Breadcrumbs";
import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/locales/en/lib/metadata";
import { BlogFooter, BlogHeader } from "@/locales/en/components/BlogChrome";
import { whatsappUrl } from "@/locales/en/lib/contact";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title:"How Much Does a Website Cost? Understanding the Quote",
  description:"Google + Website + SEO: single annual plan of 597, payable by Pix, card or boleto with setup included, a professional website, domain, hosting, updates and support.",
  alternates:{canonical:"/en/quanto-custa-criar-um-site"},
});

const factors=[
  ["Structure","A single-page website and a multipage corporate website require different amounts of planning, copy, design and review."],
  ["Content","Existing copy, images and materials affect the work required. The proposal must state who supplies and reviews each item."],
  ["Roles","Forms, integrations, catalogs and other features must be detailed before the quote. An online store has its own scope."],
  ["Recurring costs","Domain registration and renewal, hosting, third-party tools and maintenance must be itemized. Monthly and annual charges must be clear."],
];

export default function Page(){
  const schema={"@context":"https://schema.org","@type":"WebPage",name:"How much does a website cost?",url:`${SITE_URL}/quanto-custa-criar-um-site`,about:{"@id":`${SITE_URL}/criacao-de-sites-online#service`},publisher:{"@id":`${SITE_URL}/#organization`}};
  return <><BlogHeader current="sites"/><main id="conteudo" tabIndex={-1} className="specialist-page"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <header className="specialist-hero"><div className="shell"><Breadcrumbs items={[{name:"Home",href:"/en"},{name:"Online Website Creation",href:"/en/criacao-de-sites-online"},{name:"Website creation quote",href:"/en/quanto-custa-criar-um-site"}]} /><p className="section-kicker"> Website creation quote </p><h1> How much does a professional website cost? </h1><p><PriceText> The Google + Website + SEO offer has a single annual plan of R$ 597,00, payable by Pix, card or boleto, with setup included and a Google Review NFC Card as a bonus. The professional website includes domain, hosting, updates and support, with the scope detailed in the proposal. </PriceText></p><a className="button button-light" href={whatsappUrl("Hello! I’d like a quote to create a website. My business is:")} target="_blank" rel="noopener noreferrer"> REQUEST A WEBSITE QUOTE </a></div></header>
    <section className="specialist-section"><div className="shell two-columns"><div><p className="section-kicker"> What affects the price </p><h2> The same word “website” can describe very different projects. </h2><p> A one-page site presenting a service has a different scope from a corporate website with multiple areas, original content and additional features. A price alone therefore does not tell you whether two proposals deliver the same thing. </p><p><PriceText> The single annual plan costs R$ 597,00, payable by Pix, card or boleto. It includes setup, maintenance for 12 months and a Google Review NFC Card as a bonus. Page planning and responsibilities are detailed in the proposal. </PriceText><Link href="/en/criacao-de-sites-online"> See the website creation service with a custom domain → </Link></p></div><div className="check-list">{<PriceText>{factors.map(([title,text])=><p key={title}><strong>{<PriceText>{title}</PriceText>}.</strong> {<PriceText>{text}</PriceText>}</p>)}</PriceText>}</div></div></section>
    <section className="process-section"><div className="shell"><p className="section-kicker"> Before hiring </p><h2> What to ask for in a website quote. </h2><div className="process-grid"><article><span>01</span><h3> Deliverables </h3><p> Number of pages, copy, design for phones and computers, review and publication. </p></article><article><span>02</span><h3> Domain and hosting </h3><p> Who registers it, who pays renewal and who manages access after delivery. </p></article><article><span>03</span><h3> Maintenance </h3><p> What will be updated, for how long and which services are charged separately. </p></article><article><span>04</span><h3> Schedule and approval </h3><p> Project stages, materials needed from the client and number of revision rounds. </p></article></div></div></section>
    <section className="faq-section"><div className="shell"><p className="section-kicker"> Frequently asked questions </p><h2> Understand the proposal </h2><div className="faq-list"><details><summary> Is a custom domain included in the price? </summary><p> Domain and hosting are included in the annual plan. The proposal specifies domain ownership, access and conditions. </p></details><details><summary> Does the quote include maintenance? </summary><p> Yes. Creation, updates and support are included in the annual Google + Website + SEO offer. The proposal specifies the scope of changes. </p></details><details><summary> Does a more expensive website guarantee first place on Google? </summary><p> No. Technical structure and content can help search engines understand pages, but nobody can guarantee a specific position. </p></details></div></div></section>
    <section className="final-specialist-cta"><div className="shell"><h2> Google + Website + SEO: choose your plan. </h2><p> Tell us what services you offer, whether you already have a domain and which pages you think you need. Ravyt serves clients worldwide. </p><a className="button button-light" href={whatsappUrl("Hello! I’d like a quote to create a website. My business is:")} target="_blank" rel="noopener noreferrer"> REQUEST A QUOTE </a></div></section>
  </main><BlogFooter/></>;
}
