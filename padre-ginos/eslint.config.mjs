import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */

// The execution occurs respectively in the order of the array, but prettier has to be the last one
// Prettier just turn off things and don't add anything
export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      // To avoid problems on try to use window or document on the code
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Allow to use JSX
        },
      },
    },
  },

  prettier,
];
