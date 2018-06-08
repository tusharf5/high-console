var HighConsole = require('./lib/high-console').HighConsole;
var debug = require('./lib/high-console').debug;
var warn = require('./lib/high-console').warn;
var success = require('./lib/high-console').success;
var error = require('./lib/high-console').error;

module.exports = {
  HighConsole: HighConsole,
  debug: debug,
  warn: warn,
  success: success,
  error: error
};
