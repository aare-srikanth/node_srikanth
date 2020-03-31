
/*****  create new buffer    *****/

var buf = new Buffer.alloc(10);   //allocating memory of 10 bytes
console.log(buf);               //  Outpot : <Buffer 00 00 00 00 00 00 00 00 00 00>

var buf1=Buffer.from("abcde");  // based on the size of the data also we can allocate memory


/********  writing data into a buffer  *****/

length=buf1.write('qqq',2);  

console.log(length);  // no of characters written output : 3



/***** Reading Buffer  *********/

console.log(buf1.toString());  // output : abqqe


/***** Converting Buffer to json */

var buf = new Buffer.from('Simply Easy Learning');
var json = buf.toJSON(buf);
console.log(json);

//Output : 

// {
//     type: 'Buffer',
//     data: [
//        83, 105, 109, 112, 108, 121,
//        32,  69,  97, 115, 121,  32,
//        76, 101,  97, 114, 110, 105,
//       110, 103
//     ]
//   }


/*****  Concatenate Buffers  *******/


var buffer1 = new Buffer.from('LearningPoint ');
var buffer2 = new Buffer.from('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);

console.log(buffer3.toString());




























