
# dynamic-class-list

Simple, fast module for extracting strings of dynamic and optional class list.

Features:

* Support for string arguments.
* Support Object syntax.
* Supports array of strings.
* Zero-dependency.

## Quickstart - CommonJS

```shell
npm install dynamic-class-list
```

Then require it in your module ...


```javascript
const getClassNames = require('dynamic-class-list').getClassNames;
```

## OR using ES6 imports


```javascript
import { getClassNames } from 'dynamic-class-list';
```

## API

### Arguments as strings

```javascript

// As Arguments
getClassNames('class1', 'class2');

// Output : "class1 class2"
```

### Arguments as an array of strings


```javascript

// As an Array
getClassNames(['class1', 'class2']);

// Output : "class1 class2"
```

### Arguments as an object

`Note that the key is used as the class if its value is truthy`

```javascript

// As an Object
getClassNames({class1: true, class2 : false});

// Output : "class1"
```

`Note that the function should return a boolean`

```javascript

// Value as a function As an Object
getClassNames({ 
    class1: function() { return false; },
    class2 : function() { return true; }
});

// Output : "class2"
```

### Hybrid Arguments

```javascript

// using all type of data
getClassNames('class1', 'class2', ['class3', 'class4'], { 
    class5 : function() { return false; },
    class6 : function() { return true; }
});

// Output : "class1 class2 class3 class4 class6"
```

----
Markdown generated from [README_js.md](README_js.md) by [![RunMD Logo](http://i.imgur.com/h0FVyzU.png)](https://github.com/broofa/runmd)