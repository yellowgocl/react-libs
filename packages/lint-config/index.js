module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb"],
  plugin: ["react", "react-hooks", "import"],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
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
  },
};
