$(function() {
  var iplogs = chrome.extension.getBackgroundPage().iplogs;
  iplogs.forEach(function(d) {
    $("body").append(d.timeStamp + " : " + d.ip + "<br>");
  });
});
