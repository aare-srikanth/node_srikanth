var express = require('express');
var app = express();
var fs = require("fs");

var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

app.get('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user4"] = user["user4"];
      console.log( data );
      res.end( JSON.stringify(data));
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
      name: 'mahesh',
      password: 'password1',
      profession: 'teacher',
      id: 1
    },
    user2: {
      name: 'suresh',
      password: 'password2',
      profession: 'librarian',
      id: 2
    },
    user3: { name: 'ramesh', password: 'password3', profession: 'clerk', id: 3 },
    user4: {
      name: 'mohit',
      password: 'password4',
      profession: 'teacher',
      id: 4
    }
  }
  */