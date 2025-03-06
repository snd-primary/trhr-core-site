// src/types/schema.ts

export interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;

  publishedAt: Date;
  updatedAt?: Date;

  category: string;
  tags: string[];

  featuredImage?: string;
  ogImage?: string;
  seoTitle?: string;
  seoDescription?: string;

  authorId: string;

  status: "draft" | "published" | "archived";

  estimatedReadingTime?: number;
  viewCount?: number;
  isFeature?: boolean;
  relatedPostIds?: string[];
}

export interface Author {
  id: string;
  name: string;
  bio?: string;
  avatar?: string;
  email?: string;
  website?: string;
  socialLinks?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
  role?: string;
  expertise?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parentCategoryId?: string;
  featuredImage?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Comment {
  id: string;
  postId: string;
  author: {
    name: string;
    email?: string;
    website?: string;
    avatar?: string;
  };
  content: string;
  createdAt: Date;
  updatedAt?: Date;
  status: "pending" | "approved" | "spam";
  parentCommentId?: string;
}

export interface Page {
  id: string;
  slug: string;
  title: string;
  content: string;
  publishedAt: Date;
  updatedAt?: Date;
  status: "draft" | "published";
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: string;
  template?: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
  url: string;
  logo?: string;
  favicon?: string;
  ogImage?: string;
  copyright?: string;
  navigation: {
    header: Array<{ label: string; path: string }>;
    footer: Array<{ label: string; path: string }>;
  };
  socialLinks?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
  analyticsId?: string;
  comments?: {
    enabled: boolean;
    provider?: "disqus" | "giscus" | "custom";
    config?: any;
  };
  features?: {
    darkMode: boolean;
    search: boolean;
    toc: boolean;
  };
}
