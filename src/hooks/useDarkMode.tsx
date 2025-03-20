import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export const useDarkMode = () => {
  const getInitialTheme = (): Theme => {
    if (typeof window == "undefined") return "light";

    const storedTheme = localStorage.getItem("theme") as Theme | null;

    if (storedTheme) {
      return storedTheme;
    }

    const usePrefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    return usePrefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";

      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    // DOM更新（必要なクラスの追加・削除）
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // アクセシビリティのためカラースキームを設定
    document.documentElement.setAttribute("data-theme", theme);

    // メタタグも更新して、ブラウザUIに通知
    const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
    if (metaColorScheme) {
      metaColorScheme.setAttribute("content", theme);
    }
  }, [theme]);

  // システムのテーマ変更を監視
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      // ユーザーが手動で設定していない場合のみシステム設定に従う
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return { theme, toggleTheme };
};
