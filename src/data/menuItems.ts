export interface MenuItem {
  id: number;
  href: string;
  text: string;
  subItems?: MenuItem[];
}
export const mainMenuItems: MenuItem[] = [
  { id: 1, href: "/", text: "ホーム" },
  { id: 2, href: "/blog", text: "ブログ" },
  { id: 3, href: "/about", text: "会社概要" },
  { id: 4, href: "/services", text: "サービス" },
  { id: 5, href: "/contact", text: "お問い合わせ" },
];
