module.exports = {
  HighConsole: HighConsole,
  debug: debug,
  warn: warn,
  success: success,
  error: error
};

let configObject = {
  mode: "dayDev",
  upperCase: true,
  enableLabel: true,
  enabled: true
};

function HighConsole(config) {
  configObject = Object.assign({}, configObject, config);
}

const types = {
  debug: "debug",
  warn: "warn",
  error: "error",
  success: "success"
};

const theme = {
  dayDev: {
    debug: {
      color: "#2e2e2e",
      backgroundColor: "#fff",
      fontSize: "13px",
      padding: "8px 0",
      textTransform: () => (configObject.upperCase ? "uppercase" : "none")
    },
    warn: {
      color: "#ffcc00",
      backgroundColor: "#fff",
      fontSize: "13px",
      padding: "8px 0",
      textTransform: () => (configObject.upperCase ? "uppercase" : "none")
    },
    error: {
      color: "#cc3300",
      backgroundColor: "#fff",
      fontSize: "13px",
      padding: "8px 0",
      textTransform: () => (configObject.upperCase ? "uppercase" : "none")
    },
    success: {
      color: "#339900",
      backgroundColor: "#fff",
      fontSize: "13px",
      padding: "8px 0",
      textTransform: () => (configObject.upperCase ? "uppercase" : "none")
    }
  }
};

const symbols = {
  dayDev: {
    debug: "●",
    error: "✖",
    warn: "⚠",
    success: "✔"
  }
};

function camelCaseToDash(str) {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
}

function makeStyleOutOfObject(obj) {
  return Object.keys(obj).reduce((acc, curr) => {
    const styles =
      acc +
      `${camelCaseToDash(curr)}:${
        typeof obj[curr] === "function" ? obj[curr]() : obj[curr]
      }; `;
    return styles;
  }, "");
}

function printMessage(type, message, data) {
  configObject.enabled &&
    console.log(
      `%c%s %o\n`,
      makeStyleOutOfObject(theme[configObject.mode][type]),
      `${symbols[configObject.mode][type]} ${message}`,
      data
    );
}

function getMessageAndData(args) {
  const array = [].slice.call(arguments[0], 0);
  let message = "";
  let data = {};
  array.forEach(elem => {
    if (typeof elem === "string") {
      message = elem;
    } else if (typeof elem === "object") {
      data = elem;
    }
  });

  return {
    message,
    data
  };
}

function debug() {
  let { message, data } = getMessageAndData(arguments);
  printMessage(types.debug, message, data);
}

function warn() {
  let { message, data } = getMessageAndData(arguments);
  printMessage(types.warn, message, data);
}

function success() {
  let { message, data } = getMessageAndData(arguments);
  printMessage(types.success, message, data);
}

function error() {
  let { message, data } = getMessageAndData(arguments);
  printMessage(types.error, message, data);
}
