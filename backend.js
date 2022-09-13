var mysql = require('mysql');  
var con = mysql.createConnection({  
  host: "eu-cdbr-west-03.cleardb.net",  
  user: "bb818b55e33341",  
  password: "ad94e10e"  
});  
con.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected!");  
});  
