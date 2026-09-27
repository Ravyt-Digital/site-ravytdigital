import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { posts } from "@/app/blog/posts";
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-27");
  const editorialUpdate = new Date("2026-09-24");
  return [
    ...["/seo", "/google-meu-negocio", "/sites", "/diagnostico", "/cases", "/sobre"].map(path => ({url:`${SITE_URL}${path}`,lastModified,changeFrequency:"monthly" as const,priority:.9})),
    {url:SITE_URL,lastModified,changeFrequency:"monthly",priority:1},
    {url:`${SITE_URL}/criacao-de-sites-online`,lastModified,changeFrequency:"monthly",priority:.9},
    {url:`${SITE_URL}/quanto-custa-criar-um-site`,lastModified,changeFrequency:"monthly",priority:.7},
    {url:`${SITE_URL}/autores/ytala-cabral`,lastModified:editorialUpdate,changeFrequency:"monthly",priority:.7},
    {url:`${SITE_URL}/contato`,lastModified,changeFrequency:"monthly",priority:.8},
    {url:`${SITE_URL}/blog`,lastModified:editorialUpdate,changeFrequency:"weekly",priority:.8},
    ...posts.map((post) => ({url:`${SITE_URL}/blog/${post.slug}`,lastModified:new Date(post.modified??post.date),changeFrequency:"monthly" as const,priority:.7})),
    {url:`${SITE_URL}/politica-de-privacidade`,lastModified:editorialUpdate,changeFrequency:"yearly",priority:.2},
    {url:`${SITE_URL}/politica-de-cookies`,lastModified:editorialUpdate,changeFrequency:"yearly",priority:.2},
    {url:`${SITE_URL}/termos-de-uso`,lastModified,changeFrequency:"yearly",priority:.2},
  ];
}
