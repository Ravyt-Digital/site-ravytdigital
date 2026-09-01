import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-01");
  return [
    {url:SITE_URL,lastModified,changeFrequency:"monthly",priority:1},
    {url:`${SITE_URL}/social-media-para-psicologos-parentais`,lastModified,changeFrequency:"monthly",priority:.9},
    {url:`${SITE_URL}/autores/ytala-cabral`,lastModified,changeFrequency:"monthly",priority:.7},
    {url:`${SITE_URL}/contato`,lastModified,changeFrequency:"monthly",priority:.8},
    {url:`${SITE_URL}/politica-de-privacidade`,lastModified,changeFrequency:"yearly",priority:.2},
    {url:`${SITE_URL}/politica-de-cookies`,lastModified,changeFrequency:"yearly",priority:.2},
    {url:`${SITE_URL}/termos-de-uso`,lastModified,changeFrequency:"yearly",priority:.2},
  ];
}
