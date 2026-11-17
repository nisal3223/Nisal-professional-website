import { generatedPosts } from "./generated-posts";
export type Post = (typeof generatedPosts)[number];
export const posts = [...generatedPosts].sort((a, b) => b.date.localeCompare(a.date));
export const getPost = (slug: string) => posts.find((post) => post.slug === slug);
