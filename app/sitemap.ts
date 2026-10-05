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
    "/blog", "/autores/ytala-cabral", "/recursos/checklist-presenca-google",
    "/politica-de-privacidade", "/politica-de-cookies", "/termos-de-uso",
  ];
  const original = [
    ...pages.map((path) => ({ url: `${SITE_URL}${path === "/" ? "" : path}` })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.modified ?? post.date),
    })),
  ];
  return original.flatMap(entry=>{const ptOnly=["/blog/manutencao-de-site-o-que-inclui", "/blog/testar-velocidade-site-celular"].some(path => entry.url.endsWith(path));return (ptOnly?["pt"]:["pt","en","fr","es"]).map(lang=>{const path=entry.url.slice(SITE_URL.length);return {...entry,url:SITE_URL+(lang==="pt"?path:"/"+lang+path),alternates:{languages:ptOnly?{"pt-BR":entry.url,"x-default":entry.url}:{"pt-BR":entry.url,en:SITE_URL+"/en"+path,fr:SITE_URL+"/fr"+path,es:SITE_URL+"/es"+path,"x-default":entry.url}}};});});
}
