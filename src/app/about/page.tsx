import type { Metadata } from "next";
import Image from "next/image";
import { profile, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "关于",
  description: "关于这个个人技术品牌站和站点作者。",
};

export default function AboutPage() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.7fr_1.3fr]">
      <aside>
        <div className="rounded-[6px] border border-neutral-200 bg-white/70 p-6">
          <Image
            src={siteConfig.avatar}
            alt={`${siteConfig.name} 的头像`}
            width={120}
            height={120}
            className="h-24 w-24 rounded-full"
          />
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-neutral-950">
            {siteConfig.name}
          </h1>
          <p className="mt-2 text-sm text-neutral-500">{siteConfig.role}</p>
          <p className="mt-6 text-sm leading-7 text-neutral-600">
            {siteConfig.description}
          </p>
        </div>
      </aside>
      <div>
        <p className="text-sm font-medium tracking-[0.18em] text-neutral-500 uppercase">
          About
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950">
          关于我
        </h2>
        <div className="mt-8 space-y-6 text-base leading-8 text-neutral-700">
          <p>
            这里暂时使用占位内容。后续可以写入你的真实经历、技能方向、职业目标、代表作品和联系方式。
          </p>
          <p>
            这个网站的第一版目标是建立一个清晰、可信、可持续更新的个人技术品牌入口，而不是一次性做满所有功能。
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-neutral-950">技能关键词</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
