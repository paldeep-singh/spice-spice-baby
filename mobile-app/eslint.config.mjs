import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  reactPlugin.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactPlugin.configs.flat["jsx-runtime"],
  {
    plugins: {
      "react-hooks": eslintPluginReactHooks,
    },
    rules: { ...eslintPluginReactHooks.configs.recommended.rules },
  },
);
