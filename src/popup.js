$(function() {
  function initialize() {
    var mapOptions = {
      zoom: 3,
      center: new google.maps.LatLng(35.7315015,139.7314098,13),
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

    var iplogs = chrome.extension.getBackgroundPage().iplogs;

    iplogs.forEach(function(d, index) {
      console.log(d.timeStamp + " : " + d.ip);
      $.get("http://ipinfo.io/" + d.ip + "/geo", function(response) {
        var latlng = JSON.parse(response).loc.split(",");
        var ipAddrCoordinates = [
          new google.maps.LatLng(35.7315015,139.7314098,13),
          new google.maps.LatLng(latlng[0], latlng[1])
        ];
        var packetPath = new google.maps.Polyline({
          path: ipAddrCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        packetPath.setMap(map);
      }, "jsonp");

    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);

});
