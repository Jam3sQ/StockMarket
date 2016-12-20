var express = require('express'); 
var app = express(); 
var port = process.env.PORT || 80; 
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//Highstocks used to graph stock data 
// var Highscharts = require('highcharts/highstock');

// var quandl = require('./getQuandl'); 
// quandl.getData(function(response) {
// 		var object =JSON.parse(response);
// 		console.log(object.dataset.data);
// });


app.get('/', function(req, res){
	res.sendFile(path.join(__dirname+'/index.html'));
	
}); 

app.listen(port, function(){
	console.log("Listening on port: " + port); 
}); 