const yargs = require("yargs");

const options = {
  w: {
      alias: 'watch',
      type: 'boolean'
    },
  p: {
      alias: 'port',
      type: 'number',
      default: 8080
  },
  s: {
      alias: 'server',
      type: 'boolean'
  },
  m: {
      alias: 'mode',
      type: 'string',
      default: 'test'
  },
  verbose: {
      alias: 'verbose',
      type: 'boolean',
      default: false
  },
  ac: {
      alias: 'account',
      type: 'string'
  },
  pa: {
      alias: 'password',
      type: 'string'
  }
};

exports.yargs = yargs.options(options).argv;