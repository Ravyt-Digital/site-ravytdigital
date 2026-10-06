import {posts} from "@/app/blog/posts";
import {SITE_URL} from "@/lib/site";
import {blogRss} from "@/lib/rss";
export function GET(){return new Response(blogRss(posts,SITE_URL),{headers:{"Content-Type":"application/rss+xml; charset=utf-8","Cache-Control":"public, max-age=300, s-maxage=300","X-Content-Type-Options":"nosniff"}});}
