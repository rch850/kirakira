console.debug("init start");

chrome.webRequest.onCompleted.addListener(
    function(details) {
      if (details.ip) {
        console.log(details.timeStamp + ": " + details.ip);
      }
    }, {
      urls: ["<all_urls>"]
    });

console.debug("init end");
