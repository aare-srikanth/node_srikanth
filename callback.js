/******  blocking and non-blocking calls  *******/


//  Blocking Calls

var fs = require("fs");
var data = fs.readFileSync('input_text.txt');

console.log(data.toString());
console.log("Program Ended");


//  Non Blocking Calls
var fs = require("fs");

fs.readFile('input_text.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");