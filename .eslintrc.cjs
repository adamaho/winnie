// eslint-disable-next-line no-undef
module.exports = {
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "turbo",
        "prettier",
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    settings: {
      next: {
        rootDir: "apps/*"
      },
      react: {
        version: "detect"
      }
    },
    overrides: [
      {
        files: ["*.ts", "*.tsx"],
        parser: "@typescript-eslint/parser"
      },
      {
        files: ["apps/**/*.ts", "apps/**/*.tsx"],
        extends: [
          "next/core-web-vitals",
        ]
      }
    ],
    rules: {
      "react/react-in-jsx-scope": "off"
    }
};