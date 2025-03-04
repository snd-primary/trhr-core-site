// eslint.config.js
import eslint from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import astroPlugin from "eslint-plugin-astro";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  eslint.configs.recommended,

  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    // これらのパターンに一致するファイルは無視されます
    ignores: [
      "node_modules/**",
      "dist/**",
      ".astro/**",
      ".vscode/**",
      "public/**",
    ],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "prettier/prettier": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
  },
  {
    files: ["**/*.astro"],
    ...astroPlugin.configs.recommended,
    parser: "astro-eslint-parser",
    parserOptions: {
      parser: "@typescript-eslint/parser",
      extraFileExtensions: [".astro"],
    },
  },
];
