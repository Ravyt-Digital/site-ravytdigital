import PageGuidance from "@/components/i18n/PageGuidance";

import { pageMetadata } from "@/locales/en/lib/metadata";
import type { Metadata } from "next";
import ResponsiveWebp from "@/components/ResponsiveWebp";
import BlogPostCard from "@/components/BlogPostCard";
import { BlogFooter, BlogHeader } from "@/locales/en/components/BlogChrome";
import { whatsappUrl } from "@/locales/en/lib/contact";
import { SITE_URL } from "@/lib/site";
import { ytala } from "@/lib/structured-data";
import StructuredData from "@/locales/en/components/StructuredData";
import { posts } from "@/app/en/blog/posts";
export const metadata: Metadata = pageMetadata({ title:"Ytala Cabral | SEO, Google Business Profile and Copywriting", description:"Meet Ytala Cabral, responsible for SEO, Google Business Profile and copywriting at Ravyt Digital, with experience in content strategy.", alternates:{canonical:"/en/autores/ytala-cabral"} });
export default function Page(){ const schema={"@context":"https://schema.org","@type":"ProfilePage","@id":`${SITE_URL}/en/autores/ytala-cabral#profile`,url:`${SITE_URL}/en/autores/ytala-cabral`,name:"Ytala Cabral — Ravyt Digital",mainEntity:ytala}; return <><BlogHeader/><main id="conteudo" tabIndex={-1} className="specialist-page"><StructuredData data={schema}/><section className="about-specialist"><div className="shell two-columns"><div className="team-photo-ytala"><ResponsiveWebp src="/team/ytala-cabral.webp" alt="Ytala Cabral" width={1200} height={1200} priority/></div><div><p className="section-kicker"> Ravyt Digital specialist </p><h1>Ytala Cabral</h1><p> Ytala Cabral is a copywriter and leads SEO, Google Business Profile and messaging strategy at Ravyt Digital. </p><p> At Ravyt, she connects search intent, content and copywriting to help businesses be found and understood. Her writing experience helps present services clearly. </p><a className="button button-dark" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"> TALK TO YTALA </a></div></div></section><section className="insights-section"><div className="shell"><p className="section-kicker">Content by Ytala Cabral</p><h2>Articles on Google, content and SEO</h2><div className="post-grid">{posts.filter(post=>!post.author||post.author==='Ytala Cabral').map(post=><BlogPostCard key={post.slug} post={post} lang="en"/>)}</div></div></section><PageGuidance kind="author" lang="en"/></main><BlogFooter/></>; }
