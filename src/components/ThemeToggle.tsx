import type React from "react";
import { useDarkMode } from "@/hooks/useDarkMode";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useDarkMode();
  return (
    <button
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "ライトモードに切り替え" : "ダークモードに切り替え"
      }
      type="button"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeToggle;
