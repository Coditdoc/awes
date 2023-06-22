console.log("Available screen width- ", screen.availWidth);
console.log("screen width- ", screen.width);
console.log("screen height- ", screen.height);
console.log(window.innerWidth);
(function () {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  function displayWindowSize() {
    console.clear();
    let myWidth = window.innerWidth;
    let myHeight = window.innerHeight;
    // your size calculation code here
    console.log(`Screen width- ${myWidth}, height- ${myHeight}`)
};

// 360 * 593;
})();