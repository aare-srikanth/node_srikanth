//(Node Module System)

var add=require('./add1.js'); // custom module add1
var x=add(2,3);
console.log(x); //  output 5

/************ built in module "OS"  **************/

var os=require("os");

//  os.type  

var x=os.type();  //  Returns operating system name
console.log(x);   //  output : 'Windows_NT'

// os.platform

var x=os.platform();  //  Returns operating system platform
console.log(x);        // output : win32

// os.architecture

var x=os.arch();  //  Returns operating system architecture
console.log(x);        // output : ia32



/*********   built in module "Console"  *************/

//console.clear

console.clear();  //  clear the terminal output

// console.time

console.time('Details');  //  starts a timer that can be used to compute the duration of an operation.

//console.log 

console.log("Hello Node JS"); //  prints the data ; output : Hello Node JS

//console.timeEnd 

console.timeEnd('Details'); //  stops the timer that was previously started by calling console.time()

//  output ; Details: 0.740ms










