import {BrandFinal} from '@/components/BrandContent';
import BlogPostCard from '@/components/BlogPostCard';
import { ChecklistCard } from '@/components/ChecklistResource';
import PageGuidance from "@/components/i18n/PageGuidance";

import {PriceText} from "@/components/i18n/Regional";
import { pageMetadata } from "@/locales/es/lib/metadata";
import type { Metadata } from "next";
import { posts } from "@/app/es/blog/posts";
import Breadcrumbs from "@/locales/es/components/Breadcrumbs";
import StructuredData from "@/locales/es/components/StructuredData";
import { SITE_URL } from "@/lib/site";

export const metadata:Metadata=pageMetadata({
  title:"Blog sobre Google, sitios web y SEO",
  description:"Guías de Ravyt sobre creación y mantenimiento de sitios web, presencia en Google y SEO para profesionales independientes.",
  alternates:{canonical:"/es/blog"},
});
export default function BlogPage(){
  const schema={"@context":"https://schema.org","@type":"Blog","@id":`${SITE_URL}/es/blog#blog`,url:`${SITE_URL}/es/blog`,name:"Blog de Ravyt Digital",description:"Guías sobre sitios web, presencia en Google y SEO.",inLanguage:"es-ES",publisher:{"@id":`${SITE_URL}/#organization`},isPartOf:{"@id":`${SITE_URL}/#website`},blogPost:posts.map(post=>({"@type":"BlogPosting","@id":`${SITE_URL}/es/blog/${post.slug}#article`,url:`${SITE_URL}/es/blog/${post.slug}`,headline:post.title}))};
  return <main id="conteudo" className="blog-page"><StructuredData data={schema}/><section className="blog-hero"><div className="shell blog-hero-inner"><Breadcrumbs items={[{name:"Inicio",href:"/es"},{name:"Blog",href:"/es/blog"}]}/><p className="blog-eyebrow"> Blog de Ravyt Digital </p><h1> Mejores decisiones para tu <em>  presencia digital. </em></h1><div className="blog-hero-bottom"><p> Guías sobre creación de sitios web, presencia en Google y SEO para profesionales independientes. </p><span>Ravyt Digital</span></div></div></section>
    <section className="blog-content"><div className="shell"><div className="blog-list-head"><div><p> Contenidos recientes </p><h2> Empieza por la decisión que necesitas tomar. </h2></div><span> Lectura práctica para planificar, contratar y mejorar tu presencia digital. </span></div><div className="post-grid">{<PriceText>{posts.map(post=><BlogPostCard key={post.slug} post={post} lang="es"/>)}</PriceText>}</div></div></section>
  <ChecklistCard lang="es"/><PageGuidance kind="blog" lang="es"/><BrandFinal lang="es"/></main>;
}
