let timerId = setInterval(function () {
  console.log("tick")
}, 2000);

setTimeout(function () {
  clearInterval(timerId);
  console.log("stop");
}, 5000);
