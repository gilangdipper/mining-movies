module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', '@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'no-var': 'error',
    'brace-style': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'space-before-blocks': 'error',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'class-methods-use-this': 'off',
    'default-case': 'error',
    'default-case-last': 'error',
    'eol-last': 2,
    'guard-for-in': 'error',
    'jsx-a11y/click-events-have-key-events': 'off',
    'lines-between-class-members': ['error', 'always'],
    'max-len': [1, { code: 90 }],
    'no-await-in-loop': 'off',
    'no-cond-assign': ['error', 'always'],
    'no-console': ['warn', { allow: ['error'] }],
    'no-duplicate-case': 'error',
    'no-duplicate-imports': ['error', { includeExports: false }],
    'no-else-return': 'error',
    'no-nested-ternary': 'error',
    'no-plusplus': 'off',
    'no-promise-executor-return': 'error',
    'no-restricted-syntax': 'off',
    'no-shadow': 'off',
    'no-unneeded-ternary': ['error', { defaultAssignment: true }],
    'one-var-declaration-per-line': 'error',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 0,
    'react/jsx-one-expression-per-line': [1, { allow: 'single-child' }],
    'react/no-array-index-key': 'warn',
    'react/prop-types': 'off',
    'react/sort-comp': 'off',
    'sort-imports': [
      'error',
      {
        allowSeparatedGroups: true,
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
  },
  overrides: [
    {
      files: [
        '**/*.test.js',
        '**/*.test.jsx',
        '**/*.test.tsx',
        '**/*.spec.js',
        '**/*.spec.jsx',
        '**/*.spec.tsx',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
