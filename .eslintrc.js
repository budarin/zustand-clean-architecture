module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
    ],

    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        '@babel/eslint-plugin',
        'react',
        'jsx-a11y',
        'optimize-regex',
        'jest',
        'jest-dom',
        'testing-library',
        // должен быть последним!
        'prettier',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
        {
            // только для тестов используем плагины для тестов
            files: '**/?(*.)+(spec|test).(js|ts|tsx)',
            extends: ['plugin:jest/all', 'plugin:jest-dom/recommended', 'plugin:testing-library/react'],
        },
    ],
    rules: {
        'react/prop-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
    },
};
