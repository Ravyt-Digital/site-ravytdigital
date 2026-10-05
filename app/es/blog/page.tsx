
import {PriceText} from "@/components/i18n/Regional";
import { pageMetadata } from "@/locales/es/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/app/es/blog/posts";
import Breadcrumbs from "@/locales/es/components/Breadcrumbs";
import StructuredData from "@/locales/es/components/StructuredData";
import { SITE_URL } from "@/lib/site";

export const metadata:Metadata=pageMetadata({
  title:"Blog sobre Google, sitios web y SEO",
  description:"Guías de Ravyt sobre creación y mantenimiento de sitios web, presencia en Google y SEO para empresas.",
  alternates:{canonical:"/es/blog"},
});
export default function BlogPage(){
  const schema={"@context":"https://schema.org","@type":"Blog","@id":`${SITE_URL}/es/blog#blog`,url:`${SITE_URL}/es/blog`,name:"Blog de Ravyt Digital",description:"Guías sobre sitios web, presencia en Google y SEO.",inLanguage:"es-ES",publisher:{"@id":`${SITE_URL}/#organization`},isPartOf:{"@id":`${SITE_URL}/#website`},blogPost:posts.map(post=>({"@type":"BlogPosting","@id":`${SITE_URL}/es/blog/${post.slug}#article`,url:`${SITE_URL}/es/blog/${post.slug}`,headline:post.title}))};
  return <main id="conteudo" className="blog-page"><StructuredData data={schema}/><section className="blog-hero"><div className="shell blog-hero-inner"><Breadcrumbs items={[{name:"Inicio",href:"/es"},{name:"Blog",href:"/es/blog"}]}/><p className="blog-eyebrow"> Blog de Ravyt Digital </p><h1> Mejores decisiones para tu <em>  presencia digital. </em></h1><div className="blog-hero-bottom"><p> Guías sobre creación de sitios web, presencia en Google y SEO para empresas. </p><span>Ravyt Digital</span></div></div></section>
    <section className="blog-content"><div className="shell"><div className="blog-list-head"><div><p> Contenidos recientes </p><h2> Empieza por la decisión que necesitas tomar. </h2></div><span> Lectura práctica para planificar, contratar y mejorar tu presencia digital. </span></div><div className="post-grid">{<PriceText>{posts.map(post=><Link className="post-card" href={`/es/blog/${post.slug}`} key={post.slug}><div className="post-card-copy"><p>{<PriceText>{post.category}</PriceText>}</p><h3>{<PriceText>{post.title}</PriceText>}</h3><span>{<PriceText>{post.excerpt}</PriceText>}</span><small>{<PriceText>{post.dateLabel}</PriceText>} · {<PriceText>{post.readingTime}</PriceText>}</small></div></Link>)}</PriceText>}</div></div></section>
  </main>;
}
