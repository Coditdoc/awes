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

/*
window.onload = function() {
  // Get a reference to the .holders div element
  const holdersDiv = document.querySelector('.holders');

  // Set the maximum scroll position (in pixels)
  const maxScrollTop = 300;

  // Set the scroll speed (in pixels per interval)
  const scrollSpeed = 5;

  // Set the interval duration (in milliseconds)
  const intervalDuration = 10;
  

  // Create a function to update the scroll position of the .holders div
  function updateScrollPosition() {
    // Check if the .holders div has reached the maximum scroll position
    if (holdersDiv.scrollTop >= maxScrollTop) {
      // Stop the scrolling animation
      clearInterval(scrollInterval);
      // Scroll the .holders div back to its original position
      holdersDiv.scrollTop = 0;
      return;
    }

    // Update the scrollTop property of the .holders div
    holdersDiv.scrollTop += scrollSpeed;
  }

  // Call the updateScrollPosition function at regular intervals
  const scrollInterval = setInterval(updateScrollPosition, intervalDuration);
}
*/

/*

window.onload = function() {
  // Get a reference to the .holders div element
  const holdersDiv = document.querySelector('.holders');

  // Set the maximum scroll position (in pixels)
  const maxScrollTop = 200;

  // Set the scroll speed (in pixels per interval)
  const scrollSpeed = 5;

  // Set the interval duration (in milliseconds)
  const intervalDuration = 10;

  // Set the scroll delay (in milliseconds)
  const scrollDelay = 2000;

  // Create a function to update the scroll position of the .holders div
  function updateScrollPosition() {
    // Check if the .holders div has reached the maximum scroll position
    if (holdersDiv.scrollTop >= maxScrollTop) {
      // Stop the scrolling animation
      clearInterval(scrollInterval);
      // Smoothly scroll the .holders div back to its original position
      holdersDiv.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Update the scrollTop property of the .holders div
    holdersDiv.scrollTop += scrollSpeed;
  }

  // Call the updateScrollPosition function at regular intervals after a delay
  let scrollInterval;
  setTimeout(function() {
    scrollInterval = setInterval(updateScrollPosition, intervalDuration);
  }, scrollDelay);
}
*/

  // Get references to the text box, button, and link elements
  const myTextBox = document.querySelector('#Udt1');
  const myButton = document.querySelector('#myButton');
  const myLink = document.querySelector('#myLink');

  // Add an event listener to the button element that listens for the click event
  myButton.addEventListener('click', function() {
    console.log(myTextBox.value)
    // Get the value of the text box
    let text = myTextBox.value;

    // Convert the text to uppercase
    text = text.toUpperCase();

    // Convert the text to lowercase
    text = text.toLowerCase();

    // Check if the text matches the expected string
    if (text === 'hey i am here' || text === 'heyiamhere') {
      // The text matches, so show the link element
      myLink.style.display = 'inline';
    } else {
      // The text does not match, so hide the link element
      myLink.style.display = 'none';
    }
  });