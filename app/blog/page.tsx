import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts";

export const metadata:Metadata=pageMetadata({
  title:"Blog sobre Gestão de Mídias Sociais e Criação de Sites",
  description:"Guias da Ravyt sobre gestão de redes sociais, criação de sites com domínio próprio e comunicação digital para profissionais e empresas.",
  alternates:{canonical:"/blog"},
});
export default function BlogPage(){
  return <main id="conteudo" className="blog-page"><section className="blog-hero"><div className="shell blog-hero-inner"><p className="blog-eyebrow">Blog Ravyt Digital</p><h1>Decisões melhores para sua <em>presença digital.</em></h1><div className="blog-hero-bottom"><p>Guias sobre gestão de mídias sociais, criação de sites e comunicação para profissionais e empresas.</p><span>Ravyt Digital</span></div></div></section>
    <section className="blog-content"><div className="shell"><div className="blog-list-head"><div><p>Conteúdos recentes</p><h2>Comece pela decisão que precisa tomar.</h2></div><span>Leitura prática para planejar, contratar e melhorar sua presença digital.</span></div><div className="post-grid">{posts.map(post=><Link className="post-card" href={`/blog/${post.slug}`} key={post.slug}><div className="post-card-copy"><p>{post.category}</p><h3>{post.title}</h3><span>{post.excerpt}</span><small>{post.dateLabel} · {post.readingTime}</small></div></Link>)}</div></div></section>
  </main>;
}
