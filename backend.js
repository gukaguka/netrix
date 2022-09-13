var mysql = require('mysql');  
const express = require('express');
const app = express();
const port = process.env.PORT || 80;
app.listen(port, () => {console.log(`Server is listening on port ${PORT}...`)});
app.use(express.static('public'));
var con = mysql.createConnection({  
  host: "us-cdbr-east-06.cleardb.net",  
  user: "b71b1925d129c3",  
  password: "9a48780c"  
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
    query: data,
   
  });
});
