module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: "module",
    },

    settings: {
        react: {
            createClass: "createReactClass",
            pragma: "React",
            version: "detect",
        },
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:workspaces/recommended",
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },

    plugins: ["react", "react-hooks", "prettier", "workspaces"],
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "prettier/prettier": "error",
        "react/display-name": [0],
        "react/prop-types": [1],
        "no-unused-vars": [1],
        "no-console": "off",
        "no-empty": [0],
        // 'comma-dangle': [
        //     'warn',
        //     {
        //         arrays: 'always-multiline',
        //         objects: 'always-multiline',
        //         imports: 'always-multiline',
        //         exports: 'always-multiline',
        //         functions: 'never',
        //     },
        // ],
        quotes: [2, "double", {avoidEscape: true, allowTemplateLiterals: false}],
        semi: [1, "never"],
        "max-len": [
            1,
            {
                code: 120,
                ignoreUrls: true,
                ignoreComments: true,
                ignoreTemplateLiterals: true,
                ignoreStrings: true,
            },
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        indent: "off",
        "no-restricted-syntax": [
            "warn",
            {
                selector: "SequenceExpression",
                message: "The comma operator is confusing and a common mistake. Don’t use it!",
            },
        ],
    },
}
