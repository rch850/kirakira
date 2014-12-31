$(function() {
  function initialize() {
    var mapOptions = {
      zoom: 1,
      center: new google.maps.LatLng(0, 0),
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

    var iplogs = chrome.extension.getBackgroundPage().iplogs;
    var ipAddrCoordinates = [
      new google.maps.LatLng(37.772323, -122.214897),
      new google.maps.LatLng(21.291982, -157.821856),
      new google.maps.LatLng(-18.142599, 178.431),
      new google.maps.LatLng(-27.46758, 153.027892)
    ];

    iplogs.forEach(function(d) {
      // TODO: push ipaddrcoordinates
      $("body").append(d.timeStamp + " : " + d.ip + "<br>");
    });

    var packetPath = new google.maps.Polyline({
      path: ipAddrCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    packetPath.setMap(map);

  }

  google.maps.event.addDomListener(window, 'load', initialize);

});
