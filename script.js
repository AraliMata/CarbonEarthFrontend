// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

// Highlight the top nav as scrolling occurs

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

/*mapboxgl.accessToken = 'pk.eyJ1Ijoia2VzaHJhZiIsImEiOiJja3RyaTRlaGMwcDNsMm5xbzhwbnB0ZTExIn0.yG30wveYFhWm-s0MtL39Bw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11' });*/


const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
});

/* SCROLL BUTTON */
const scrollButton = document.querySelector(".up-button");
scrollButton.style.visibility = "hidden";
const viewHeight = window.innerHeight;
const scrollCheck = window.addEventListener('scroll', function () {
  let scrollPosition = window.scrollY;
  if (scrollPosition < viewHeight / 2) {
    scrollButton.style.visibility = "hidden";
  } else
  {
    scrollButton.style.visibility = "visible";
  }
  /* const about = document.querySelector(".analysis");
  console.log(about.getBoundingClientRect()); */
});

