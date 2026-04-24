import Link from "next/link";
import { ContentItem, formatDate } from "@/lib/content";

type CardProps = {
  item: ContentItem;
  href: string;
  meta?: "date" | "project";
};

export function ContentCard({ item, href, meta = "date" }: CardProps) {
  return (
    <Link
      href={href}
      className="group grid gap-4 rounded-[6px] border border-neutral-200 bg-white/70 p-5 transition hover:-translate-y-0.5 hover:border-neutral-300 hover:bg-white hover:shadow-[0_24px_70px_rgba(38,38,38,0.08)]"
    >
      <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
        <span>{meta === "date" ? formatDate(item.date) : "精选项目"}</span>
        <span>·</span>
        <span>{item.readingMinutes} 分钟阅读</span>
      </div>
      <div className="grid gap-2">
        <h3 className="text-lg font-semibold tracking-tight text-neutral-950 group-hover:underline">
          {item.title}
        </h3>
        <p className="text-sm leading-6 text-neutral-600">{item.description}</p>
      </div>
      {item.tags.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-200 px-2.5 py-1 text-xs text-neutral-500"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </Link>
  );
}
