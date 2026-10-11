import PageGuidance from "@/components/i18n/PageGuidance";

import { pageMetadata } from "@/locales/fr/lib/metadata";
import type { Metadata } from "next";
import ResponsiveWebp from "@/components/ResponsiveWebp";
import BlogPostCard from "@/components/BlogPostCard";
import { BlogFooter, BlogHeader } from "@/locales/fr/components/BlogChrome";
import { whatsappUrl } from "@/locales/fr/lib/contact";
import { SITE_URL } from "@/lib/site";
import { ytala } from "@/lib/structured-data";
import StructuredData from "@/locales/fr/components/StructuredData";
import { posts } from "@/app/fr/blog/posts";
export const metadata: Metadata = pageMetadata({ title:"Ytala Cabral | SEO, Profil d’entreprise Google et rédaction", description:"Découvrez Ytala Cabral, responsable du SEO, du Profil d’entreprise Google et de la rédaction chez Ravyt Digital, avec une expérience en stratégie de contenu.", alternates:{canonical:"/fr/autores/ytala-cabral"} });
export default function Page(){ const schema={"@context":"https://schema.org","@type":"ProfilePage","@id":`${SITE_URL}/fr/autores/ytala-cabral#profile`,url:`${SITE_URL}/fr/autores/ytala-cabral`,name:"Ytala Cabral — Ravyt Digital",mainEntity:ytala}; return <><BlogHeader/><main id="conteudo" tabIndex={-1} className="specialist-page"><StructuredData data={schema}/><section className="about-specialist"><div className="shell two-columns"><div className="team-photo-ytala"><ResponsiveWebp src="/team/ytala-cabral.webp" alt="Ytala Cabral" width={1200} height={1200} priority/></div><div><p className="section-kicker"> Spécialiste de Ravyt Digital </p><h1>Ytala Cabral</h1><p> Ytala Cabral est rédactrice et dirige le SEO, le Profil d’entreprise Google et la stratégie de communication chez Ravyt Digital. </p><p> Chez Ravyt, elle relie intention de recherche, contenu et rédaction pour aider les entreprises à être trouvées et comprises. Son expérience rédactionnelle contribue à présenter les services clairement. </p><a className="button button-dark" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"> PARLER À YTALA </a></div></div></section><section className="insights-section"><div className="shell"><p className="section-kicker">Contenus de Ytala Cabral</p><h2>Articles sur Google, le contenu et le SEO</h2><div className="post-grid">{posts.filter(post=>!post.author||post.author==='Ytala Cabral').map(post=><BlogPostCard key={post.slug} post={post} lang="fr"/>)}</div></div></section><PageGuidance kind="author" lang="fr"/></main><BlogFooter/></>; }
