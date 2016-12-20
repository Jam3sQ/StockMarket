var Quandl = require('quandl'); 
var quandl = new Quandl(); 
var options = {
	auth_token: '2LcTMWEWbq9Jw_kF-g6f'
}
quandl.configure(options)

exports.getData = function(callback){

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
    if(err)	throw err;
 	callback(response); 
});

}
