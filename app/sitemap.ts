import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { posts } from "@/app/blog/posts";
export default function sitemap(): MetadataRoute.Sitemap {
  // Apenas URLs canônicas publicadas; não inventar datas de atualização para páginas estáticas.
  const pages = [
    "/", "/google-meu-negocio", "/sites", "/seo",
    "/sites-para-empresas-de-engenharia",
    "/sites-para-escritorios-de-arquitetura",
    "/sites-para-moveis-planejados",
    "/criacao-de-sites-online", "/quanto-custa-criar-um-site",
    "/diagnostico", "/contato", "/cases", "/sobre",
    "/blog", "/autores/ytala-cabral",
    "/politica-de-privacidade", "/politica-de-cookies", "/termos-de-uso",
  ];
  return [
    ...pages.map((path) => ({ url: `${SITE_URL}${path === "/" ? "" : path}` })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.modified ?? post.date),
    })),
  ];
}
