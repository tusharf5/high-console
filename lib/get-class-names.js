'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = {
  getClassNames: getClassNames
};

function getClassNames() {
  var classes = [];
  var args = [].slice.call(arguments, 0);

  function handleObject(obj) {
    Object.keys(obj).forEach(function (key) {
      if (typeof obj[key] === 'function') {
        handleFunction(obj[key], key);
      } else if (typeof obj[key] === 'boolean') {
        if (obj[key]) {
          classes.push(key);
        }
      } else if (typeof obj[key] === 'string') {
        handleString(key);
      } else {
        throw new Error('Value of an object property can only have a function, boolean or a string');
      }
    });
  }

  function handleString(classname) {
    classes.push(classname);
  }

  function handleFunction(fn, key) {
    if (typeof fn() === 'boolean') {
      classes.push(key);
    } else {
      throw new Error('Function Should Return a Bool Value');
    }
  }

  function handleArray(obj) {
    obj.forEach(function (e) {
      if (typeof e === 'string') {
        classes.push(e);
      } else {
        throw new Error('Arrays can only have strings');
      }
    });
  }

  function goThroughIt(obj) {
    if (typeof obj === 'string') {
      handleString(obj);
    } else if (Array.isArray(obj)) {
      handleArray(obj);
    } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
      handleObject(obj);
    } else {
      throw new Error('Invalid Class Type');
    }
  }

  args.forEach(goThroughIt);

  return classes.join(' ');
}