import { pageMetadata } from "@/lib/metadata";

import {PriceText} from "@/components/i18n/Regional";
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
  return pageMetadata({
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
  });
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
  const related = post.relatedSlugs?.map(getPost).filter(item => item !== undefined) ?? [];
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
  const serviceHref = post.serviceHref ?? "/sites";
  const serviceLabel = post.serviceLabel ?? "Conheça a criação e manutenção de sites da Ravyt";
  const toc = [
    ...post.sections.map(section => ({ id: sectionId(section.title), title: section.title })),
    ...(post.comparison ? [{ id: "comparacao", title: post.comparison.title }] : []),
    ...(post.checklist ? [{ id: "checklist", title: post.checklist.title }] : []),
  ];

  return <main id="conteudo" className="article-page"><article>
    <header className="article-hero"><div className="shell article-hero-grid"><div>
      <Breadcrumbs items={[{ name: "Início", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }]} />
      <p className="article-category">{<PriceText>{post.category}</PriceText>}</p>
      <h1>{<PriceText>{post.title}</PriceText>}</h1>
      <p className="article-excerpt">{<PriceText>{post.excerpt}</PriceText>}</p>
      <div className="article-meta">
        <span>Por <Link href={specialist ? "/autores/ytala-cabral" : "/#sobre"}>{<PriceText>{post.author ?? "Ytala Cabral"}</PriceText>}</Link></span>
        <time dateTime={post.date}>{<PriceText>{post.dateLabel}</PriceText>}</time>
        <span>{<PriceText>{post.readingTime}</PriceText>}</span>
        {<PriceText>{post.modified && <time dateTime={post.modified}>Atualizado em {<PriceText>{dateLabel(post.modified)}</PriceText>}</time>}</PriceText>}
      </div>
    </div></div></header>
    <div className="article-layout shell"><div className="article-body">
      {<PriceText>{post.quickAnswer && <aside className="article-answer" aria-labelledby="resposta-rapida"><h2 id="resposta-rapida">Resposta rápida</h2><p>{<PriceText>{post.quickAnswer}</PriceText>}</p></aside>}</PriceText>}
      <nav className="article-toc" aria-label="Neste conteúdo"><strong>Neste conteúdo</strong>{<PriceText>{toc.map(item => <a key={item.id} href={`#${item.id}`}>{<PriceText>{item.title}</PriceText>}</a>)}</PriceText>}</nav>
      <p className="article-intro">{<PriceText>{post.intro}</PriceText>}</p>
      {<PriceText>{post.sections.map(section => <section id={sectionId(section.title)} key={section.title}><h2>{<PriceText>{section.title}</PriceText>}</h2>{<PriceText>{section.paragraphs.map(paragraph => <p key={paragraph}>{<PriceText>{paragraph}</PriceText>}</p>)}</PriceText>}{<PriceText>{section.links?.length ? <p>{<PriceText>{section.links.map((link, index) => <span key={link.href}>{<PriceText>{index > 0 ? " · " : "Leia também: "}</PriceText>}{<PriceText>{link.href.startsWith("/") ? <Link href={link.href}>{<PriceText>{link.label}</PriceText>}</Link> : <a href={link.href} target="_blank" rel="noopener noreferrer">{<PriceText>{link.label}</PriceText>} ↗</a>}</PriceText>}</span>)}</PriceText>}</p> : null}</PriceText>}</section>)}</PriceText>}
      {<PriceText>{post.comparison && <section id="comparacao" className="article-comparison">
        <h2 id="comparacao-titulo">{<PriceText>{post.comparison.title}</PriceText>}</h2>
        <div className="comparison-scroll" tabIndex={0} role="region" aria-labelledby="comparacao-titulo">
          <table>
            <caption className="sr-only">{<PriceText>{post.comparison.title}</PriceText>}</caption>
            <thead><tr>{<PriceText>{post.comparison.headers.map(header => <th key={header} scope="col">{<PriceText>{header}</PriceText>}</th>)}</PriceText>}</tr></thead>
            <tbody>{<PriceText>{post.comparison.rows.map(row => <tr key={row[0]}><th scope="row">{<PriceText>{row[0]}</PriceText>}</th><td>{<PriceText>{row[1]}</PriceText>}</td><td>{<PriceText>{row[2]}</PriceText>}</td></tr>)}</PriceText>}</tbody>
          </table>
        </div>
        <p className="comparison-hint">Em telas pequenas, deslize a tabela para ver todas as colunas.</p>
        <p className="comparison-note">{<PriceText>{post.comparison.note}</PriceText>}</p>
      </section>}</PriceText>}
      {<PriceText>{post.checklist && <section id="checklist" className="article-checklist"><h2>{<PriceText>{post.checklist.title}</PriceText>}</h2><ul>{<PriceText>{post.checklist.items.map(item => <li key={item}>{<PriceText>{item}</PriceText>}</li>)}</PriceText>}</ul></section>}</PriceText>}
      <p><Link href={serviceHref}>{<PriceText>{serviceLabel}</PriceText>} →</Link></p>

      {<PriceText>{post.slug === "site-institucional-paginas-essenciais" && <p><Link href="/quanto-custa-criar-um-site">Entenda o que altera o orçamento de um site →</Link></p>}</PriceText>}
      {<PriceText>{post.slug === "site-institucional-paginas-essenciais" && <p><Link href="/blog/criacao-de-site-profissional-para-empresas">Veja como avaliar uma proposta de criação de site profissional →</Link></p>}</PriceText>}

      {<PriceText>{!!post.sources?.length && <div className="article-sources"><strong>Referências institucionais</strong><ul>{<PriceText>{post.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{<PriceText>{source.label}</PriceText>} ↗</a></li>)}</PriceText>}</ul></div>}</PriceText>}
      {<PriceText>{post.slug === "comunicacao-etica-psicologia-parental" && <p>Referência institucional: <a href="https://site.cfp.org.br/legislacao/codigo-de-etica/" target="_blank" rel="noopener noreferrer">Código de Ética Profissional — Conselho Federal de Psicologia</a>.</p>}</PriceText>}
      <aside className="editorial-note"><strong>Como este conteúdo foi produzido</strong><p>{<PriceText>{post.editorialNote ?? "Este artigo apresenta critérios editoriais para organizar as páginas de um site. Os exemplos são ilustrativos e não representam resultados de clientes."}</PriceText>}</p></aside>
      {<PriceText>{related.length > 0 && <section className="related-posts"><h2>Continue aprofundando</h2>{<PriceText>{related.map(item => <Link key={item.slug} href={`/blog/${item.slug}`}>{<PriceText>{item.title}</PriceText>} →</Link>)}</PriceText>}</section>}</PriceText>}
      <aside className="article-conclusion"><p>{<PriceText>{post.category}</PriceText>}</p><h2>{<PriceText>{post.ctaTitle ?? "Quer construir uma presença digital coerente com a profundidade do seu trabalho?"}</PriceText>}</h2><Link className="button" href={serviceHref}>Conhecer o serviço</Link></aside>
    </div></div>
    <StructuredData data={schema} />
  </article></main>;
}
