// src/config/site.ts
import type { SiteConfig } from "../types/schema";

export const siteConfig: SiteConfig = {
  title: "Tech Blog",
  description: "技術に関する最新情報とチュートリアルを提供します",
  language: "ja-JP",
  url: "https://example.com",
  logo: "/images/logo.svg",
  favicon: "/favicon.ico",
  ogImage: "/images/og-image.jpg",
  copyright: `© ${new Date().getFullYear()} Tech Blog. All rights reserved.`,
  navigation: {
    header: [
      { label: "ホーム", path: "/" },
      { label: "ブログ", path: "/blog" },
      { label: "カテゴリ", path: "/categories" },
      { label: "著者紹介", path: "/authors" },
      { label: "お問い合わせ", path: "/contact" },
    ],
    footer: [
      { label: "ホーム", path: "/" },
      { label: "ブログ", path: "/blog" },
      { label: "プライバシーポリシー", path: "/privacy-policy" },
      { label: "利用規約", path: "/terms-of-service" },
    ],
  },
  socialLinks: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
  analyticsId: "G-XXXXXXXXXX",
  comments: {
    enabled: true,
    provider: "giscus",
    config: {
      repo: "yourusername/blog-comments",
      repoId: "R_kgDXXXXXXXX",
      category: "Comments",
      categoryId: "DIC_kwDXXXXXXXXXXX",
    },
  },
  features: {
    darkMode: true,
    search: true,
    toc: true,
  },
};
