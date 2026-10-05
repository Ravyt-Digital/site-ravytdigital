import PageGuidance from "@/components/i18n/PageGuidance";

import {PriceText} from "@/components/i18n/Regional";
import { pageMetadata } from "@/locales/fr/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import { BlogFooter, BlogHeader } from "@/locales/fr/components/BlogChrome";
import { whatsappUrl } from "@/locales/fr/lib/contact";
import { SITE_URL } from "@/lib/site";
import { ytala } from "@/lib/structured-data";
import StructuredData from "@/locales/fr/components/StructuredData";
import Link from "next/link";
import { posts } from "@/app/fr/blog/posts";
export const metadata: Metadata = pageMetadata({ title:"Ytala Cabral | SEO, Profil d’entreprise Google et rédaction", description:"Découvrez Ytala Cabral, responsable du SEO, du Profil d’entreprise Google et de la rédaction chez Ravyt Digital, avec une expérience en stratégie de contenu.", alternates:{canonical:"/fr/autores/ytala-cabral"} });
export default function Page(){ const schema={"@context":"https://schema.org","@type":"ProfilePage","@id":`${SITE_URL}/autores/ytala-cabral#profile`,url:`${SITE_URL}/autores/ytala-cabral`,name:"Ytala Cabral — Ravyt Digital",mainEntity:ytala}; return <><BlogHeader/><main id="conteudo" tabIndex={-1} className="specialist-page"><StructuredData data={schema}/><section className="about-specialist"><div className="shell two-columns"><div className="team-photo-ytala"><Image src="/team/ytala-cabral.webp" alt="Ytala Cabral" width={720} height={900} unoptimized/></div><div><p className="section-kicker"> Spécialiste de Ravyt Digital </p><h1>Ytala Cabral</h1><p> Ytala Cabral est rédactrice et dirige le SEO, le Profil d’entreprise Google et la stratégie de communication chez Ravyt Digital. </p><p> Chez Ravyt, elle relie intention de recherche, contenu et rédaction pour aider les entreprises à être trouvées et comprises. Son expérience rédactionnelle contribue à présenter les services clairement. </p><a className="button button-dark" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"> PARLER À YTALA </a></div></div></section><section className="insights-section"><div className="shell"><p className="section-kicker"> Contenus de Ytala Cabral </p><h2> Articles sur la communication en psychologie parentale </h2><div className="insights-grid">{<PriceText>{posts.filter(post=>!post.author).map(post=><Link key={post.slug} href={`/fr/blog/${post.slug}`}><strong>{<PriceText>{post.title}</PriceText>}</strong><span>{<PriceText>{post.excerpt}</PriceText>}</span></Link>)}</PriceText>}</div></div></section><PageGuidance kind="author" lang="fr"/></main><BlogFooter/></>; }
