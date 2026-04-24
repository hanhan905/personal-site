import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type Collection = "blog" | "projects";

export type ContentItem = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  featured: boolean;
  draft: boolean;
  cover?: string;
  body: string;
  readingMinutes: number;
};

const contentRoot = path.join(process.cwd(), "content");

function collectionDir(collection: Collection) {
  return path.join(contentRoot, collection);
}

function toArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string");
  }

  return [];
}

function toDateString(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString();
  }

  if (typeof value === "string") {
    return value;
  }

  return new Date().toISOString();
}

function readItem(collection: Collection, fileName: string): ContentItem {
  const slug = fileName.replace(/\.mdx$/, "");
  const filePath = path.join(collectionDir(collection), fileName);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    slug,
    title: typeof data.title === "string" ? data.title : slug,
    description: typeof data.description === "string" ? data.description : "",
    date: toDateString(data.date),
    tags: toArray(data.tags),
    featured: Boolean(data.featured),
    draft: Boolean(data.draft),
    cover: typeof data.cover === "string" ? data.cover : undefined,
    body: content,
    readingMinutes: Math.max(1, Math.ceil(readingTime(content).minutes)),
  };
}

export function getCollection(collection: Collection): ContentItem[] {
  const dir = collectionDir(collection);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => readItem(collection, fileName))
    .filter((item) => !item.draft)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}

export function getItem(collection: Collection, slug: string) {
  return getCollection(collection).find((item) => item.slug === slug);
}

export function getFeatured(collection: Collection, count = 3) {
  const items = getCollection(collection);
  const featured = items.filter((item) => item.featured);

  return (featured.length ? featured : items).slice(0, count);
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
