import { ChecklistCard } from '@/components/ChecklistResource';
import PageGuidance from "@/components/i18n/PageGuidance";

import {PriceText} from "@/components/i18n/Regional";
import { pageMetadata } from "@/locales/fr/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/app/fr/blog/posts";
import Breadcrumbs from "@/locales/fr/components/Breadcrumbs";
import StructuredData from "@/locales/fr/components/StructuredData";
import { SITE_URL } from "@/lib/site";

export const metadata:Metadata=pageMetadata({
  title:"Blog sur Google, les sites et le SEO",
  description:"Guides de Ravyt sur la création et la maintenance de sites, la présence sur Google et le SEO pour les entreprises.",
  alternates:{canonical:"/fr/blog"},
});
export default function BlogPage(){
  const schema={"@context":"https://schema.org","@type":"Blog","@id":`${SITE_URL}/fr/blog#blog`,url:`${SITE_URL}/fr/blog`,name:"Blog Ravyt Digital",description:"Guides sur les sites, la présence sur Google et le SEO.",inLanguage:"fr-FR",publisher:{"@id":`${SITE_URL}/#organization`},isPartOf:{"@id":`${SITE_URL}/#website`},blogPost:posts.map(post=>({"@type":"BlogPosting","@id":`${SITE_URL}/fr/blog/${post.slug}#article`,url:`${SITE_URL}/fr/blog/${post.slug}`,headline:post.title}))};
  return <main id="conteudo" className="blog-page"><StructuredData data={schema}/><section className="blog-hero"><div className="shell blog-hero-inner"><Breadcrumbs items={[{name:"Accueil",href:"/fr"},{name:"Blog",href:"/fr/blog"}]}/><p className="blog-eyebrow">Blog Ravyt Digital</p><h1> De meilleures décisions pour votre <em>  présence numérique. </em></h1><div className="blog-hero-bottom"><p> Guides sur la création de sites, la présence sur Google et le SEO pour les entreprises. </p><span>Ravyt Digital</span></div></div></section>
    <section className="blog-content"><div className="shell"><div className="blog-list-head"><div><p> Contenus récents </p><h2> Commencez par la décision que vous devez prendre. </h2></div><span> Des lectures pratiques pour planifier, commander et améliorer votre présence numérique. </span></div><div className="post-grid">{<PriceText>{posts.map(post=><Link className="post-card" href={`/fr/blog/${post.slug}`} key={post.slug}><div className="post-card-copy"><p>{<PriceText>{post.category}</PriceText>}</p><h3>{<PriceText>{post.title}</PriceText>}</h3><span>{<PriceText>{post.excerpt}</PriceText>}</span><small>{<PriceText>{post.dateLabel}</PriceText>} · {<PriceText>{post.readingTime}</PriceText>}</small></div></Link>)}</PriceText>}</div></div></section>
  <ChecklistCard lang="fr"/><PageGuidance kind="blog" lang="fr"/></main>;
}
