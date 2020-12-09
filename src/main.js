// Create variables targetting the relevant DOM elements here 👇
var newRandomCoverBtn = document.querySelector('.random-cover-button')
var displayCover = document.querySelector('.cover-image')
var displayTitle = document.querySelector('.cover-title')
var displayDescriptor1 = document.querySelector('.tagline-1')
var displayDescriptor2 = document.querySelector('.tagline-2')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
newRandomCoverBtn.addEventListener('click', showNewCover)

// Create your event handlers and other functions here 👇
function showNewCover() {
  var newImage = covers[getRandomIndex(covers)];
  var newTitle = titles[getRandomIndex(titles)];
  var newDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var newDescriptor2 = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover (newImage, newTitle, newDescriptor1, newDescriptor2);
  displayCover.src = newImage
}

function displayNewCover() {

}
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
