var express = require('express'); 
var app = express(); 
var port = process.env.PORT || 80; 

//Highstocks used to graph stock data 
var Highscharts = require('highscharts/highstock');

//Quandl API for grabbing stock data
var Quandl = require('quandl'); 
var quandl = new Quandl(); 
var options = {
	auth_token: '2LcTMWEWbq9Jw_kF-g6f'
}
quandl.configure(options)

//Returns dataset 
quandl.dataset({
  source: "WIKI",
  table: "FB"
}, {
  order: "asc",
  exclude_column_names: true,
  // Notice the YYYY-MM-DD format 
  start_date: "2015-01-30",
  end_date: "2016-01-29",
  column_index: 4
}, function(err, response){
    if(err)
        throw err;
 	var object = JSON.parse(response); //Changes response string into a JSON object 
    console.log(object.dataset.data);
});


app.get('/', function(req, res){
	res.end('Hi');
}); 

app.listen(port, function(){
	console.log("Listening on port: " + port); 
}); 