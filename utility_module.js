
/********   Utility builtinModules  *******/

var os = require("os");

/****       OS Module       ****/

                    // tmpdir 
                    console.log('Temp Directory Path ' + os.tmpdir());

                    // Endianness  
                    console.log('endianness : ' + os.endianness());

                    // OS type
                    console.log('type : ' + os.type());

                    // OS platform
                    console.log('platform : ' + os.platform());

                    // Total system memory
                    console.log('total memory : ' + os.totalmem() + " bytes.");

                    // Total free memory
                    console.log('free memory : ' + os.freemem() + " bytes.");

 // output :
 /*
 Temp Directory Path C:\Users\Sharath\AppData\Local\Temp
endianness : LE
type : Windows_NT
platform : win32
total memory : 4154572800 bytes.
free memory : 851873792 bytes.
*/


/*******  Path Module  *******/ 

// parse

var path = require("path");

                        console.log(path.parse(__filename));

//output :
/*
{
    root: 'D:\\',
    dir: 'D:\\xampp\\htdocs\\node_js',
    base: 'utility_module.js',
    ext: '.js',
    name: 'utility_module'
  }
*/


// extName
                        console.log('ext name : ' + path.extname('utility_module.js'));


// Output :
/*
ext name : .js 
*/                       


// Resolve
                        console.log('resolve : ' + path.resolve('utility_module.js')); //returns absolute path

// Output
/*
resolve : D:\xampp\htdocs\node_js\main.js
*/

// Normalization  resolves the specified path, fixing '..','\\\\' etc.

                        console.log('Normalization : ' +path.normalize('Users/Refsnes/../Jackson'));

// output :
/*
Users\Jackson
*/


// Base Name 

                        console.log('BaseName : ' +path.basename('D:\\xampp\\htdocs\\node_js\\utility_module.js'));


// Output :

/*  
utility_module.js
*/














