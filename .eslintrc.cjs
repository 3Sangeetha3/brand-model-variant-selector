module.exports = {
    extends: [
        'eslint:recommended',
    ],
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    env: {
        es2022: true,
        node: true,
        'jest/globals': true,
    },
    plugins: ['jest'],
    rules: {
        'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
        'no-console': 'off',
    },
};