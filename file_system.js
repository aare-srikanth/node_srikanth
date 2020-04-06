var fs = require("fs");

// Asynchronous read
                fs.readFile('input_text.txt', function (err, data) {
                if (err) {
                    return console.error(err);
                }
                console.log("Asynchronous read: " + data.toString());
                });

                console.log("Program Ended");
                


//Synchronous read
                // var data = fs.readFileSync('input_text.txt');
                // console.log("Synchronous read: " + data.toString());

                // console.log("Program Ended");


//output :

/*
Program Ended
Synchronous read: Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
Program Ended
Asynchronous read: Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!  
*/


/*********  Open a File      *******/


// Asynchronous - Opening File
                        // console.log("Going to open file for reading and writing (wrong file name)!");
                        // fs.open('input.txt', 'r+', function(err, fd) {  // wrong file name
                        // if (err) {
                        //     return console.error(err);
                        // }
                        // console.log("File opened successfully!");     
                        // });

//output :
/*
Going to open file for reading and writing (wrong file name)!
[Error: ENOENT: no such file or directory, open 'D:\xampp\htdocs\node_js\input.txt'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'D:\\xampp\\htdocs\\node_js\\input.txt'
}
*/

// Asynchronous - Opening File

                        // console.log("Going to open file for reading and writing! (proper file name)");
                        // fs.open('input_text.txt', 'r+', function(err, fd) {  // wrong file name
                        // if (err) {
                        //     return console.error(err);
                        // }
                        // console.log("File opened successfully!");     
                        // });

// output :
/*
Going to open file for reading and writing! (proper file name)
File opened successfully!
*/


//  Get File Information

                    // console.log("Going to get file info!");
                    // fs.stat('input_text.txt', function (err, stats) {
                    // if (err) {
                    //     return console.error(err);
                    // }
                    // console.log(stats);
                    // console.log("Got file info successfully!");
                    
                    // // Check file type
                    // console.log("isFile ? " + stats.isFile());
                    // console.log("isDirectory ? " + stats.isDirectory());    
                    // });


// output :
/*
Going to get file info!
Stats {
  dev: 1411260098,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 281474976754619,
  size: 95,
  blocks: 0,
  atimeMs: 1585547114692.8503,
  mtimeMs: 1585547114692.8503,
  ctimeMs: 1585548566378.0935,
  birthtimeMs: 1585286544000,
  atime: 2020-03-30T05:45:14.693Z,
  mtime: 2020-03-30T05:45:14.693Z,
  ctime: 2020-03-30T06:09:26.378Z,
  birthtime: 2020-03-27T05:22:24.000Z
}
Got file info successfully!
isFile ? true
isDirectory ? false
*/



// Writing a File 

                    // console.log("Going to write into existing file");
                    // fs.writeFile('write.txt', 'Simply Easy Learning!', function(err) {
                    // if (err) {
                    //     return console.error(err);
                    // }
                    
                    // console.log("Data written successfully!");
                    // console.log("Let's read newly written data");
                    
                    // fs.readFile('write.txt', function (err, data) {
                    //     if (err) {
                    //         return console.error(err);
                    //     }
                    //     console.log("Asynchronous read: " + data.toString());
                    // });
                    // });



// Reading a File

                        // var buf = new Buffer.alloc(1024);

                        // console.log("Going to open an existing file");
                        // fs.open('input_text.txt', 'r+', function(err, fd) {
                        // if (err) {
                        //     return console.error(err);
                        // }
                        // console.log("File opened successfully!");
                        // console.log("Going to read the file");

                        // console.log("Buffer length :"+ buf.length);
                        
                        // fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
                        //     if (err){
                        //         console.log(err);
                        //     }
                        //     console.log(bytes + " bytes read");
                            
                        //     // Print only read bytes to avoid junk.
                        //     if(bytes > 0){
                        //         console.log(buf.slice(0, bytes).toString());
                        //     }
                        // });
                        // });


//Closing a File


                            // var buf = new Buffer.alloc(1024);

                            // console.log("Going to open an existing file");
                            // fs.open('input_text.txt', 'r+', function(err, fd) {
                            // if (err) {
                            //     return console.error(err);
                            // }
                            // console.log("File opened successfully!");
                            // console.log("Going to read the file");
                            
                            // fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
                            //     if (err) {
                            //         console.log(err);
                            //     }

                            //     // Print only read bytes to avoid junk.
                            //     if(bytes > 0) {
                            //         console.log(buf.slice(0, bytes).toString());
                            //     }

                            //     // Close the opened file.
                            //     fs.close(fd, function(err) {
                            //         if (err) {
                            //             console.log(err);
                            //         } 
                            //         console.log("File closed successfully.");
                            //     });
                            // });
                            // });


// Output :
/*
Going to open an existing file
File opened successfully!
Going to read the file
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
File closed successfully.
*/

//  Truncate File


                            // var buf = new Buffer.alloc(1024);

                            // console.log("Going to open an existing file");
                            // fs.open('input_text.txt', 'r+', function(err, fd) {
                            // if (err) {
                            //     return console.error(err);
                            // }
                            // console.log("File opened successfully!");
                            // console.log("Going to truncate the file after 10 bytes");
                            
                            // // Truncate the opened file.
                            // fs.ftruncate(fd, 10, function(err) {
                            //     if (err) {
                            //         console.log(err);
                            //     } 
                            //     console.log("File truncated successfully.");
                            //     console.log("Going to read the same file"); 
                                
                            //     fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
                            //         if (err) {
                            //             console.log(err);
                            //         }

                            //         // Print only read bytes to avoid junk.
                            //         if(bytes > 0) {
                            //             console.log(buf.slice(0, bytes).toString());
                            //         }

                            //         // Close the opened file.
                            //         fs.close(fd, function(err) {
                            //             if (err) {
                            //             console.log(err);
                            //             } 
                            //             console.log("File closed successfully.");
                            //         });
                            //     });
                            // });
                            // });



//  Output :
/*
Going to open an existing file
File opened successfully!
Going to truncate the file after 10 bytes
File truncated successfully.
Going to read the same file
Tutorials
File closed successfully.
*/


// delete a File


                    // console.log("Going to delete an existing file");
                    // fs.unlink('input_text.txt', function(err) {
                    // if (err) {
                    //     return console.error(err);
                    // }
                    // console.log("File deleted successfully!");
                    // });


// Output :
/*
Going to delete an existing file
File deleted successfully!
*/

// Create a Directory

                    // console.log("Going to create directory /xampp/htdocs/node_js/mkdir");
                    // fs.mkdir('/xampp/htdocs/node_js/mkdir',function(err) {
                    // if (err) {
                    //     return console.error(err);
                    // }
                    // console.log("Directory created successfully!");
                    // });

// Output :
/*
Going to create directory /xampp/htdocs/node_js/mkdir
Directory created successfully!
*/



//  Read directory

                    // console.log("Going to read directory /xampp/htdocs/node_js/Documents");
                    // fs.readdir("/xampp/htdocs/node_js/Documents",function(err, files) {
                    // if (err) {
                    //     return console.error(err);
                    // }
                    // files.forEach( function (file) {
                    //     console.log( file );
                    // });
                    // });

// Output :
/*
Going to read directory /xampp/htdocs/node_js/Documents
Buffers.txt
Events.txt
file_system.txt
global objects.txt
node module systems.txt
node_js_1.txt
streams.txt
*/

//  Remove Directory

                        // console.log("Going to delete directory /xampp/htdocs/node_js/testdir");
                        // fs.rmdir("/xampp/htdocs/node_js/testdir",function(err) {
                        // if (err) {
                        //     return console.error(err);
                        // }
                        // console.log("Test dir removed. Going to read directory /xampp/htdocs/node_js");
                        
                        // fs.readdir("/xampp/htdocs/node_js",function(err, files) {
                        //     if (err) {
                        //         return console.error(err);
                        //     }
                        //     files.forEach( function (file) {
                        //         console.log( file );
                        //     });
                        // });
                        // });



// Output :
/*
Going to delete directory /xampp/htdocs/node_js/testdir
Test dir removed. Going to read directory /xampp/htdocs/node_js
.git
add1.js
buffers.js
callback.js
Documents
events.js
event_emitter.js
ex_1.js
file_system.js
global_objects.js
input.txt.gz
module_system.js
output.txt
output_stream.txt
README.md
stream.js
write.txt
*/


                

