import PageGuidance from "@/components/i18n/PageGuidance";

import {PriceText} from "@/components/i18n/Regional";
import { pageMetadata } from "@/locales/es/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import { BlogFooter, BlogHeader } from "@/locales/es/components/BlogChrome";
import { whatsappUrl } from "@/locales/es/lib/contact";
import { SITE_URL } from "@/lib/site";
import { ytala } from "@/lib/structured-data";
import StructuredData from "@/locales/es/components/StructuredData";
import Link from "next/link";
import { posts } from "@/app/es/blog/posts";
export const metadata: Metadata = pageMetadata({ title:"Ytala Cabral | SEO, Perfil de Empresa en Google y redacción", description:"Conoce a Ytala Cabral, responsable de SEO, Perfil de Empresa en Google y redacción en Ravyt Digital, con experiencia en estrategia de contenidos.", alternates:{canonical:"/es/autores/ytala-cabral"} });
export default function Page(){ const schema={"@context":"https://schema.org","@type":"ProfilePage","@id":`${SITE_URL}/autores/ytala-cabral#profile`,url:`${SITE_URL}/autores/ytala-cabral`,name:"Ytala Cabral — Ravyt Digital",mainEntity:ytala}; return <><BlogHeader/><main id="conteudo" tabIndex={-1} className="specialist-page"><StructuredData data={schema}/><section className="about-specialist"><div className="shell two-columns"><div className="team-photo-ytala"><Image src="/team/ytala-cabral.webp" alt="Ytala Cabral" width={720} height={900} unoptimized/></div><div><p className="section-kicker"> Especialista de Ravyt Digital </p><h1>Ytala Cabral</h1><p> Ytala Cabral es redactora y dirige el SEO, el Perfil de Empresa en Google y la estrategia de mensajes en Ravyt Digital. </p><p> En Ravyt, conecta la intención de búsqueda, el contenido y la redacción para ayudar a las empresas a ser encontradas y comprendidas. Su experiencia con textos contribuye a presentar los servicios con claridad. </p><a className="button button-dark" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"> HABLAR CON YTALA </a></div></div></section><section className="insights-section"><div className="shell"><p className="section-kicker"> Contenidos de Ytala Cabral </p><h2> Artículos sobre comunicación para Psicología Parental </h2><div className="insights-grid">{<PriceText>{posts.filter(post=>!post.author).map(post=><Link key={post.slug} href={`/es/blog/${post.slug}`}><strong>{<PriceText>{post.title}</PriceText>}</strong><span>{<PriceText>{post.excerpt}</PriceText>}</span></Link>)}</PriceText>}</div></div></section><PageGuidance kind="author" lang="es"/></main><BlogFooter/></>; }
