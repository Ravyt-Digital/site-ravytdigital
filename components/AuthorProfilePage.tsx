import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { posts } from "@/app/blog/posts";
import { getPostSeo } from "@/app/blog/postSeo";
import { BlogFooter, BlogHeader } from "@/components/BlogChrome";

type AuthorProfileProps = {
  name: string;
  slug: string;
  role: string;
  image: string;
  description: string;
  knowsAbout: string[];
};

export default function AuthorProfilePage({ name, slug, role, image, description, knowsAbout }: AuthorProfileProps) {
  const authorPosts = posts.filter((post) => getPostSeo(post.slug)?.author.name === name);
  const url = `${SITE_URL}/autores/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${url}#page`,
        url,
        mainEntity: { "@id": `${url}#person` },
      },
      {
        "@type": "Person",
        "@id": `${url}#person`,
        name,
        url,
        image: `${SITE_URL}${image}`,
        jobTitle: role,
        description,
        knowsAbout,
        worksFor: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <BlogHeader current="insights" />
      <main id="conteudo" className="author-page">
        <header className="author-hero"><div className="shell author-hero-grid"><Image src={image} alt={`Foto de ${name}`} width={320} height={320} priority /><div><nav className="page-breadcrumb" aria-label="Navegação estrutural"><Link href="/">Início</Link><span>/</span><Link href="/blog">Insights</Link><span>/</span><span aria-current="page">Autor</span></nav><p>Autor no Blog Ravyt Digital</p><h1>{name}</h1><strong>{role}</strong><span>{description}</span><ul aria-label="Áreas de conhecimento">{knowsAbout.map((item) => <li key={item}>{item}</li>)}</ul></div></div></header>
        <section className="author-posts" aria-labelledby="artigos-do-autor"><div className="shell"><p className="section-kicker">Conteúdos assinados</p><h2 id="artigos-do-autor">Experiência transformada em orientação prática.</h2><div>{authorPosts.map((post) => <article key={post.slug}><span>{post.category}</span><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link href={`/blog/${post.slug}`}>Ler “{post.title}” <span aria-hidden="true">↗</span></Link></article>)}</div><Link className="author-all-posts" href="/blog">Explorar todos os conteúdos da Ravyt Digital</Link></div></section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </main>
      <BlogFooter />
    </>
  );
}
