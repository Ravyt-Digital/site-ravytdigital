
import {PriceText} from "@/components/i18n/Regional";
import { pageMetadata } from "@/locales/en/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import { BlogFooter, BlogHeader } from "@/locales/en/components/BlogChrome";
import { whatsappUrl } from "@/locales/en/lib/contact";
import { SITE_URL } from "@/lib/site";
import { ytala } from "@/lib/structured-data";
import StructuredData from "@/locales/en/components/StructuredData";
import Link from "next/link";
import { posts } from "@/app/en/blog/posts";
export const metadata: Metadata = pageMetadata({ title:"Ytala Cabral | SEO, Google Business Profile and Copywriting", description:"Meet Ytala Cabral, responsible for SEO, Google Business Profile and copywriting at Ravyt Digital, with experience in content strategy.", alternates:{canonical:"/en/autores/ytala-cabral"} });
export default function Page(){ const schema={"@context":"https://schema.org","@type":"ProfilePage","@id":`${SITE_URL}/autores/ytala-cabral#profile`,url:`${SITE_URL}/autores/ytala-cabral`,name:"Ytala Cabral — Ravyt Digital",mainEntity:ytala}; return <><BlogHeader/><main id="conteudo" tabIndex={-1} className="specialist-page"><StructuredData data={schema}/><section className="about-specialist"><div className="shell two-columns"><div className="team-photo-ytala"><Image src="/team/ytala-cabral.webp" alt="Ytala Cabral" width={720} height={900} unoptimized/></div><div><p className="section-kicker"> Ravyt Digital specialist </p><h1>Ytala Cabral</h1><p> Ytala Cabral is a copywriter and leads SEO, Google Business Profile and messaging strategy at Ravyt Digital. </p><p> At Ravyt, she connects search intent, content and copywriting to help businesses be found and understood. Her writing experience helps present services clearly. </p><a className="button button-dark" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"> TALK TO YTALA </a></div></div></section><section className="insights-section"><div className="shell"><p className="section-kicker"> Content by Ytala Cabral </p><h2> Articles on communication for Parenting Psychology </h2><div className="insights-grid">{<PriceText>{posts.filter(post=>!post.author).map(post=><Link key={post.slug} href={`/en/blog/${post.slug}`}><strong>{<PriceText>{post.title}</PriceText>}</strong><span>{<PriceText>{post.excerpt}</PriceText>}</span></Link>)}</PriceText>}</div></div></section></main><BlogFooter/></>; }
