export const siteConfig = {
  name: "Han",
  role: "全栈工程师 / 独立创造者",
  title: "Han - 个人技术品牌站",
  description:
    "记录工程实践、产品思考和个人项目的中文个人网站。",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://personal-site.vercel.app",
  avatar: "/avatar.svg",
  location: "Chengdu, China",
  email: "hello@example.com",
  social: [
    { label: "GitHub", href: "https://github.com/yourname" },
    { label: "X", href: "https://x.com/yourname" },
    { label: "Email", href: "mailto:hello@example.com" },
  ],
  nav: [
    { label: "首页", href: "/" },
    { label: "文章", href: "/blog" },
    { label: "项目", href: "/work" },
    { label: "关于", href: "/about" },
  ],
};

export const profile = {
  headline: "把复杂问题拆成清晰、可运行、可长期维护的产品。",
  intro:
    "这里是一个原创的极简个人技术品牌站。第一版使用占位内容，后续可以替换成你的真实经历、项目、文章和社交链接。",
  principles: ["清晰胜过炫技", "长期维护优先", "用作品表达能力"],
  skills: [
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Product Engineering",
  ],
};
