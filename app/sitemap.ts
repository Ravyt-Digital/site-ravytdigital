import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { posts } from "@/app/blog/posts";
import { getPostSeo } from "@/app/blog/postSeo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date("2026-08-17"), changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/servicos`, lastModified: new Date("2026-08-17"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/servicos/criacao-de-sites`, lastModified: new Date("2026-08-17"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/servicos/gestao-de-redes-sociais`, lastModified: new Date("2026-08-17"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/servicos/criacao-de-sites-no-ceara`, lastModified: new Date("2026-08-17"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/servicos/criacao-de-sites-para-clinicas`, lastModified: new Date("2026-08-17"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/contato`, lastModified: new Date("2026-08-15"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(posts[0].date), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/autores/marcio-cabral`, lastModified: new Date("2026-08-14"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/autores/ytala-cabral`, lastModified: new Date("2026-08-15"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/politica-editorial`, lastModified: new Date("2026-08-17"), changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE_URL}/politica-de-privacidade`, lastModified: new Date("2026-08-05"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/termos-de-uso`, lastModified: new Date("2026-08-05"), changeFrequency: "yearly", priority: 0.2 },
  ];

  const articles: MetadataRoute.Sitemap = posts.map((post) => {
    const seo = getPostSeo(post.slug);
    return {
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.modifiedDate ?? post.date),
      changeFrequency: "monthly",
      priority: 0.7,
      ...(seo ? { images: [`${SITE_URL}${seo.featuredImage.src}`] } : {}),
    };
  });

  return [...staticPages, ...articles];
}
