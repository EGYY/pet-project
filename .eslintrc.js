module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    overrides: [
        {
            files: ['global.d.ts', '*.test.tsx', '*.test.ts'],
            rules: {
                'no-undef': 'off',
                'i18next/no-literal-string': 'off'
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',

    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next'
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'linebreak-style': 'off',
        'react/button-has-type': 'off',
        'react/jsx-props-no-spreading': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true, onlyAttribute: ['']}]
    },
    globals: {
        __IS_DEV__: true,
    },
}