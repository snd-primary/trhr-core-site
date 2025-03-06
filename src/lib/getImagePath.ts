import type { Post } from "@/types/schema";

// src/utils/getImagePath.ts
export function getImagePath(post: Post) {
  // 記事にthumbnailフィールドがあればそれを使用
  if (post.featuredImage) {
    return post.featuredImage;
  }

  // フォールバック用のデフォルト画像
  return "/images/default-thumbnail.jpg";
}
