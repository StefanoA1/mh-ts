const EXTENSIONS = [
  '.js',
  '.cjs',
  '.mjs',
  '.jsx',
  '.d.ts',
  '.ts',
  '.tsx',
  '.json',
  '.node',
  '.yml',
  '.yaml'
];

module.exports = {
  env: {
    es6: true,
    node: true
  },
  root: true,
  plugins: ['@stefanoa1/sab', '@typescript-eslint'],
  extends: [
    'plugin:@stefanoa1/sab/core',
    'plugin:@stefanoa1/sab/ava',
    'plugin:@stefanoa1/sab/es20-xx',
    'plugin:@stefanoa1/sab/lodash-fp',
    'plugin:@stefanoa1/sab/prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    '@stefanoa1/sab/no-overwriting-spread': 'off',
    // import
    'import/no-extraneous-dependencies': 'off',
    // node
    'n/no-missing-import': 'off',
    'n/no-extraneous-import': ['error'],
    'n/no-unsupported-features/es-syntax': ['error', {ignores: ['modules']}],
    // ts
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/ban-ts-comment': ['error', {'ts-expect-error': 'allow-with-description'}],
    // ava
    'ava/no-ignored-test-files': 'error',
    // other
    'fp/no-loops': 'off',
    'promise/no-native': 'off',
    'promise/no-callback-in-promise': 'off',
    strict: 'off'
  },
  overrides: [
    {
      files: ['**/test/**/*.integration.*'],
      rules: {
        'ava/no-ignored-test-files': 'off'
      }
    }
  ],
  settings: {
    'import/ignore': ['node_modules'],
    'import/extensions': ['.js', '.ts', '.tsx'],
    'import/core-modules': ['ava'],
    node: {
      resolvePaths: ['node_modules/@types'],
      tryExtensions: EXTENSIONS
    },
    'import/resolver': {
      node: {
        extensions: EXTENSIONS
      },
      typescript: true
    }
  }
};
