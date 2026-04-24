import type { MetadataRoute } from "next";
import { getCollection } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/blog", "/work", "/about"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const posts = getCollection("blog").map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const projects = getCollection("projects").map((project) => ({
    url: `${siteConfig.url}/work/${project.slug}`,
    lastModified: new Date(project.date),
  }));

  return [...routes, ...posts, ...projects];
}
