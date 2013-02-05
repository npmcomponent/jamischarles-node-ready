// TODO: Test timeout, on failure.
// TODO: What happens when you want to test for 2 nodes?

//TODO: make other traversal engines available?
//TODO Add option to force polling until timeout and gather all nodes found?

/*
 * Module dependencies
 * 
 */ 
var zest = require('zest');

//first 2 params are required
module.exports = function(query, success, failure, cfg){
  console.log('query: ' + query);
  cfg = cfg || {};
  failure = failure || function(){};

  //defaults
  var poll_interval = cfg.interval || 200; //poll the DOM every * ms.
  var failure_interval = (cfg.timeout * 1000) || (5 * 1000); //timeout after * seconds. Default is 5 seconds
  var failure_timer;
  var poll_timer;
  
  //set timeout

  //send back timeout failure

  var isElFound = function(el_query){
    return zest(el_query);
  }
  
  var abortPolling = function(){
    //cancel poll timer
    console.log(query + ' el not found. Aborting.')
    clearTimeout(poll_timer);
    failure(query);
  }

  var pollDom = function(){
    console.log('polling for ' + query);
    var el_array = isElFound(query);

    //if yes, pass nodes to success
    if (el_array.length !== 0){
      console.log(query + " found");
      //cancel timeout timer
      clearTimeout(failure_timer);

      success(el_array);
    } else {
      //if not found, poll again
      poll_timer = setTimeout(pollDom, poll_interval);
    }

  }

  //start timeout timer, start polling
  failure_timer = setTimeout(abortPolling, failure_interval);
  
  pollDom();

}

