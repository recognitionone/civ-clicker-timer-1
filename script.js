(function() {
  
  const timeScopeValue = 30;
  let timeScope = timeScopeValue;
  let timer = null;
  
  // let value = 0;
  // var value2 = 0;

  startButton.onclick = function() {
    if (!timer) {
      // let value = 1;
      // var value2 = 1;
      // console.log("value", value, "value2", value2);

      timer = setInterval(myCounter, 1000);
    }

    // console.log("value", value, "value2", value2);
  }

  stopButton.onclick = function() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function myCounter() {
    if (timeScope <= 0) {
      clearInterval(timer);
      timer = null;
      timeScope = timeScopeValue;
      document.getElementById("demo").innerHTML = "my watch has ended";
    } else {
      document.getElementById("demo").innerHTML = --timeScope;
    }
  }
  
})();




