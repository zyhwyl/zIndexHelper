function click(e) {
  chrome.tabs.executeScript(null,
      {code:"document.body.style.background='red';console.log(window);"});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector('#button');
    	button.addEventListener('click', click);
});

window.onload = function() {
  chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query({active: true, windowId: currentWindow.id},
                      function(activeTabs) {
      chrome.tabs.executeScript(
        activeTabs[0].id, {file: 'event.js', allFrames: true});
    });
  });
};