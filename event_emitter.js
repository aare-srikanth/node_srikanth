const EventEmitter = require('events');
const emitter=new EventEmitter();

// Register a listener

emitter.on('messageLogged',function(){
    console.log("Listner 1 called");
});

emitter.on('messageLogged',function(){
    console.log("Listner 2 called");
});

emitter.on('messageLogged',function(arg1, arg2){
    console.log(`messageLogged with parameters ${arg1}, ${arg2} in third listener`);
  });

  // emitter.emit

emitter.emit('messageLogged',1,2); // Synchronously calls each of the listeners registered 

                                //  output : Listner 1 called    Listner 2 called

