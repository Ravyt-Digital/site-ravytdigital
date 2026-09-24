import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { getPost, posts } from "../posts";

export function generateStaticParams(){return posts.map(({slug})=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;const post=getPost(slug);if(!post)return{};
  return {title:post.title,description:post.excerpt,alternates:{canonical:`/blog/${slug}`},
    twitter:{card:"summary_large_image",title:post.title,description:post.excerpt,images:["/brand/ravyt-social-card.jpg"]},
    openGraph:{title:post.title,description:post.excerpt,type:"article",url:`/blog/${slug}`,images:[{url:"/brand/ravyt-social-card.jpg",width:1200,height:630,alt:"Ravyt Digital"}]}};
}
function sectionId(title:string){return title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}

export default async function Article({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const post=getPost(slug);if(!post)notFound();
  const related=post.relatedSlugs?.map(getPost).filter(item=>item!==undefined)??posts.filter(item=>item.slug!==post.slug).slice(0,2);
  const oldSpecialist=!post.author;
  const author=oldSpecialist?{"@id":`${SITE_URL}/autores/ytala-cabral#person`}:{"@id":`${SITE_URL}/#organization`};
  const schema={"@context":"https://schema.org","@type":"BlogPosting",headline:post.title,description:post.excerpt,datePublished:post.date,dateModified:post.modified??post.date,inLanguage:"pt-BR",mainEntityOfPage:{"@type":"WebPage","@id":`${SITE_URL}/blog/${post.slug}`},author,publisher:{"@id":`${SITE_URL}/#organization`}};
  const serviceHref=post.serviceHref??"/social-media-para-psicologos-parentais";
  const serviceLabel=post.serviceLabel??"Conheça o planejamento e a gestão de redes sociais para psicólogos parentais";
  return <main id="conteudo" className="article-page"><article>
    <header className="article-hero"><div className="shell article-hero-grid"><div><Link className="back-blog" href="/blog">← Voltar ao blog</Link><p className="article-category">{post.category}</p><h1>{post.title}</h1><p className="article-excerpt">{post.excerpt}</p><div className="article-meta"><span>Por {oldSpecialist?<Link href="/autores/ytala-cabral">Ytala Cabral</Link>:post.author}</span><time dateTime={post.date}>{post.dateLabel}</time><span>{post.readingTime}</span>{post.modified&&<time dateTime={post.modified}>Atualizado em {new Intl.DateTimeFormat("pt-BR",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(post.modified+"T12:00:00Z"))}</time>}</div></div></div></header>
    <div className="article-layout shell"><div className="article-body"><nav className="article-toc" aria-label="Neste conteúdo"><strong>Neste conteúdo</strong>{post.sections.map(section=><a key={section.title} href={`#${sectionId(section.title)}`}>{section.title}</a>)}</nav>
      <p className="article-intro">{post.intro}</p>
      {post.sections.map(section=><section id={sectionId(section.title)} key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}
      <p><Link href={serviceHref}>{serviceLabel} →</Link></p>
      {post.slug==="gestao-de-redes-sociais-ou-producao-de-conteudo"&&<p><Link href="/quanto-custa-gestao-de-midias-sociais">Veja o que compõe o orçamento de gestão de mídias sociais →</Link></p>}
      {post.slug==="site-institucional-paginas-essenciais"&&<p><Link href="/quanto-custa-criar-um-site">Entenda o que altera o orçamento de um site →</Link></p>}
      {post.slug==="criacao-de-site-para-psicologos"&&<p><Link href="/social-media-para-psicologos-parentais">Conheça também a comunicação para Psicologia Parental →</Link></p>}
      {post.sources?.length&&<div className="article-sources"><strong>Referências institucionais</strong><ul>{post.sources.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul></div>}
      {post.slug==="comunicacao-etica-psicologia-parental"&&<p>Referência institucional: <a href="https://site.cfp.org.br/legislacao/codigo-de-etica/" target="_blank" rel="noopener noreferrer">Código de Ética Profissional — Conselho Federal de Psicologia</a>.</p>}
      <aside className="editorial-note"><strong>Como este conteúdo foi produzido</strong><p>{post.editorialNote??"Este artigo reúne aprendizados da rotina de estratégia e produção de conteúdo da Ravyt para Psicologia Parental. O objetivo é orientar decisões de comunicação, sem substituir avaliação ou orientação psicológica. Os exemplos são ilustrativos; não relatam atendimentos nem resultados de clientes. A atualização de setembro de 2026 recebeu apoio de IA na organização editorial; não foi realizada revisão clínica."}</p></aside>
      {related.length>0&&<section className="related-posts"><h2>Continue aprofundando</h2>{related.map(item=><Link key={item.slug} href={`/blog/${item.slug}`}>{item.title} →</Link>)}</section>}
      <aside className="article-conclusion"><p>{oldSpecialist?"Social Media para Psicólogos Parentais":post.category}</p><h2>{post.ctaTitle??"Quer construir uma presença digital coerente com a profundidade do seu trabalho?"}</h2><Link className="button" href={serviceHref}>Conhecer o serviço</Link></aside>
    </div></div><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  </article></main>;
}
