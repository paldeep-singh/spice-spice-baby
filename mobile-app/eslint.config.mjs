import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default tseslint.config(
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
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
  {
    rules: {
      "@typescript-eslint/no-explicit-any": 2,
      "@typescript-eslint/explicit-function-return-type": 2,
      "no-console": 2,
      "@typescript-eslint/no-inferrable-types": 0,
      "@typescript-eslint/no-non-null-assertion": 2,
      "@typescript-eslint/no-unused-vars": 2,
      "no-unused-vars": 0,
      "react/prop-types": 0,
      "no-extra-boolean-cast": 2,
      eqeqeq: 2,
      "react/self-closing-comp": 2,
      "react-hooks/rules-of-hooks": 2,
      "react-hooks/exhaustive-deps": 2,
      "react/jsx-filename-extension": [
        1,
        {
          extensions: [".jsx", ".tsx"],
        },
      ],
    },
  },
  {
    files: ["*/**/*test.ts", "*/**/*test.tsx"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": 0,
    },
  },
  {
    files: ["*.js"],
    rules: {
      "@typescript-eslint/no-require-imports": 0,
      "@typescript-eslint/explicit-function-return-type": 0,
    },
  },
);
