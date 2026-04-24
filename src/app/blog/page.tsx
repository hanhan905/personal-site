import type { Metadata } from "next";
import { ContentCard } from "@/components/cards";
import { getCollection } from "@/lib/content";

export const metadata: Metadata = {
  title: "文章",
  description: "工程实践、产品思考和个人项目复盘。",
};

export default function BlogPage() {
  const posts = getCollection("blog");

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-medium tracking-[0.18em] text-neutral-500 uppercase">
          Blog
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950">
          文章
        </h1>
        <p className="mt-4 text-base leading-7 text-neutral-600">
          这里会沉淀技术实践、产品判断和构建过程中的复盘。第一版先放示例内容，后续替换成你的真实文章。
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <ContentCard key={post.slug} item={post} href={`/blog/${post.slug}`} />
        ))}
      </div>
    </section>
  );
}
