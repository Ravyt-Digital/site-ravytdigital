import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { posts } from "@/app/blog/posts";
import { getPostSeo } from "@/app/blog/postSeo";

export const metadata: Metadata = {
  title: "Marcio Cabral | Autor no Blog Ravyt Digital",
  description:
    "Conheça os artigos de Marcio Cabral publicados no blog da Ravyt Digital sobre tecnologia, Social Media e presença digital.",
  alternates: { canonical: "/autores/marcio-cabral" },
};

export default function MarcioCabralAuthorPage() {
  const authorPosts = posts.filter(
    (post) => getPostSeo(post.slug)?.author.name === "Marcio Cabral",
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Marcio Cabral",
      url: `${SITE_URL}/autores/marcio-cabral`,
      description:
        "Autor no blog da Ravyt Digital, com conteúdos sobre tecnologia, Social Media e presença digital.",
    },
  };

  return (
    <main id="conteudo" className="legal-page">
      <section className="legal-hero">
        <div className="shell">
          <p>Autor</p>
          <h1>Marcio Cabral</h1>
          <span>
            Conteúdos sobre tecnologia, Social Media e presença digital no blog da Ravyt Digital.
          </span>
        </div>
      </section>

      <section className="legal-content">
        <div className="shell">
          <h2>Artigos publicados</h2>
          <ul>
            {authorPosts.map((post) => (
              <li key={post.slug}>
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </li>
            ))}
          </ul>
          <p>
            <a href="/blog">Ver todos os artigos do blog Ravyt Digital</a>
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}
