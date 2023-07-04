module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:@typescript-eslint/recommended',
    ],

    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'jsx-a11y',
        'optimize-regex',
        'jest',
        'jest-dom',
        'testing-library',
        '@typescript-eslint',
        '@babel/eslint-plugin',
        'react',
        // должен быть последним!
        'prettier',
    ],
    rules: {
        'react/prop-types': 'off',
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
            extends: ['plugin:jest/all', 'plugin:jest-dom/recommended', 'plugin:testing-library/all'],
        },
    ],
};
