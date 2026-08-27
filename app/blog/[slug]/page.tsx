/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { whatsappUrl } from "@/lib/contact";
import ArticleAudioPlayer from "@/components/ArticleAudioPlayer";
import { getPost, posts } from "../posts";
import { getPostSeo } from "../postSeo";

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  const seo = getPostSeo(slug);

  if (!post) return {};

  return {
    title: seo?.seoTitle ?? post.title,
    description: seo?.metaDescription ?? post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: seo?.seoTitle ?? post.title,
      description: seo?.metaDescription ?? post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.modifiedDate ?? post.date,
      authors: [seo?.author.name ?? "Ravyt Digital"],
      images: seo
        ? [
            {
              url: seo.featuredImage.src,
              width: seo.featuredImage.width,
              height: seo.featuredImage.height,
              alt: seo.featuredImage.alt,
            },
          ]
        : [
            {
              url: "/brand/ravyt-social-card.jpg",
              width: 1920,
              height: 1080,
              alt: "Ravyt Digital",
            },
          ],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  const seo = getPostSeo(slug);

  if (!post) notFound();

  const related = seo?.relatedSlugs
    .map((relatedSlug) => getPost(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item)) ??
    posts.filter((item) => item.slug !== post.slug).slice(0, 2);

  const articleUrl = `${SITE_URL}/blog/${post.slug}`;
  const authorUrl = seo?.author.url.startsWith("http")
    ? seo.author.url
    : `${SITE_URL}${seo?.author.url ?? "/"}`;
  const articleText = [
    post.title,
    post.excerpt,
    post.intro,
    ...post.sections.flatMap((section) => [
      section.title,
      ...section.paragraphs,
      ...(section.list ?? []),
    ]),
  ].join(" ");
  const wordCount = articleText.trim().split(/\s+/).length;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    headline: post.title,
    description: seo?.metaDescription ?? post.excerpt,
    datePublished: post.date,
    dateModified: post.modifiedDate ?? post.date,
    inLanguage: "pt-BR",
    author: {
      "@type": seo?.author.type ?? "Organization",
      name: seo?.author.name ?? "Ravyt Digital",
      url: authorUrl,
      ...(seo?.author.jobTitle ? { jobTitle: seo.author.jobTitle } : {}),
      ...(seo ? {
        description: seo.author.description,
        image: `${SITE_URL}${seo.author.image}`,
        knowsAbout: seo.author.knowsAbout,
      } : {}),
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Ravyt Digital",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/brand/ravyt-symbol-2026.webp`,
      },
    },
    ...(seo
      ? {
          image: {
            "@type": "ImageObject",
            url: `${SITE_URL}${seo.featuredImage.src}`,
            width: seo.featuredImage.width,
            height: seo.featuredImage.height,
          },
        }
      : {}),
    mainEntityOfPage: articleUrl,
    url: articleUrl,
    isPartOf: { "@id": `${SITE_URL}/blog#blog` },
    wordCount,
    keywords: seo?.keywords,
    about: seo?.keywords.map((keyword) => ({ "@type": "Thing", name: keyword })),
    citation: post.sources?.map((source) => source.url),
    articleSection: seo?.cluster === "conteudo-e-busca"
      ? "Conteúdo, SEO e busca generativa"
      : "Presença digital, confiança e conversão",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: articleUrl },
    ],
  };

  return (
    <main id="conteudo" className="article-page">
      <article>
        <header className="article-hero">
          <div className="article-hero-lines" aria-hidden="true" />
          <div className="shell article-hero-grid">
            <div>
              <nav className="article-breadcrumb" aria-label="Navegação estrutural">
                <a href="/">Início</a><span aria-hidden="true">/</span>
                <a href="/blog">Insights</a><span aria-hidden="true">/</span>
                <span aria-current="page">{post.category}</span>
              </nav>
              <p className="article-category">{post.category}</p>
              <h1>{post.title}</h1>
              <p className="article-excerpt">{post.excerpt}</p>
              <div className="article-meta">
                <span>
                  Por{" "}
                  <a href={seo?.author.url ?? "/"}>
                    {seo?.author.name ?? "Ravyt Digital"}
                  </a>
                </span>
                <time dateTime={post.modifiedDate ?? post.date}>
                  {post.modifiedDateLabel ? `Atualizado em ${post.modifiedDateLabel}` : post.dateLabel}
                </time>
                <span>{post.readingTime}</span>
              </div>
            </div>
            {seo ? (
              <div
                className="article-art"
                style={{ overflow: "hidden", background: "#121416", padding: 0 }}
              >
                <Image
                  src={seo.featuredImage.src}
                  alt={seo.featuredImage.alt}
                  width={seo.featuredImage.width}
                  height={seo.featuredImage.height}
                  loading="eager"
                  decoding="async"
                  unoptimized
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </div>
            ) : null}
          </div>
        </header>

        <div className="shell article-layout">
          <ArticleAudioPlayer
            title={post.title}
            excerpt={post.excerpt}
            intro={post.intro}
            sections={post.sections}
          />

          <aside aria-label="Índice do artigo">
            <p>Neste artigo</p>
            {post.sections.map((section, index) => (
              <a key={section.title} href={`#secao-${index + 1}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {section.title}
              </a>
            ))}
          </aside>

          <div className="article-body">
            <p className="article-intro">{post.intro}</p>
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <aside className="article-takeaways" aria-labelledby="resumo-do-artigo">
                <span>Resposta direta</span>
                <h2 id="resumo-do-artigo">O que você precisa saber</h2>
                <ul>
                  {post.keyTakeaways.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </aside>
            )}
            <aside className="article-editorial-note" aria-labelledby="como-produzimos">
              <span>Transparência editorial</span>
              <h2 id="como-produzimos">Como este conteúdo foi produzido</h2>
              <p>
                {post.methodology ?? "Este artigo foi estruturado para responder a uma dúvida real, revisado com base em fontes identificadas e organizado para separar fatos, análise e orientação prática."}
              </p>
              <a href="/politica-editorial">Conheça os critérios editoriais da Ravyt Digital</a>
            </aside>
            {post.sections.map((section, index) => (
              <section id={`secao-${index + 1}`} key={section.title}>
                <span className="article-section-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.list && (
                  <ul>
                    {section.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                {section.table && (
                  <div className="article-table-wrap" role="region" aria-label={section.table.caption} tabIndex={0}>
                    <table>
                      <caption>{section.table.caption}</caption>
                      <thead>
                        <tr>{section.table.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row.join("-")}>
                            {row.map((cell, cellIndex) => cellIndex === 0
                              ? <th scope="row" key={cell}>{cell}</th>
                              : <td key={`${cellIndex}-${cell}`}>{cell}</td>)}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.image && (
                  <figure style={{ margin: "38px 0 8px" }}>
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      width={1600}
                      height={900}
                      loading="lazy"
                      decoding="async"
                      unoptimized
                      style={{
                        display: "block",
                        width: "100%",
                        height: "auto",
                        borderRadius: 4,
                        border: "1px solid rgba(26,28,30,.14)",
                      }}
                    />
                    {section.image.caption && (
                      <figcaption
                        style={{
                          marginTop: 12,
                          color: "#78716a",
                          fontSize: 13,
                          lineHeight: 1.6,
                        }}
                      >
                        {section.image.caption}
                      </figcaption>
                    )}
                  </figure>
                )}
              </section>
            ))}

            {post.sources && post.sources.length > 0 && (
              <section aria-labelledby="fontes-do-artigo">
                <span className="article-section-number">FONTES</span>
                <h2 id="fontes-do-artigo">Fontes e documentação consultadas</h2>
                <p>
                  Para diferenciar fatos documentados de análise editorial, este artigo
                  prioriza fontes primárias e documentação oficial sempre que disponíveis.
                </p>
                <ul>
                  {post.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} target="_blank" rel="noreferrer">
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {seo && (
              <aside className="article-author" aria-labelledby="autor-do-artigo">
                <Image
                  src={seo.author.image}
                  alt={`Foto de ${seo.author.name}`}
                  width={112}
                  height={112}
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <span>Autor deste conteúdo</span>
                  <h2 id="autor-do-artigo">{seo.author.name}</h2>
                  {seo.author.jobTitle && <strong>{seo.author.jobTitle}</strong>}
                  <p>{seo.author.description}</p>
                  <a href={seo.author.url}>Conheça a experiência e os artigos de {seo.author.name}</a>
                </div>
              </aside>
            )}

            <div className="article-conclusion">
              <p>Próximo passo</p>
              <h2>{seo?.recommendedService.title ?? "Quer transformar essa ideia em uma estrutura para o seu negócio?"}</h2>
              <a className="article-service-link" href={seo?.recommendedService.href ?? "/servicos"}>
                {seo?.recommendedService.label ?? "Conhecer os serviços"} <i aria-hidden="true">↗</i>
              </a>
              <a className="button button-light" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-track="primary_cta_click" aria-label="Quero conversar sobre meu projeto pelo WhatsApp (abre em nova aba)">
                QUERO CONVERSAR SOBRE MEU PROJETO <i aria-hidden="true">↗</i>
              </a>
            </div>
          </div>
        </div>
      </article>

      <section className="related-posts" aria-labelledby="artigos-relacionados">
        <div className="shell">
          <p className="related-kicker">Continue explorando</p>
          <h2 id="artigos-relacionados">Artigos relacionados ao tema.</h2>
          <div className="related-grid">
            {related.map((item) => (
              <a href={`/blog/${item.slug}`} key={item.slug}>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <small>Ler artigo <b aria-hidden="true">↗</b></small>
              </a>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </main>
  );
}
