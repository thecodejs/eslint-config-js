const Rules = require('@thecodejs/eslint-rules/rules-js')

module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:jsx-a11y/recommended'
    ],
    globals: {
        Audio: true,
        Element: true,
        Event: true,
        localStorage: true
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 12,
        requireConfigFile: false,
        sourceType: 'module'
    },
    plugins: ['babel', 'jsx-a11y'],
    rules: {
        ...Rules
    },
    settings: {}
}
