var defaultWidth = 750;
var defaultFont = 40;
var bili = defaultWidth / defaultFont;
(function () {
  var html = document.querySelector("html");
  var timer;
  function setRem() {
    var screenWidth = window.innerWidth;
    if (screenWidth >= 750) {
      screenWidth = 750;
    }
    if (screenWidth <= 320) {
      screenWidth = 320;
    }
    html.style.fontSize = screenWidth / bili + "px";
  }
  setRem();
  window.onresize = function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      setRem();
    },100);
  }
})();