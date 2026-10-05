import { strategicPosts } from "@/app/en/blog/strategic-posts";
export type BlogPost = { slug:string; title:string; excerpt:string; category:string; date:string; dateLabel:string; readingTime:string; modified?:string; intro:string; sections:{title:string; paragraphs:string[]; links?:{label:string;href:string}[]}[]; author?:string; serviceHref?:string; serviceLabel?:string; ctaTitle?:string; editorialNote?:string; relatedSlugs?:string[]; sources?:{label:string;url:string}[]; quickAnswer?:string; comparison?:{title:string;note:string;headers:[string,string,string];rows:[string,string,string][]}; checklist?:{title:string;items:string[]} };

// Publicamos apenas artigos ligados à oferta atual de Google, sites e SEO.
export const posts: BlogPost[] = strategicPosts;
export function getPost(slug:string){ return posts.find(post => post.slug === slug); }
