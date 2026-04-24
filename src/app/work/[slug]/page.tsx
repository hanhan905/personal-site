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
  return getCollection("projects").map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getItem("projects", slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `${siteConfig.url}/work/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getItem("projects", slug);

  if (!project) {
    notFound();
  }

  const { content } = await compileMDX({
    source: project.body,
    components: mdxComponents,
    options: { parseFrontmatter: false },
  });

  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8">
      <div className="border-b border-neutral-200 pb-10">
        <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
          <span>{formatDate(project.date)}</span>
          <span>·</span>
          <span>{project.readingMinutes} 分钟阅读</span>
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-neutral-600">
          {project.description}
        </p>
      </div>
      <div className="pt-4">{content}</div>
    </article>
  );
}
