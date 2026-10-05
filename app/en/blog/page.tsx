import { ChecklistCard } from '@/components/ChecklistResource';
import PageGuidance from "@/components/i18n/PageGuidance";

import {PriceText} from "@/components/i18n/Regional";
import { pageMetadata } from "@/locales/en/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/app/en/blog/posts";
import Breadcrumbs from "@/locales/en/components/Breadcrumbs";
import StructuredData from "@/locales/en/components/StructuredData";
import { SITE_URL } from "@/lib/site";

export const metadata:Metadata=pageMetadata({
  title:"Blog about Google, Websites and SEO",
  description:"Ravyt guides on website creation and maintenance, Google presence and SEO for businesses.",
  alternates:{canonical:"/en/blog"},
});
export default function BlogPage(){
  const schema={"@context":"https://schema.org","@type":"Blog","@id":`${SITE_URL}/en/blog#blog`,url:`${SITE_URL}/en/blog`,name:"Ravyt Digital Blog",description:"Guides on websites, Google presence and SEO.",inLanguage:"en-US",publisher:{"@id":`${SITE_URL}/#organization`},isPartOf:{"@id":`${SITE_URL}/#website`},blogPost:posts.map(post=>({"@type":"BlogPosting","@id":`${SITE_URL}/en/blog/${post.slug}#article`,url:`${SITE_URL}/en/blog/${post.slug}`,headline:post.title}))};
  return <main id="conteudo" className="blog-page"><StructuredData data={schema}/><section className="blog-hero"><div className="shell blog-hero-inner"><Breadcrumbs items={[{name:"Home",href:"/en"},{name:"Blog",href:"/en/blog"}]}/><p className="blog-eyebrow"> Ravyt Digital Blog </p><h1> Better decisions for your <em>  digital presence. </em></h1><div className="blog-hero-bottom"><p> Guides on website creation, Google presence and SEO for businesses. </p><span>Ravyt Digital</span></div></div></section>
    <section className="blog-content"><div className="shell"><div className="blog-list-head"><div><p> Recent content </p><h2> Start with the decision you need to make. </h2></div><span> Practical reading to plan, commission and improve your digital presence. </span></div><div className="post-grid">{<PriceText>{posts.map(post=><Link className="post-card" href={`/en/blog/${post.slug}`} key={post.slug}><div className="post-card-copy"><p>{<PriceText>{post.category}</PriceText>}</p><h3>{<PriceText>{post.title}</PriceText>}</h3><span>{<PriceText>{post.excerpt}</PriceText>}</span><small>{<PriceText>{post.dateLabel}</PriceText>} · {<PriceText>{post.readingTime}</PriceText>}</small></div></Link>)}</PriceText>}</div></div></section>
  <ChecklistCard lang="en"/><PageGuidance kind="blog" lang="en"/></main>;
}
