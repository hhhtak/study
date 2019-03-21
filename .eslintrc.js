module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: "vue-eslint-parser", // parserをvue用に指定
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  extends: [
    "eslint:recommended",
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // より厳しいルールにするには`plugin:vue/strongly-recommended` もしくは `plugin:vue/recommended` に切り替えることを検討してください。
    "plugin:prettier/recommended",
    "plugin:vue/recommended",
    "prettier/vue"
  ],
  // *.vue ファイルを lint にかけるために必要
  plugins: ["vue", "prettier"],
  // ここにカスタムルールを追加します。
  rules: {
    "generator-star-spacing": "off",
    "arrow-parens": 0,
    "one-var": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "vue/html-indent": ["error", 2],

    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "es5"
      }
    ]
  }
};
