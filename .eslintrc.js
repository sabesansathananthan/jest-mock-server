module.exports = {
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es2021: true,
    },
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2020,
        sourceType: "module",
    },
    overrides: [
        {
            files: ["*.test.js"],
            plugins: ["jest"],
            extends: ["plugin:jest/recommended"],
            env: {
                "jest/globals": true,
            },
        },
        {
            files: ["*.ts"],
            parser: "@typescript-eslint/parser",
            plugins: ["@typescript-eslint"],
            extends: ["plugin:@typescript-eslint/recommended"],
        },
    ],
    globals: {
        uni: true,
        wx: true,
        process: true,
        Promise: true,
    },
    rules: {
        // semicolon
        "semi": "error",
        // Keep the same style of object key-value quotation marks
        "quote-props": ["error", "consistent-as-needed"],
        // Arrow functions allow single parameters without parentheses
        "arrow-parens": ["error", "as-needed"],
        // no var
        "no-var": "error",
        // const
        "prefer-const": "error",
        // Allow console
        "no-console": "off",
    },
};
