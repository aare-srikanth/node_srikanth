var net=require("net");
var server=net.createServer();

server.on("connection",function(socket){
    remoteAddress=socket.remoteAddress + ':' + socket.remotePort;
 console.log("new client connection is made %s",remoteAddress);

  socket.on("data",function(d){
            console.log("Data from the client is :" + d);
            socket.write("Hello"+d);
  });

  socket.once("close",function(){
    console.log("connection from %s is closed",remoteAddress);
  });



});

//output :

/* new client connection is made ::ffff:127.0.0.1:59650 */


// server.listen(9000, function(){
//     console.log("server listening to 9000 port");
// });

//output :

/* server listening to 9000 port */

server.listen(9000, function(){
    console.log("server listening to %j",server.address()); 
});

// output :

/* server listening to {"address":"::","family":"IPv6","port":9000} */
