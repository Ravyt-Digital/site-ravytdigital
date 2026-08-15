/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
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
      modifiedTime: post.date,
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: seo?.metaDescription ?? post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "pt-BR",
    author: {
      "@type": seo?.author.type ?? "Organization",
      name: seo?.author.name ?? "Ravyt Digital",
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Ravyt Digital",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/brand/ravyt-symbol-2026.png`,
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
  };

  return (
    <main id="conteudo" className="article-page">
      <article>
        <header className="article-hero">
          <div className="article-hero-lines" aria-hidden="true" />
          <div className="shell article-hero-grid">
            <div>
              <a className="back-blog" href="/blog">← Voltar ao blog</a>
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
                <time dateTime={post.date}>{post.dateLabel}</time>
                <span>{post.readingTime}</span>
              </div>
            </div>
            {seo ? (
              <div
                className="article-art"
                style={{ overflow: "hidden", background: "#121416", padding: 0 }}
              >
                <img
                  src={seo.featuredImage.src}
                  alt={seo.featuredImage.alt}
                  width={seo.featuredImage.width}
                  height={seo.featuredImage.height}
                  loading="eager"
                  decoding="async"
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
                {section.image && (
                  <figure style={{ margin: "38px 0 8px" }}>
                    <img
                      src={section.image.src}
                      alt={section.image.alt}
                      width={1600}
                      height={900}
                      loading="lazy"
                      decoding="async"
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

            <div className="article-conclusion">
              <p>Próximo passo</p>
              <h2>Quer transformar essa ideia em uma estrutura para o seu negócio?</h2>
              <a className="button button-light" href="/#contato">
                Preencher diagnóstico <i aria-hidden="true">↗</i>
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
    </main>
  );
}
