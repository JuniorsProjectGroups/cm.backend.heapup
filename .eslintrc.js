module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  env: {
    node: true,
    jest: true,
    commonjs: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ['@typescript-eslint/eslint-plugin', "@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"
  ],
  root: true,
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "prettier/prettier": ["error"],
    "array-bracket-spacing": ["error", "never"],
    "arrow-spacing": 2,
    "class-methods-use-this": 0,
    "computed-property-spacing": ["error", "never"],
    "key-spacing": [
      2,
      {
        afterColon: true,
      },
    ],
    "keyword-spacing": 2,
    "linebreak-style": "off",
    "lines-around-comment": [
      "error",
      {
        afterBlockComment: false,
        beforeBlockComment: false,
      },
    ],
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "no-console": "off",
    "no-unused-vars": "off",
    "no-useless-escape": "off",
    "object-curly-newline": [
      "error",
      {
        ImportDeclaration: {
          consistent: true,
          multiline: true,
        },
      },
    ],
    "object-curly-spacing": [2, "always"],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        next: "function",
        prev: "function",
      },
      {
        blankLine: "always",
        next: "class",
        prev: "class",
      },
    ],
    quotes: ["error", "double", { avoidEscape: true }],
    semi: [
      "error",
      "always",
      {
        omitLastInOneLineBlock: true,
      },
    ],
    "quote-props": ["error", "as-needed"],
    "sort-imports": 0,
    "space-before-blocks": 2,
    "space-before-function-paren": "off",
    "space-in-parens": ["error", "never"],
    "object-property-newline": "error",
    "max-lines": ["error", 200],
    "max-lines-per-function": ["error", 30],
    "max-params": ["error", 2],
  },
};
