var express = require('express'); 
var path = require('path');
var bodyParser = require('body-parser'); 
var app = express(); 
var port = process.env.PORT || 80; 



app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './views'); 
app.set('view engine', 'pug'); 


app.get('/', function(req, res){
	res.render('index', {layout:false, stock:'FB'});
}); 

app.post('/stock', function(req, res) {
  console.log('You sent the stock"' + req.body.stock + '".');
  res.render('index', {layout: false, stock: req.body.stock});
});

app.listen(port, function(){
	console.log("Listening on port: " + port); 
}); 



// module.exports = stocks; 