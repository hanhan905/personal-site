import Image from "next/image";
import Link from "next/link";
import { ContentCard } from "@/components/cards";
import { getFeatured } from "@/lib/content";
import { profile, siteConfig } from "@/lib/site";

export default function Home() {
  const posts = getFeatured("blog", 2);
  const projects = getFeatured("projects", 2);

  return (
    <div>
      <section className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium tracking-[0.22em] text-neutral-500 uppercase">
            {siteConfig.role}
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            {profile.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
            >
              阅读文章
            </Link>
            <Link
              href="/work"
              className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:border-neutral-950"
            >
              查看项目
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative aspect-square w-full max-w-sm rounded-[8px] border border-neutral-200 bg-white p-8 shadow-[0_30px_90px_rgba(38,38,38,0.08)]">
            <Image
              src={siteConfig.avatar}
              alt={`${siteConfig.name} 的头像`}
              width={240}
              height={240}
              priority
              className="mx-auto h-40 w-40 rounded-full"
            />
            <div className="mt-8 border-t border-neutral-200 pt-6">
              <p className="text-xl font-semibold text-neutral-950">
                {siteConfig.name}
              </p>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {siteConfig.location}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {profile.principles.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200/80 bg-white/55">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-3">
          {profile.principles.map((item) => (
            <div key={item}>
              <p className="text-sm font-medium text-neutral-950">{item}</p>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                这是首版占位文案，后续会替换成你的真实工作方式、项目判断和写作主题。
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-medium tracking-[0.18em] text-neutral-500 uppercase">
            Writing
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950">
            最近文章
          </h2>
        </div>
        <div className="grid gap-4">
          {posts.map((post) => (
            <ContentCard key={post.slug} item={post} href={`/blog/${post.slug}`} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-medium tracking-[0.18em] text-neutral-500 uppercase">
            Work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950">
            精选项目
          </h2>
        </div>
        <div className="grid gap-4">
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
    </div>
  );
}
