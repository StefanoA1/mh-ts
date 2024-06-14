// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./ava.config.cjs');

module.exports = {
  ...config,
  files: ['test/**/*.integration.test.ts'],
  timeout: '30s'
};
