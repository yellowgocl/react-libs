module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended",
  "plugin:react/recommended", "airbnb"],
  plugins: ["react", "react-hooks", "import"],
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      legacyDecorators: true,
      modules: true,
      jsx: true,
    },
  },
  
  rules: {
    "space-before-function-paren": 0,
    indent: [2, 2, { VariableDeclarator: 1 }],
    "import/prefer-default-export": 0
  },
};
