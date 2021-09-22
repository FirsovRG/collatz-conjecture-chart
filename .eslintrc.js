module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint"
    ],
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    rules: {
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/no-explicit-any": ["error"],
        "@typescript-eslint/brace-style": ["error"],
        "@typescript-eslint/comma-dangle": ["error"],
        "@typescript-eslint/comma-spacing": ["error"],
        "@typescript-eslint/indent": ["error"],
        "@typescript-eslint/quotes": ["error", "double"],
        "max-len": ["warn", { "code": 80 }]
    }
};