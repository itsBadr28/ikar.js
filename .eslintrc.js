module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-shadow': 'off',
    'no-return-assign': 'off',
    'prefer-template': 'off',
    'arrow-parens': 'off',
    'no-unused-vars': 'off',
    'no-const-assign': 'off',
    'no-multi-assign': 'off',
    quotes: 'off',
    'no-else-return': 'off',
    'no-use-before-define': 'off',
    'global-require': 'off',
    'linebreak-style': 'off',
    'dot-notation': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
        'client/framework/**',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
