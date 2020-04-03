var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

// Output : 
/*
{
    user1: {
    name: "mahesh",
    password: "password1",
    profession: "teacher",
    id: 1
    },
    user2: {
    name: "suresh",
    password: "password2",
    profession: "librarian",
    id: 2
    },
    user3: {
    name: "ramesh",
    password: "password3",
    profession: "clerk",
    id: 3
    }
}

*/