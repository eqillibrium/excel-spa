module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        babelOption: {
            configFile: './babel.config.json',
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'google'],
    rules: {
        'indent': ['error', 4],
        'semi': 'off',
        'comma-dangle': 'off',
    },
};
