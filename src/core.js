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

function isWindow() {
  if (
    typeof document !== "undefined" &&
    typeof document.createElement !== "undefined"
  ) {
    return true;
  }
  return false;
}

const types = {
  debug: "debug",
  warn: "warn",
  error: "error",
  success: "success"
};

const browserTheme = {
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

const nodeTheme = {
  dayDev: {
    debug: {
      color: "\033[30m",
      backgroundColor: "#fff",
      textTransform: () => (configObject.upperCase ? "uppercase" : "none")
    },
    warn: {
      color: "\x1b[33m",
      backgroundColor: "#fff",
      textTransform: () => (configObject.upperCase ? "uppercase" : "none")
    },
    error: {
      color: "\033[31m",
      backgroundColor: "#fff",
      textTransform: () => (configObject.upperCase ? "uppercase" : "none")
    },
    success: {
      color: "\033[32m",
      backgroundColor: "#fff",
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

function printBrowserMessage(type, message, data) {
  configObject.enabled &&
    console.log(
      `%c%s %o\n`,
      makeStyleOutOfObject(browserTheme[configObject.mode][type]),
      `${symbols[configObject.mode][type]} ${message}`,
      data
    );
}

function printNodeMessage(type, message, data) {
  configObject.enabled &&
    console.log(
      `${nodeTheme[configObject.mode][type].color} %s`,
      `${symbols[configObject.mode][type]} ${message}`,
      "\033[0m",
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
  if (isWindow()) {
    printBrowserMessage(types.debug, message, data);
  } else {
    printNodeMessage(types.debug, message, data);
  }
}

function warn() {
  let { message, data } = getMessageAndData(arguments);
  if (isWindow()) {
    printBrowserMessage(types.warn, message, data);
  } else {
    printNodeMessage(types.warn, message, data);
  }
}

function success() {
  let { message, data } = getMessageAndData(arguments);
  if (isWindow()) {
    printBrowserMessage(types.success, message, data);
  } else {
    printNodeMessage(types.success, message, data);
  }
}

function error() {
  let { message, data } = getMessageAndData(arguments);
  if (isWindow()) {
    printBrowserMessage(types.error, message, data);
  } else {
    printNodeMessage(types.error, message, data);
  }
}
