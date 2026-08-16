import { metaPost } from "./metaPost";
import { posts as basePosts } from "./posts";

export type { BlogPost } from "./posts";

export const posts = [metaPost, ...basePosts];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
