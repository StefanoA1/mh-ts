module.exports = {
  extensions: {
    ts: 'module'
  },
  files: ['test/**/*.test.ts', '!test/**/*.integration.test.ts'],
  require: ['ts-node/register/transpile-only']
};
