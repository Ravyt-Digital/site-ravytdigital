import {recoveredPosts} from "./recovered-posts";
import {additionalPosts} from './additional-posts';
import {getPost as getOriginalPost} from '@/app/blog/posts';
import { strategicPosts } from "@/app/en/blog/strategic-posts";
export type BlogPost = { slug:string; title:string; excerpt:string; category:string; date:string; dateLabel:string; readingTime:string; modified?:string; intro:string; sections:{title:string; paragraphs:string[]; links?:{label:string;href:string}[]}[]; author?:string; serviceHref?:string; serviceLabel?:string; ctaTitle?:string; editorialNote?:string; relatedSlugs?:string[]; images?:{src:string;width:number;height:number;alt:string;caption:string}[]; sources?:{label:string;url:string}[]; quickAnswer?:string; comparison?:{title:string;note:string;headers:[string,string,string];rows:[string,string,string][]}; checklist?:{title:string;items:string[]} };

// Publicamos apenas artigos ligados à oferta atual de Google, sites e SEO.
export const posts: BlogPost[] = [...recoveredPosts,...additionalPosts,...strategicPosts.map(post=>({...post,images:getOriginalPost(post.slug)?.images?.map(image=>({...image,alt:post.title,caption:post.excerpt}))}))];
export function getPost(slug:string){ return posts.find(post => post.slug === slug); }
