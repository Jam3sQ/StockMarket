var express = require('express'); 
var app = express(); 
var port = process.env.PORT || 80; 

//Highstocks used to graph stock data 
var Highscharts = require('highcharts/highstock');
var quandl = require('./data/getQuandl').getData; 
quandl(function(error, response) {
  if (error) {
    console.log(error)
  } else {
    console.log(null, "We got a good response! " + response);
  }
});

app.get('/', function(req, res){
	res.end('Hi');
}); 

app.listen(port, function(){
	console.log("Listening on port: " + port); 
}); 