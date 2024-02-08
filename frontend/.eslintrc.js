module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
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
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0, // linebreak
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'], // consistent single quotes
    'react/no-unknown-property': [
      'error',
      { ignore: ['css', 'js', 'uk-accordion'] },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }], // needed for prop types
  },
};
