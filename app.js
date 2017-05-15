//Init express
var express = require('express'); 
var app = express(); 
var path = require('path');
var bodyParser = require('body-parser'); 

//Set Port
var port = process.env.PORT || 80; 

//Body parser
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'public')));

// Template engine 
app.set('views', './views'); 
app.set('view engine', 'pug'); 

// Routes 

// Homepage 
app.get('/', function(req, res){
	res.render('index', {layout:false, stock:'FB'});
}); 

// Post request when user enters a stock name 
app.post('/stock', function(req, res) {
  console.log('You sent the stock"' + req.body.stock + '".');
  res.render('index', {layout: false, stock: req.body.stock});
});

app.listen(port, function(){
	console.log("Listening on port: " + port); 
}); 
