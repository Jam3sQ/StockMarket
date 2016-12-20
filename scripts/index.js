var quandl = require('./data/getQuandl'); 
quandl.getData(function(response) {
        var object =JSON.parse(response);
        console.log(object.dataset.data);
});

$(function () {

    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {
        // Create the chart
        Highcharts.stockChart('container', {


            rangeSelector: {
                selected: 1
            },

            title: {
                text: 'AAPL Stock Price'
            },

            series: [{
                name: 'AAPL',
                data: data,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });
    });

});