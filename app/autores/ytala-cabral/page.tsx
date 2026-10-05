import PageGuidance from "@/components/i18n/PageGuidance";

import {PriceText} from "@/components/i18n/Regional";
import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import { BlogFooter, BlogHeader } from "@/components/BlogChrome";
import { whatsappUrl } from "@/lib/contact";
import { SITE_URL } from "@/lib/site";
import { ytala } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
import Link from "next/link";
import { posts } from "@/app/blog/posts";
export const metadata: Metadata = pageMetadata({ title:"Ytala Cabral | SEO, Google Meu Negócio e Copy", description:"Conheça Ytala Cabral, responsável por SEO, Google Meu Negócio e copy na Ravyt Digital, com experiência em estratégia de conteúdo.", alternates:{canonical:"/autores/ytala-cabral"} });
export default function Page(){ const schema={"@context":"https://schema.org","@type":"ProfilePage","@id":`${SITE_URL}/autores/ytala-cabral#profile`,url:`${SITE_URL}/autores/ytala-cabral`,name:"Ytala Cabral — Ravyt Digital",mainEntity:ytala}; return <><BlogHeader/><main id="conteudo" tabIndex={-1} className="specialist-page"><StructuredData data={schema}/><section className="about-specialist"><div className="shell two-columns"><div className="team-photo-ytala"><Image src="/team/ytala-cabral.webp" alt="Ytala Cabral" width={720} height={900} unoptimized/></div><div><p className="section-kicker">Especialista da Ravyt Digital</p><h1>Ytala Cabral</h1><p>Ytala Cabral é copywriter e conduz SEO, Google Meu Negócio e estratégia de mensagem na Ravyt Digital.</p><p>Na Ravyt, conecta intenção de busca, conteúdo e copy para ajudar empresas a serem encontradas e compreendidas. Sua experiência em texto contribui para apresentar serviços com clareza.</p><a className="button button-dark" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">CONVERSAR COM YTALA</a></div></div></section><section className="insights-section"><div className="shell"><p className="section-kicker">Conteúdo de Ytala Cabral</p><h2>Artigos sobre comunicação para Psicologia Parental</h2><div className="insights-grid">{<PriceText>{posts.filter(post=>!post.author).map(post=><Link key={post.slug} href={`/blog/${post.slug}`}><strong>{<PriceText>{post.title}</PriceText>}</strong><span>{<PriceText>{post.excerpt}</PriceText>}</span></Link>)}</PriceText>}</div></div></section><PageGuidance kind="author" lang="pt"/></main><BlogFooter/></>; }
