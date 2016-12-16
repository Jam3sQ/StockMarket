var Quandl = require('quandl'); 
var quandl = new Quandl(); 
var options = {
	auth_token: '2LcTMWEWbq9Jw_kF-g6f'
}
quandl.configure(options)

exports.getData = function(callback){
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
 	callback(response); //Changes response string into a JSON object 
});
// return object;
}//end GetData

// exports.getData = function(callback){
//   request('http://api.smartystreets.com/zipcode?' + 'auth-id=XXXXX' + '&auth-token=XXXXX' + '&zipcode=' + zip, function(err, response, body){
//     if(!err && response.statusCode == 200){
//       callback(null, body); // invoke callback function with the value you want to pass back
//     } else {
//       callback(new Error('Error returning data'));
//     }   
//   });  
// }

// module.exports = getData; 