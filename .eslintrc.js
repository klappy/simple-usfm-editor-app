module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended", "@unfoldingword"],
  plugins: ["react", "chai-friendly"],
  rules: {
    "react/jsx-tag-spacing": ["error"],
    "react/jsx-closing-bracket-location": ["error", "line-aligned"]
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  }
};
