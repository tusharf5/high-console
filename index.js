var HighConsole = require('./lib/core').HighConsole;
var debug = require('./lib/core').debug;
var warn = require('./lib/core').warn;
var success = require('./lib/core').success;
var error = require('./lib/core').error;

module.exports = {
  HighConsole: HighConsole,
  debug: debug,
  warn: warn,
  success: success,
  error: error
};
