import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";
import { organization, ytala } from "@/lib/structured-data";
import { getPost, posts, type BlogPost } from "../posts";

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

function articleAuthor(post: BlogPost) {
  return post.author
    ? { "@type": "Organization", "@id": organization["@id"], name: organization.name, url: SITE_URL }
    : ytala;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const author = articleAuthor(post);
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    authors: [{ name: author.name, url: author.url }],
    creator: author.name,
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: ["/brand/ravyt-social-card.jpg"] },
    openGraph: {
      title: post.title, description: post.excerpt, type: "article", url: `/blog/${slug}`,
      publishedTime: post.date, modifiedTime: post.modified ?? post.date,
      authors: [author.url], section: post.category,
      images: [{ url: "/brand/ravyt-social-card.jpg", width: 1200, height: 630, alt: "Ravyt Digital" }],
    },
  };
}

function sectionId(title: string) {
  return title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function dateLabel(value: string) {
  const date = new Date(value.length === 10 ? `${value}T12:00:00Z` : value);
  return new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(date);
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = post.relatedSlugs?.map(getPost).filter(item => item !== undefined) ?? posts.filter(item => item.slug !== post.slug).slice(0, 2);
  const specialist = !post.author;
  const author = articleAuthor(post);
  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const schema = {
    "@context": "https://schema.org", "@type": "BlogPosting", "@id": `${canonical}#article`,
    headline: post.title, description: post.excerpt, url: canonical,
    datePublished: post.date, dateModified: post.modified ?? post.date,
    inLanguage: "pt-BR", articleSection: post.category,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    isPartOf: { "@type": "Blog", "@id": `${SITE_URL}/blog#blog`, url: `${SITE_URL}/blog`, name: "Blog Ravyt Digital" },
    author, publisher: { "@id": organization["@id"] },
    ...(post.sources?.length ? { citation: post.sources.map(source => source.url) } : {}),
  };
  const serviceHref = post.serviceHref ?? "/social-media-para-psicologos-parentais";
  const serviceLabel = post.serviceLabel ?? "Conheça o planejamento e a gestão de redes sociais para psicólogos parentais";
  const toc = [
    ...post.sections.map(section => ({ id: sectionId(section.title), title: section.title })),
    ...(post.comparison ? [{ id: "comparacao", title: post.comparison.title }] : []),
    ...(post.checklist ? [{ id: "checklist", title: post.checklist.title }] : []),
  ];

  return <main id="conteudo" className="article-page"><article>
    <header className="article-hero"><div className="shell article-hero-grid"><div>
      <Breadcrumbs items={[{ name: "Início", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }]} />
      <p className="article-category">{post.category}</p>
      <h1>{post.title}</h1>
      <p className="article-excerpt">{post.excerpt}</p>
      <div className="article-meta">
        <span>Por <Link href={specialist ? "/autores/ytala-cabral" : "/#sobre"}>{post.author ?? "Ytala Cabral"}</Link></span>
        <time dateTime={post.date}>{post.dateLabel}</time>
        <span>{post.readingTime}</span>
        {post.modified && <time dateTime={post.modified}>Atualizado em {dateLabel(post.modified)}</time>}
      </div>
    </div></div></header>
    <div className="article-layout shell"><div className="article-body">
      {post.quickAnswer && <aside className="article-answer" aria-labelledby="resposta-rapida"><h2 id="resposta-rapida">Resposta rápida</h2><p>{post.quickAnswer}</p></aside>}
      <nav className="article-toc" aria-label="Neste conteúdo"><strong>Neste conteúdo</strong>{toc.map(item => <a key={item.id} href={`#${item.id}`}>{item.title}</a>)}</nav>
      <p className="article-intro">{post.intro}</p>
      {post.sections.map(section => <section id={sectionId(section.title)} key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}
      {post.comparison && <section id="comparacao" className="article-comparison">
        <h2 id="comparacao-titulo">{post.comparison.title}</h2>
        <div className="comparison-scroll" tabIndex={0} role="region" aria-labelledby="comparacao-titulo">
          <table>
            <caption className="sr-only">{post.comparison.title}</caption>
            <thead><tr>{post.comparison.headers.map(header => <th key={header} scope="col">{header}</th>)}</tr></thead>
            <tbody>{post.comparison.rows.map(row => <tr key={row[0]}><th scope="row">{row[0]}</th><td>{row[1]}</td><td>{row[2]}</td></tr>)}</tbody>
          </table>
        </div>
        <p className="comparison-hint">Em telas pequenas, deslize a tabela para ver todas as colunas.</p>
        <p className="comparison-note">{post.comparison.note}</p>
      </section>}
      {post.checklist && <section id="checklist" className="article-checklist"><h2>{post.checklist.title}</h2><ul>{post.checklist.items.map(item => <li key={item}>{item}</li>)}</ul></section>}
      <p><Link href={serviceHref}>{serviceLabel} →</Link></p>
      {post.slug === "gestao-de-redes-sociais-ou-producao-de-conteudo" && <p><Link href="/quanto-custa-gestao-de-midias-sociais">Veja o que compõe o orçamento de gestão de mídias sociais →</Link></p>}
      {post.slug === "site-institucional-paginas-essenciais" && <p><Link href="/quanto-custa-criar-um-site">Entenda o que altera o orçamento de um site →</Link></p>}
      {post.slug === "criacao-de-site-para-psicologos" && <p><Link href="/social-media-para-psicologos-parentais">Conheça também a comunicação para Psicologia Parental →</Link></p>}
      {!!post.sources?.length && <div className="article-sources"><strong>Referências institucionais</strong><ul>{post.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul></div>}
      {post.slug === "comunicacao-etica-psicologia-parental" && <p>Referência institucional: <a href="https://site.cfp.org.br/legislacao/codigo-de-etica/" target="_blank" rel="noopener noreferrer">Código de Ética Profissional — Conselho Federal de Psicologia</a>.</p>}
      <aside className="editorial-note"><strong>Como este conteúdo foi produzido</strong><p>{post.editorialNote ?? "Este artigo reúne aprendizados da rotina de estratégia e produção de conteúdo da Ravyt para Psicologia Parental. O objetivo é orientar decisões de comunicação, sem substituir avaliação ou orientação psicológica. Os exemplos são ilustrativos; não relatam atendimentos nem resultados de clientes. A atualização de setembro de 2026 recebeu apoio de IA na organização editorial; não foi realizada revisão clínica."}</p></aside>
      {related.length > 0 && <section className="related-posts"><h2>Continue aprofundando</h2>{related.map(item => <Link key={item.slug} href={`/blog/${item.slug}`}>{item.title} →</Link>)}</section>}
      <aside className="article-conclusion"><p>{specialist ? "Social Media para Psicólogos Parentais" : post.category}</p><h2>{post.ctaTitle ?? "Quer construir uma presença digital coerente com a profundidade do seu trabalho?"}</h2><Link className="button" href={serviceHref}>Conhecer o serviço</Link></aside>
    </div></div>
    <StructuredData data={schema} />
  </article></main>;
}
