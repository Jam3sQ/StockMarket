//Init express
const express = require('express'); 
const app = express(); 
const path = require('path');
const bodyParser = require('body-parser'); 

//Set Port
const port = process.env.PORT || 80; 

//Body parser
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'public')));

// Template engine 
app.set('views', './views'); 
app.set('view engine', 'pug'); 

// Routes 

// Homepage 
app.get('/', (req, res) => res.render('index', {layout:false, stock:'FB'})); 

// Post request when user enters a stock name 
app.post('/stock', (req, res) => {
  console.log('You sent the stock"' + req.body.stock + '".');
  res.render('index', {layout: false, stock: req.body.stock});
});

app.listen(port, () => console.log("Listening on port: " + port)); 
