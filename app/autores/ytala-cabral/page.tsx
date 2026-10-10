import PageGuidance from "@/components/i18n/PageGuidance";

import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import ResponsiveWebp from "@/components/ResponsiveWebp";
import BlogPostCard from "@/components/BlogPostCard";
import { BlogFooter, BlogHeader } from "@/components/BlogChrome";
import { whatsappUrl } from "@/lib/contact";
import { SITE_URL } from "@/lib/site";
import { ytala } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
import { posts } from "@/app/blog/posts";
export const metadata: Metadata = pageMetadata({ title:"Ytala Cabral | SEO, Google Meu Negócio e Copy", description:"Conheça Ytala Cabral, responsável por SEO, Google Meu Negócio e copy na Ravyt Digital, com experiência em estratégia de conteúdo.", alternates:{canonical:"/autores/ytala-cabral"} });
export default function Page(){ const schema={"@context":"https://schema.org","@type":"ProfilePage","@id":`${SITE_URL}/autores/ytala-cabral#profile`,url:`${SITE_URL}/autores/ytala-cabral`,name:"Ytala Cabral — Ravyt Digital",mainEntity:ytala}; return <><BlogHeader/><main id="conteudo" tabIndex={-1} className="specialist-page"><StructuredData data={schema}/><section className="about-specialist"><div className="shell two-columns"><div className="team-photo-ytala"><ResponsiveWebp src="/team/ytala-cabral.webp" alt="Ytala Cabral" width={1200} height={1200} priority/></div><div><p className="section-kicker">Especialista da Ravyt Digital</p><h1>Ytala Cabral</h1><p>Ytala Cabral é copywriter e conduz SEO, Google Meu Negócio e estratégia de mensagem na Ravyt Digital.</p><p>Na Ravyt, conecta intenção de busca, conteúdo e copy para ajudar empresas a serem encontradas e compreendidas. Sua experiência em texto contribui para apresentar serviços com clareza.</p><a className="button button-dark" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">CONVERSAR COM YTALA</a></div></div></section><section className="insights-section"><div className="shell"><p className="section-kicker">Conteúdo de Ytala Cabral</p><h2>Artigos sobre Google, conteúdo e SEO</h2><div className="post-grid">{posts.filter(post=>!post.author||post.author==='Ytala Cabral').map(post=><BlogPostCard key={post.slug} post={post} lang="pt"/>)}</div></div></section><PageGuidance kind="author" lang="pt"/></main><BlogFooter/></>; }
