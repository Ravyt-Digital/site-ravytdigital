import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE_URL } from "@/lib/site";
import { posts, type BlogPost } from "./posts";
import { getPostSeo } from "./postSeo";

const topicClusters = [
  {
    title: "Conteúdo, SEO e busca generativa",
    description: "Como produzir informação útil, rastreável e preparada para pessoas, Google e sistemas de IA.",
    slugs: ["seo-information-gain-busca-generativa", "edits-instagram-stories-fluxo-producao"],
  },
  {
    title: "Presença digital, confiança e conversão",
    description: "Decisões práticas sobre sites, redes sociais, percepção de valor e estruturas que conduzem o cliente.",
    slugs: ["instagram-nao-substitui-site-proprio", "site-bonito-nao-basta", "pagina-de-vendas-ou-site-institucional"],
  },
];

export const metadata: Metadata = {
  title: "Blog Ravyt Digital | SEO, Social Media, Sites e Presença Digital",
  description:
    "Conteúdos da Ravyt Digital sobre SEO, Social Media, sites, conversão e presença digital para empresas que querem crescer com estratégia e estrutura.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog Ravyt Digital | Estratégia e Presença Digital",
    description:
      "Conteúdo prático sobre SEO, Social Media, sites, conversão e tecnologia para negócios.",
    url: "/blog",
    type: "website",
  },
};

function PostArt({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  const seo = getPostSeo(post.slug);

  if (!seo) return null;

  return (
    <div
      className={`blog-post-art${featured ? " blog-post-art-featured" : ""}`}
      style={{ overflow: "hidden", background: "#121416" }}
    >
      <Image
        src={seo.featuredImage.src}
        alt={seo.featuredImage.alt}
        width={seo.featuredImage.width}
        height={seo.featuredImage.height}
        loading={featured ? "eager" : "lazy"}
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
  );
}

export default function BlogPage() {
  const [featured, ...others] = posts;
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "Blog Ravyt Digital",
    description:
      "Conteúdos sobre SEO, Social Media, sites, conversão, marca e presença digital.",
    url: `${SITE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Ravyt Digital",
      url: SITE_URL,
    },
    blogPost: posts.map((post) => {
      const seo = getPostSeo(post.slug);
      return {
        "@type": "BlogPosting",
        headline: post.title,
        description: seo?.metaDescription ?? post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        url: `${SITE_URL}/blog/${post.slug}`,
        ...(seo
          ? {
              image: `${SITE_URL}${seo.featuredImage.src}`,
              author: {
                "@type": seo.author.type,
                name: seo.author.name,
                url: seo.author.url.startsWith("http")
                  ? seo.author.url
                  : `${SITE_URL}${seo.author.url}`,
                ...(seo.author.jobTitle ? { jobTitle: seo.author.jobTitle } : {}),
                image: `${SITE_URL}${seo.author.image}`,
                knowsAbout: seo.author.knowsAbout,
              },
            }
          : {}),
      };
    }),
  };

  const featuredSeo = getPostSeo(featured.slug);

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
              Conteúdos sobre SEO, Social Media, sites, marca e tecnologia — para
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
            <PostArt post={featured} featured />
            <div className="featured-copy">
              <p>{featured.category}</p>
              <h2>{featured.title}</h2>
              <span>{featured.excerpt}</span>
              <div>
                <small>
                  Por {featuredSeo?.author.name ?? "Ravyt Digital"} · {featured.dateLabel} · {featured.readingTime}
                </small>
                <b>Ler artigo <i aria-hidden="true">↗</i></b>
              </div>
            </div>
          </a>

          <section className="topic-clusters" aria-labelledby="trilhas-tematicas">
            <div className="blog-list-head topic-clusters-head">
              <div>
                <p>02 / Trilhas temáticas</p>
                <h2 id="trilhas-tematicas">Comece pelo tema que ajuda sua decisão agora.</h2>
              </div>
              <span>
                Cada trilha conecta conteúdos relacionados para você avançar do fundamento à aplicação, sem leituras soltas.
              </span>
            </div>
            <div className="topic-cluster-grid">
              {topicClusters.map((cluster, clusterIndex) => (
                <article className="topic-cluster-card" key={cluster.title}>
                  <span>{String(clusterIndex + 1).padStart(2, "0")}</span>
                  <h3>{cluster.title}</h3>
                  <p>{cluster.description}</p>
                  <ul>
                    {cluster.slugs.map((slug) => {
                      const item = posts.find((post) => post.slug === slug);
                      return item ? (
                        <li key={slug}>
                          <a href={`/blog/${slug}`}>{item.title}</a>
                        </li>
                      ) : null;
                    })}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <div className="blog-list-head">
            <div>
              <p>03 / Conteúdos recentes</p>
              <h2>Para transformar intenção em direção.</h2>
            </div>
            <span>
              Leituras objetivas para entender o que sua presença digital
              precisa fazer antes de decidir apenas como ela deve parecer.
            </span>
          </div>

          <div className="post-grid">
            {others.map((post) => {
              const seo = getPostSeo(post.slug);
              return (
                <a className="post-card" href={`/blog/${post.slug}`} key={post.slug}>
                  <PostArt post={post} />
                  <div className="post-card-copy">
                    <p>{post.category}</p>
                    <h3>{post.title}</h3>
                    <span>{post.excerpt}</span>
                    <small>
                      Por {seo?.author.name ?? "Ravyt Digital"} · {post.readingTime} <b aria-hidden="true">↗</b>
                    </small>
                  </div>
                </a>
              );
            })}
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
          <Link className="button button-light" href="/#contato">
            Preencher diagnóstico <i aria-hidden="true">↗</i>
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
    </main>
  );
}
