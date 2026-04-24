import type { Metadata } from "next";
import { ContentCard } from "@/components/cards";
import { getCollection } from "@/lib/content";

export const metadata: Metadata = {
  title: "项目",
  description: "个人项目、工程案例和产品实验。",
};

export default function WorkPage() {
  const projects = getCollection("projects");

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-medium tracking-[0.18em] text-neutral-500 uppercase">
          Work
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950">
          项目
        </h1>
        <p className="mt-4 text-base leading-7 text-neutral-600">
          用项目展示思考方式、工程能力和产品判断。第一版先放样例项目，后续替换成你的真实作品。
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ContentCard
            key={project.slug}
            item={project}
            href={`/work/${project.slug}`}
            meta="project"
          />
        ))}
      </div>
    </section>
  );
}
