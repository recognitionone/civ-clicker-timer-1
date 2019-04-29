(function() {
  
  var timeScopeValue = 30;
  var timeScope = timeScopeValue;
  var timer = null;
  
  startButton.onclick = function() {
    if (!timer) {
      timer = setInterval(myCounter, 1000);
    }
  }

  stopButton.onclick = function() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function myCounter() {
    if (timeScope == 0) {
      clearInterval(timer);
      timer = null;
      timeScope = timeScopeValue;
      document.getElementById("demo").innerHTML = "my watch has ended";
    } else {
      document.getElementById("demo").innerHTML = --timeScope;
    }
  }
  
})();