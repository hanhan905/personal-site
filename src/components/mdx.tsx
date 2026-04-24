import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 scroll-m-20 text-2xl font-semibold tracking-tight text-neutral-950"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-neutral-950"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mt-5 text-base leading-8 text-neutral-700" {...props} />
  ),
  a: (props) => (
    <a
      className="font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-950"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="mt-5 list-disc space-y-2 pl-6 text-neutral-700" {...props} />
  ),
  ol: (props) => (
    <ol
      className="mt-5 list-decimal space-y-2 pl-6 text-neutral-700"
      {...props}
    />
  ),
  li: (props) => <li className="leading-8" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-2 border-neutral-300 pl-5 text-neutral-600"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm text-neutral-900"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-6 overflow-x-auto rounded-[6px] border border-neutral-200 bg-neutral-950 p-4 text-sm leading-7 text-neutral-100"
      {...props}
    />
  ),
};
