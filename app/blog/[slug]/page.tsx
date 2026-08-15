/* eslint-disable @next/next/no-html-link-for-pages */
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import ArticleAudioPlayer from "@/components/ArticleAudioPlayer";
import { getPost, posts } from "../posts";

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

  if (!post) return {};

  const articleImage = post.sections.find((section) => section.image)?.image;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ["Ravyt Digital"],
      images: articleImage
        ? [
            {
              url: articleImage.src,
              width: 1600,
              height: 900,
              alt: articleImage.alt,
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

  if (!post) notFound();

  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 2);
  const articleUrl = `${SITE_URL}/blog/${post.slug}`;
  const articleImage = post.sections.find((section) => section.image)?.image;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "pt-BR",
    author: { "@type": "Organization", name: "Ravyt Digital", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Ravyt Digital",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/brand/ravyt-symbol-2026.png` },
    },
    ...(articleImage ? { image: [`${SITE_URL}${articleImage.src}`] } : {}),
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
                <span>Por Ravyt Digital</span>
                <time dateTime={post.date}>{post.dateLabel}</time>
                <span>{post.readingTime}</span>
              </div>
            </div>
            <div
              className="article-art"
              style={{ "--post-accent": post.accent } as CSSProperties}
              aria-hidden="true"
            >
              <span>R</span>
              <div />
              <small>{post.category}</small>
            </div>
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
              <a
                className="button button-light"
                href="/#contato"
              >
                Preencher diagnóstico <i aria-hidden="true">↗</i>
              </a>
            </div>
          </div>
        </div>
      </article>

      <section className="related-posts">
        <div className="shell">
          <p className="related-kicker">Continue explorando</p>
          <h2>Mais clareza para sua próxima decisão.</h2>
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
