import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { posts } from "@/app/blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date("2026-08-05"), changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(posts[0].date), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/politica-de-privacidade`, lastModified: new Date("2026-08-05"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/termos-de-uso`, lastModified: new Date("2026-08-05"), changeFrequency: "yearly", priority: 0.2 },
  ];

  const articles: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...articles];
}
