require("dotenv").config();


var express = require("express");
var app = express();
 

app.get('/', (req, res) =>{

	res.json({
		"user": process.env.DB_USER,
		"pass": process.env.DB_PASS
	});	
});


app.listen(8080);

console.log("the server is running");

