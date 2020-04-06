var event = require('events');    //  event mdule
var evetnEmitter = new event.EventEmitter();  // creating a new event
console.log('Function started...');  
//  Add listener function for Sumof2Number event  
evetnEmitter.on('Sumof2Number', function(num1, num2) {  
    console.log('Sum of both Number : ' + (Number(num1) + Number(num2)));  
});  
//  Add listener function for Mulof2Number event  
evetnEmitter.on('Mulof2Number', function(num1, num2) {  
    console.log('Multiplication of both Number : ' + (Number(num1) * Number(num2)));  
});  
//  Call or fire both event.  
evetnEmitter.emit('Sumof2Number', '10', '20');  
evetnEmitter.emit('Mulof2Number', '10', '20');  
console.log('Function Ended...');  