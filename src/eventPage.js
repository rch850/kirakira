console.debug("init start");

var iplogs = [];

chrome.webRequest.onCompleted.addListener(
    function(details) {
      if (details.ip) {
        iplogs.push({
          "timeStamp": details.timeStamp,
          "ip": details.ip
        });
      }
    }, {
      urls: ["<all_urls>"]
    });

console.debug("init end");

