
import {PriceText} from "@/components/i18n/Regional";
import Breadcrumbs from "@/locales/en/components/Breadcrumbs";
import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/locales/en/lib/metadata";
import { BlogFooter, BlogHeader } from "@/locales/en/components/BlogChrome";
import { whatsappUrl } from "@/locales/en/lib/contact";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title:"Website Creation with Your Own Domain",
  description:"Website creation with a custom domain for businesses and professionals. Planning, copy, responsive design and technical SEO structure. Serving clients worldwide.",
  alternates:{canonical:"/en/criacao-de-sites-online"},
});
const steps=[
  ["01","Understanding","We learn about your services, audience, goals and available materials."],
  ["02","Structure and copy","We organize pages, navigation and copy to present your offer clearly."],
  ["03","Design and development","We create a responsive experience with accessible contact options on phones and computers."],
  ["04","Review and publication","We check content, links and functionality before the website goes live."],
];
const faqs=[
  ["Can the website use my own domain?","Yes. The project can be published on a custom domain. Domain and hosting are part of the annual Google + Website + SEO offer; specific conditions are defined in the proposal."],
  ["Does Ravyt serve clients outside São Paulo?","Yes. Website creation is provided remotely to clients worldwide."],
  ["Will the website appear on Google’s first page?","No ranking is guaranteed. We structure titles, descriptions, content, navigation and technical requirements so search engines can crawl and understand the pages."],
  ["Do you provide maintenance after delivery?","Website creation, updates and support are part of the annual Google + Website + SEO offer. The proposal defines the scope and responsibilities."],
];
export default function Page(){
  const schema={"@context":"https://schema.org","@graph":[{"@type":"Service","@id":`${SITE_URL}/criacao-de-sites-online#service`,name:"Online Website Creation",serviceType:"Website creation and maintenance",url:`${SITE_URL}/criacao-de-sites-online`,description:"Planning, copywriting, design and development of websites with custom domains for professionals and businesses.",provider:{"@id":`${SITE_URL}/#organization`},areaServed:{"@type":"Country",name:"Brazil"}},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:SITE_URL},{"@type":"ListItem",position:2,name:"Online Website Creation",item:`${SITE_URL}/criacao-de-sites-online`}]}]};
  return <><BlogHeader current="sites"/><main id="conteudo" tabIndex={-1} className="specialist-page"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <header className="specialist-hero"><div className="shell"><Breadcrumbs structured={false} items={[{name:"Home",href:"/en"},{name:"Online Website Creation",href:"/en/criacao-de-sites-online"}]} /><p className="section-kicker"> Online website creation · Brazil </p><h1> Website creation with your own domain for your business. </h1><p> We plan and build responsive corporate websites to present your services, inspire trust and make contact easier. Each page considers your audience and how they search for your business. </p><a className="button button-light" href={whatsappUrl("Hello! I’d like to discuss creating a website with my own domain.")} target="_blank" rel="noopener noreferrer"> LET’S TALK ABOUT MY WEBSITE </a></div></header>
    <section className="specialist-section"><div className="shell two-columns"><div><p className="section-kicker"> From idea to web address </p><h2> A clear corporate website, quick to understand and easy to use. </h2><p> As a company specializing in website creation, Ravyt organizes information before building: what you offer, who it is for, why choose your work and how to contact you. </p><p> Website development includes mobile-friendly pages, working links and a technical SEO foundation. The format and number of pages are defined for each project. <a href="/en/quanto-custa-criar-um-site"> See what goes into a website quote → </a></p></div><div className="check-list"><p> Planning the structure and navigation </p><p> Copywriting to present services and guide contact </p><p> Responsive design for phones and computers </p><p> Configuration for publication on your own domain </p><p> Titles, descriptions and technical SEO structure </p><p> Review of links, content and functionality </p></div></div></section>
    <section className="process-section"><div className="shell"><p className="section-kicker"> How we create </p><h2> A process from briefing to publication. </h2><div className="process-grid">{<PriceText>{steps.map(([n,t,d])=><article key={n}><span>{<PriceText>{n}</PriceText>}</span><h3>{<PriceText>{t}</PriceText>}</h3><p>{<PriceText>{d}</PriceText>}</p></article>)}</PriceText>}</div></div></section>
    <section className="difference-section"><div className="shell two-columns"><div><p className="section-kicker"> After delivery </p><h2> Your website needs to stay useful. </h2></div><div><p><PriceText> Information changes, services evolve and links need to keep working. Website creation and maintenance are part of the Google + Website + SEO offer under the single annual plan of R$ 597,00, with setup included and payment by Pix, card or boleto. The scope is defined in the proposal. </PriceText></p><p> Before defining the pages, read <Link href="/en/blog/site-institucional-paginas-essenciais">  what your corporate website needs to explain → </Link></p></div></div></section>
    <section className="faq-section"><div className="shell"><p className="section-kicker"> Frequently asked questions </p><h2> Before creating your website </h2><div className="faq-list">{<PriceText>{faqs.map(([q,a])=><details key={q}><summary>{<PriceText>{q}</PriceText>}</summary><p>{<PriceText>{a}</PriceText>}</p></details>)}</PriceText>}</div></div></section>
    <section className="final-specialist-cta"><div className="shell"><h2> Shall we plan your website? </h2><p> Tell us what your business does and which pages it needs. We serve clients worldwide. </p><a className="button button-light" href={whatsappUrl("Hello! I’d like to discuss creating a website with my own domain.")} target="_blank" rel="noopener noreferrer"> TALK ON WHATSAPP </a></div></section>
  </main><BlogFooter/></>;
}
