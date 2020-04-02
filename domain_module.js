var EventEmitter = require("events").EventEmitter;
var domain = require("domain");

var emitter1 = new EventEmitter();

// Create a domain
var domain1 = domain.create();

domain1.on('error', function(err) {
   console.log("domain1 handled this error ("+err.message+")");
});

// Explicit binding 
domain1.add(emitter1);

emitter1.on('error',function(err) {
   console.log("listener handled this error ("+err.message+")");
});

emitter1.emit('error',new Error('To be handled by listener'));
emitter1.removeAllListeners('error');
emitter1.emit('error',new Error('To be handled by domain1'));

var domain2 = domain.create();

domain2.on('error', function(err) {
   console.log("domain2 handled this error ("+err.message+")");
});

// Implicit binding
domain2.run(function() {
   var emitter2 = new EventEmitter();
   emitter2.emit('error',new Error('To be handled by domain2'));   
});

domain1.remove(emitter1);
emitter1.emit('error', new Error('Converted to exception. System will crash!'));


//  output :
/*
listener handled this error (To be handled by listener)
domain1 handled this error (To be handled by domain1)
domain2 handled this error (To be handled by domain2)
events.js:288
      throw er; // Unhandled 'error' event
      ^

Error: Converted to exception. System will crash!
    at Object.<anonymous> (D:\xampp\htdocs\node_js\domain_module.js:37:24)
    at Module._compile (internal/modules/cjs/loader.js:1158:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1178:10)
    at Module.load (internal/modules/cjs/loader.js:1002:32)
    at Function.Module._load (internal/modules/cjs/loader.js:901:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
    at internal/main/run_main_module.js:18:47
Emitted 'error' event at:
    at Object.<anonymous> (D:\xampp\htdocs\node_js\domain_module.js:37:10)
    at Module._compile (internal/modules/cjs/loader.js:1158:30)
    [... lines matching original stack trace ...]
    at internal/main/run_main_module.js:18:47
    */