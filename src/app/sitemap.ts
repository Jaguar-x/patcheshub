import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog-posts";
import { keychainTypes } from "@/content/keychains";
import { patchTypes } from "@/content/patch-types";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL;
  if (!origin) return [];

  const paths = [
    ...patchTypes.map(({ id }) => `/patches/${id}`),
    "/pins",
    "/coins",
    ...keychainTypes.map(({ id }) => `/keychains/${id}`),
    "/blog",
    ...blogPosts.map(({ slug }) => `/blog/${slug}`),
  ];
  return paths.map((path) => ({ url: new URL(path, origin).href }));
}
