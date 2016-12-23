var moment = require('moment'); 
var $ = require('jquery'); 
var Highcharts = require('highcharts/highstock'); 
// var stocks = require('./app.js'); 
// var share = require('./app.js');

// console.log(share.test());

// console.log(share.test()); 

$(function () {

    $.getJSON('https://www.quandl.com/api/v3/datasets/WIKI/YHOO/data.json', function (data) {
        // console.log(data.dataset_data.data.length);
        var rawDataPoints = data.dataset_data.data; 
        var dataPoints = rawDataPoints.map(function(value){
            var date = moment(moment(value[0], "YYYY-MM-DD").unix()*1000);
            return [date._i, value[4]]; 
        })

        dataPoints.sort(function(a,b){
            return  a[0] - b[0]; 
        })
        // console.log(moment(moment(data.dataset_data.data[0][0], "YYYY-MM-DD").unix()*1000)._i);
        // console.table(dataPoints); 
        console.log('Hi');
        // Create the chart
        Highcharts.stockChart('container', {

            title: {
                text: 'Test Stock Price'
            },

            series: [{
                data: dataPoints,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });

    });

});
