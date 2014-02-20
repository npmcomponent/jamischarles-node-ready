*This repository is a mirror of the [component](http://component.io) module [jamischarles/node-ready](http://github.com/jamischarles/node-ready). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/jamischarles-node-ready`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
[![Build Status](https://secure.travis-ci.org/jamischarles/node-ready.png)](http://travis-ci.org/jamischarles/node-ready)

# node-ready

  Poll the DOM for a given node to see when it is ready for access. Callback is fired when the node is ready.

## Installation

    $ component install jamischarles/node-ready


## Example

```js
var isNodeReady = require("node-ready");

//isNodeReady(query, success, failure, cfg); First 2 params are required.
isNodeReady('.btns', function(nodes){
  console.log('success!');
});


//example with all params passed in
var cfg = {
  timeout: 10, //timeout with failure after 10 seconds if query not found. Default is 5 seconds.
  interval: 300, //poll the DOM for the node query ever 300 ms. Default is 200 ms.
  debug: true //output console.logs()
}

isNodeReady('.btns', function(nodes){
  console.log('success!');
}, function(query){
  console.log('failure...');
}, cfg);


```

## API

### isNodeReady(query, success, failure, cfg);

  Params:
  - query (String): Can be any jquery-like query. Zest is used for the selector engine. 
  - success (function): Pass in a callback function that's called when the node is found in the dom. Returns an array of nodes found matching the query.
  - failure (function): (Optional) Pass in a callback function that's called when query doesn't find anything in the dom after the timeout period (default is 5 seconds). Returns a string of the query not found.
  - cfg (object): (Optional) Pass in a configuration object to override the defaults. {timeout: 10, interval: 100, debug: true}


   

## License

  MIT
