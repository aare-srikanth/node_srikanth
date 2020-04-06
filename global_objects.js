// console.log()

console.log("Global Objects"); 


//setTimeout()

function printHello(){
    console.log("Hello World");
}

t=setTimeout(printHello,3000); 

// clearTimeout()

clearTimeout(t);  

//  setInterval()

function printMyname(){
    console.log("Srikanth");
}
t=setInterval(printMyname, 2000); 

//  clearInterval()

clearInterval(t); 

// __filename  

console.log(__filename); // Output : D:\node\global_objects.js

 // __dirname   

console.log(__dirname);  // Output : D:\nodenpm