;(function($) {
    "use strict";
    $(document).ready(function() {
        $('#access').on('touchstart click', '.skip-link', function(event) {
            $(this).toggleClass('focus');
            $($(this).attr('href')).toggleClass('target');
            event.preventDefault();
        }).find('.skip-link').append('<span>'+$('#menu .active').text()+'</span>');
    });
})(jQuery);

$(function () {
    $('#container').highcharts({
        title: {
            text: 'Monthly Average Petrol Price 2013',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: theaa.ie',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Price (EUR)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'EUR'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Unleaded',
            data: [157.9, 159.4, 158.0, 162.0, 158.1, 157.4, 157.6, 160.1, 161.0, 156.6, 160.7, 163.8]

        }, {
            name: 'Diesel',
            data: [150.8, 153.7, 151.0, 153.8, 148.3, 148.9, 148.2, 148.3, 150.0, 152.0, 154.5, 155.9]
        }]
    });
});


  function initialize() { 
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
      center: new google.maps.LatLng(53.351379, -6.260757),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
  var map = new google.maps.Map(mapCanvas, mapOptions);
  
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Dublin'
  });
  }
  
  google.maps.event.addDomListener(window, 'load', initialize);