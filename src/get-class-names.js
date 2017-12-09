module.exports = {
  getClassNames: getClassNames
};

function getClassNames() {
  var classes = [];
  var args = [].slice.call(arguments, 0);

  function handleObject(obj) {
    Object.keys(obj).forEach(key => {
      if (handleBadValues(obj[key])) {
        //
      } else if (typeof obj[key] === 'function') {
        handleFunction(obj[key], key);
      } else if (typeof obj[key] === 'boolean') {
        if (obj[key]) {
          classes.push(key);
        }
      } else if (typeof obj[key] === 'string') {
        handleString(key);
      } else {
        // throw new Error(
        //   'Value of an object property can only have a function, boolean or a string'
        // );
      }
    });
  }

  function handleString(classname) {
    classes.push(classname);
  }

  function handleFunction(fn, key) {
    let result = false;
    try {
      result = fn();
    } catch (e) {}
    if (typeof result === 'boolean') {
      if (result) {
        classes.push(key);
      }
    } else {
      // throw new Error('Function Should Return a Bool Value');
    }
  }

  function handleArray(obj) {
    obj.forEach(e => {
      if (handleBadValues(obj)) {
        //
      } else if (typeof e === 'string') {
        classes.push(e);
      } else if (typeof e === 'number') {
        classes.push(e);
      } else {
        // throw new Error('Arrays can only have strings or numbers');
      }
    });
  }

  function handleBadValues(obj) {
    if (obj === null || typeof obj === undefined || obj === undefined) {
      return true;
    }
    return false;
  }

  function goThroughIt(obj) {
    if (handleBadValues(obj)) {
      //
    } else if (typeof obj === 'number') {
      classes.push(obj);
    } else if (typeof obj === 'string') {
      handleString(obj);
    } else if (Array.isArray(obj)) {
      handleArray(obj);
    } else if (typeof obj === 'object') {
      handleObject(obj);
    } else {
      //throw new Error('Invalid Class Type');
    }
  }

  args.forEach(goThroughIt);

  return classes.join(' ');
}
