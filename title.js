(function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
      titleScroller(text.substr(1) + text.substr(0, 1));
    }, 500);
  }("abused.lol "));
  window.oncontextmenu=function(){console.log("Stop Trying To Skid... -ego :D");return false;}