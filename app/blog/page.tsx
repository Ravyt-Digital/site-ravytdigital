import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { posts, type BlogPost } from "./posts";

export const metadata: Metadata = {
  title: "Blog sobre Sites, Marca e Presença Digital",
  description:
    "Conteúdos da Ravyt Digital para empresas que querem construir confiança, melhorar sua presença digital e crescer com estrutura.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog Ravyt Digital",
    description:
      "Estratégia, sites, marca e tecnologia para empresas que querem ser percebidas à altura do que entregam.",
    url: "/blog",
  },
};

function getPostFeaturedImage(post: BlogPost) {
  if (post.slug === "edits-instagram-stories-fluxo-producao") {
    return {
      src: "/blog/edits-stories-fluxo.svg",
      alt: "Fluxo mostrando criação, edição no Edits e publicação direta nos Instagram Stories",
    };
  }

  return null;
}

function getPostAuthor(post: BlogPost) {
  return post.slug === "edits-instagram-stories-fluxo-producao"
    ? "Marcio Cabral"
    : "Ravyt Digital";
}

function PostArt({
  post,
  number,
  featured = false,
}: {
  post: BlogPost;
  number: string;
  featured?: boolean;
}) {
  const featuredImage = getPostFeaturedImage(post);

  if (featuredImage) {
    return (
      <div
        className={`blog-post-art${featured ? " blog-post-art-featured" : ""}`}
        style={{ overflow: "hidden", background: "#1a1c1e" }}
      >
        <img
          src={featuredImage.src}
          alt={featuredImage.alt}
          width={1600}
          height={900}
          loading={featured ? "eager" : "lazy"}
          decoding="async"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={`blog-post-art${featured ? " blog-post-art-featured" : ""}`}
      style={{ "--post-accent": post.accent } as CSSProperties}
      aria-hidden="true"
    >
      <span>{number}</span>
      <div className="blog-art-orbit" />
      <div className="blog-art-r">R</div>
      <small>{post.category}</small>
    </div>
  );
}

export default function BlogPage() {
  const [featured, ...others] = posts;
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Ravyt Digital",
    description:
      "Conteúdos sobre sites, marca, posicionamento e tecnologia para negócios.",
    url: `${SITE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Ravyt Digital",
      url: SITE_URL,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
      author: {
        "@type": getPostAuthor(post) === "Ravyt Digital" ? "Organization" : "Person",
        name: getPostAuthor(post),
      },
      ...(getPostFeaturedImage(post)
        ? { image: `${SITE_URL}${getPostFeaturedImage(post)!.src}` }
        : {}),
    })),
  };

  return (
    <main id="conteudo" className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero-grid-lines" aria-hidden="true" />
        <div className="shell blog-hero-inner">
          <p className="blog-eyebrow"><i /> Ideias para negócios em movimento</p>
          <h1>
            Clareza para tomar<br />
            <em>melhores decisões digitais.</em>
          </h1>
          <div className="blog-hero-bottom">
            <p>
              Conteúdos sobre sites, marca, posicionamento e tecnologia — para
              empresas que querem crescer com estrutura e transmitir confiança.
            </p>
            <span>Ravyt / Editorial 2026</span>
          </div>
        </div>
      </section>

      <section className="blog-content">
        <div className="shell">
          <div className="blog-section-label">
            <p>01 / Em destaque</p>
            <span>Estratégia sem complicação</span>
          </div>

          <a className="featured-post" href={`/blog/${featured.slug}`}>
            <PostArt post={featured} number="01" featured />
            <div className="featured-copy">
              <p>{featured.category}</p>
              <h2>{featured.title}</h2>
              <span>{featured.excerpt}</span>
              <div>
                <small>
                  Por {getPostAuthor(featured)} · {featured.dateLabel} · {featured.readingTime}
                </small>
                <b>Ler artigo <i aria-hidden="true">↗</i></b>
              </div>
            </div>
          </a>

          <div className="blog-list-head">
            <div>
              <p>02 / Conteúdos recentes</p>
              <h2>Para transformar intenção em direção.</h2>
            </div>
            <span>
              Leituras objetivas para entender o que sua presença digital
              precisa fazer antes de decidir apenas como ela deve parecer.
            </span>
          </div>

          <div className="post-grid">
            {others.map((post, index) => (
              <a className="post-card" href={`/blog/${post.slug}`} key={post.slug}>
                <PostArt post={post} number={`0${index + 2}`} />
                <div className="post-card-copy">
                  <p>{post.category}</p>
                  <h3>{post.title}</h3>
                  <span>{post.excerpt}</span>
                  <small>
                    {post.readingTime} <b aria-hidden="true">↗</b>
                  </small>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-cta">
        <div className="blog-cta-orbit" aria-hidden="true" />
        <div className="shell blog-cta-inner">
          <div>
            <p>Quer aplicar ao seu negócio?</p>
            <h2>Seu próximo passo não precisa ser um palpite.</h2>
            <span>
              Conte para a Ravyt onde sua presença digital está hoje. Nós
              ajudamos a identificar a estrutura mais coerente para o seu momento.
            </span>
          </div>
          <a
            className="button button-light"
            href="/#contato"
          >
            Preencher diagnóstico <i aria-hidden="true">↗</i>
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
    </main>
  );
}
