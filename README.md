
# dynamic-class-list

Simple, fast module for getting strings of dynamic and conditional class list.

Features:

* Support string arguments.
* Support number arguments.
* Support object arguments.
* Support array arguments.
* Support functions.
* Ignore bad values like null and undefined.
* Zero-dependency.

## Quickstart - CommonJS

```shell
npm install dynamic-class-list
```

### Or using yarn

```shell
yarn add dynamic-class-list
```

Then require it in your module ...


```javascript
var getClassNames = require('dynamic-class-list').getClassNames;
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

getClassNames([null, undefined, 3, 'class1', 'class2']);

// Output : "3 class1 class2"
```

### Arguments as an object

`Note that the key is used as the class if its value is truthy`

```javascript

// As an Object
getClassNames({class1: true, class2 : false});

// Output : "class1"

getClassNames({class1: undefined, class2 : null, class3: true, class4: false});

// Output : "class3"
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
getClassNames('class1', 'class2', 2, null, undefined, ['class3', null, undefined, 4, 'class4'], { 
    class5 : function() { return false; },
    class6 : function() { return true; },
    class7: undefined,
    class8: true,
    class9: false
});

// Output : "class1 class2 2 class3 4 class4 class6 class8"
```


## What's new in v1.0.8

- Unexpected Result when evaluating class through function.
- Smaller Size 2.5Kb to 1.2Kb
