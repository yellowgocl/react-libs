"use strict";

module.exports = {
  parser: "babel-eslint",
  extends: ["plugin:import/react", "airbnb"],
  plugin: ["react", "react-hooks", "import"],
  env: {
    node: true,
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
  settings: {
    react: {
      version: "16",
    },
  },
  rules: {
    "space-before-function-paren": 0,
    "react/prop-types": 0,
    "react/jsx-handler-names": 0,
    "react/jsx-fragments": 0,
    "react/no-unused-prop-types": 0,
    "import/export": 0,
    indent: [2, 2, { VariableDeclarator: 1 }],
  },
};
