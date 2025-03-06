// src/content/config.ts
import { defineCollection, z } from "astro:content";

// 投稿コレクションのスキーマ
const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedAt: z.date(),
      updatedAt: z.date().optional(),
      category: z.string(),
      tags: z.array(z.string()),
      featuredImage: image(),
      author: z.string(), // 著者名を直接指定するシンプルな形に
      status: z.enum(["draft", "published"]).default("published"),
      isFeature: z.boolean().optional().default(false),
    }),
});

// ページコレクションのスキーマ
const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    status: z.enum(["draft", "published"]).default("published"),
  }),
});

// コレクションをエクスポート
export const collections = {
  posts: postsCollection,
  pages: pagesCollection,
};
