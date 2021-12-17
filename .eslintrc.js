module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "no-unused-vars": 0,
    "@typescript-eslint/camelcase": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "eslint@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "mui-unused-classes/unused-classes": 2,
    "no-inline-styles/no-inline-styles": 1,
    curly: 2,
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
  },
  plugins: ["@typescript-eslint", "custom-rules", "mui-unused-classes", "eslint-plugin-no-inline-styles"],
  globals: {
    React: true,
    JSX: true,
  },
}
