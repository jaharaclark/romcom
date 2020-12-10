// Create variables targetting the relevant DOM elements here 👇
var newRandomCoverBtn = document.querySelector('.random-cover-button')
var homeBtn = document.querySelector('.home-button');
var saveCoverBtn = document.querySelector('.save-cover-button');
var viewSavedCoverBtn = document.querySelector('.view-saved-button');
var makeNewCoverBtn = document.querySelector('.make-new-button');
var makeMyBookBtn = document.querySelector('.create-new-book-button')
var displayCover = document.querySelector('.cover-image')
var displayTitle = document.querySelector('.cover-title')
var displayDescriptor1 = document.querySelector('.tagline-1')
var displayDescriptor2 = document.querySelector('.tagline-2')
var formView = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var inputCover = document.querySelector('.user-cover');
var inputTitle = document.querySelector('.user-title');
var inputDescriptor1 = document.querySelector('.user-desc1');
var inputDescriptor2 = document.querySelector('.user-desc2');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
newRandomCoverBtn.addEventListener('click', showNewCover)
homeBtn.addEventListener('click', goHome);
// saveCoverBtn.addEventListener('click', FUNCTION);
viewSavedCoverBtn.addEventListener('click', seeSavedCovers);
makeNewCoverBtn.addEventListener('click', goToMakeCoverInputPage);
makeMyBookBtn.addEventListener('click', generateUserCover)
makeMyBookBtn.addEventListener('click', goHome)

// Create your event handlers and other functions here 👇
function showNewCover() {
  var newImage = covers[getRandomIndex(covers)];
  var newTitle = titles[getRandomIndex(titles)];
  var newDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var newDescriptor2 = descriptors[getRandomIndex(descriptors)];

  currentCover = new Cover (newImage, newTitle, newDescriptor1, newDescriptor2);

  displayCover.src = newImage;
  displayTitle.innerHTML = newTitle;
  displayDescriptor1.innerHTML = newDescriptor1;
  displayDescriptor2.innerHTML = newDescriptor2;
}

function goToMakeCoverInputPage() {
  homeView.classList.add('hidden');
  homeBtn.classList.remove('hidden');
  newRandomCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  formView.classList.remove('hidden');
}

function seeSavedCovers() {
  homeView.classList.add('hidden');
  newRandomCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  homeBtn.classList.remove('hidden');
}

function goHome() {
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
  saveCoverBtn.classList.remove('hidden');
}

function generateUserCover() {
  event.preventDefault();
  var userCover = inputCover.value
  var userTitle = inputTitle.value
  var userDescriptor1 = inputDescriptor1.value
  var userDescriptor2 = inputDescriptor2.value

  currentCover = new Cover (userCover, userTitle, userDescriptor1, userDescriptor2)

  displayCover.src = userCover;
  displayTitle.innerHTML = userTitle;
  displayDescriptor1.innerHTML = userDescriptor1;
  displayDescriptor2.innerHTML = userDescriptor2;

  covers.push(userCover);
  titles.push(userTitle);
  descriptors.push(userDescriptor1, userDescriptor2)
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
