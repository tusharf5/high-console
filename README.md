
# high-console

Configurable browser logger, high-console can be used for logging purposes, status reporting. It supports colored messages out of the box.

Features:

* Support condintional logging based on the environment.
* All styles are configurable. [TODO]
* Supports colored console statements.
* Comes with common utils like debug, error, warn, success out of the box.

![High Console]('images/screenshot.png')

## Quickstart - npm

```shell
npm install high-console
```

### Or using yarn

```shell
yarn add high-console
```

Then require it in your module ...


```javascript
var debug = require('high-console').debug;
```

## OR using ES6 imports


```javascript
import { debug, error, HighConsole } from 'high-console';
```

## API

### debugging

```javascript

debug('Message to Debug', {userId: '1234Abdsksk'});
error('Message to Debug', {userId: '1234Abdsksk'});
success('Message to Debug', {userId: '1234Abdsksk'});
warn('Message to Debug', {userId: '1234Abdsksk'});
```
### Disabled on production

```javascript 

// project entry file

import { HighConsole } from 'high-console';

new HighConsole({ enabled: process.env.NODE_ENV !== 'production' });

```

### Global Config

```
upperCase: true, // uppercase the message to the logger
enableLabel: true, // Enable the labels (⚠, ✔)
enabled: true // enable logging to the console
```