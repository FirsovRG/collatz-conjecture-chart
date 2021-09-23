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
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
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
        "@typescript-eslint/object-curly-spacing": ["error", "always"],
        "react/jsx-curly-spacing": [
            "error",
            {
                "when": "always",
                "children": true 
            }
        ],
        "react/prop-types": "off",
        "react/display-name": "off",
        "react/jsx-first-prop-new-line": ["warn", "multiline"],
        "react/jsx-max-props-per-line": [1, { "maximum": 2 }],
        "react/jsx-closing-bracket-location": 1,
        "newline-before-return": 1,
        "react/jsx-no-target-blank": 1,
        "react/jsx-one-expression-per-line": 1,
        "react/jsx-wrap-multilines": [1, { "return": "parens-new-line" }],
        "object-curly-newline": ["warn", { "minProperties": 2 }],
        "max-len": ["warn", { "code": 120 }]
    }
};