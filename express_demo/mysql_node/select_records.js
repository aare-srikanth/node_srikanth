var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodedb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result[0]['name']);
  });
});

//output :
/*
[ RowDataPacket { id: 1, name: 'Company Inc', address: 'Highway 37' } ]
*/