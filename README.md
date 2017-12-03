
# dynamic-class-list

Simple, fast module for extracting strings of dynamic and optional class list.

Features:

* Support for string arguments.
* Support Object syntax.
* Supports array of strings.
* Zero-dependency.

## Quickstart - CommonJS (Recommended)

```shell
npm install dynamic-class-list
```

Then require it in your module ...


```javascript
const getClassnames = require('dynamic-class-list');
```

## API

### Arguments as strings

```javascript
const getClassnames = require('dynamic-class-list');

// As Arguments
getClassnames('class1', 'class2');

// Output : "class1 class2"
```

### Arguments as an array of strings


```javascript
const getClassnames = require('dynamic-class-list');

// As an Array
getClassnames(['class1', 'class2']);

// Output : "class1 class2"
```

### Arguments as an object

`Note that the key is used as the class if the value is truthy*`\

```javascript
const getClassnames = require('dynamic-class-list');

// As an Object
getClassnames({class1: true, class2 : false});

// Output : "class1"
```

```javascript
const getClassnames = require('dynamic-class-list');

// As an Object
getClassnames({ 
    class1: function() { return false; },
    class2 : function() { return true; }
});

// Output : "class2"
```

### Hybrid Arguments

```javascript
const getClassnames = require('dynamic-class-list');

// As Everything
getClassnames('class1', 'class2', ['class3', 'class4'], { 
    class5 : function() { return false; },
    class6 : function() { return true; }
});

// Output : "class1 class2 class3 class4 class6"
```

----
Markdown generated from [README_js.md](README_js.md) by [![RunMD Logo](http://i.imgur.com/h0FVyzU.png)](https://github.com/broofa/runmd)