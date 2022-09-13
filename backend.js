var mysql = require('mysql');  
const express = require('express');
const app = express();
const port = process.env.PORT || 80;
app.listen(port, () => {console.log(`Server is listening on port ${PORT}...`)})
app.use(express.static('public'));
var con = mysql.createConnection({  
  host: "eu-cdbr-west-03.cleardb.net",  
  user: "bb818b55e33341",  
  password: "ad94e10e"  
});  
con.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected!");  
});  

app.post("/api", (request, response) => {
  console.log("I got a request!");
  console.log(request.body);
  const data = request.body;
  response.json({
    status: "success",
    query: data
   
  });
});
