var express = require('express'); 
var app = express(); 
var port = process.env.PORT || 80; 

app.get('/', function(req, res){
	res.end('Hi');

}); 

app.listen(port, function(){
	console.log("Listening on port: " + port); 
}); 