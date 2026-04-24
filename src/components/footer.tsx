import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js.
        </p>
        <div className="flex flex-wrap gap-4">
          {siteConfig.social.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-neutral-950"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
