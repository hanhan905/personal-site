import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx";
import { formatDate, getCollection, getItem } from "@/lib/content";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCollection("blog").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getItem("blog", slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getItem("blog", slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.body,
    components: mdxComponents,
    options: { parseFrontmatter: false },
  });

  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8">
      <div className="border-b border-neutral-200 pb-10">
        <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readingMinutes} 分钟阅读</span>
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-neutral-600">
          {post.description}
        </p>
        {post.tags.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-500"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <div className="pt-4">{content}</div>
    </article>
  );
}
