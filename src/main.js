var displayCover = document.querySelector('.cover-image')
var displayTitle = document.querySelector('.cover-title')
var displayDescriptor1 = document.querySelector('.tagline-1')
var displayDescriptor2 = document.querySelector('.tagline-2')
var formView = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var homeBtn = document.querySelector('.home-button');
var inputCover = document.querySelector('.user-cover');
var inputTitle = document.querySelector('.user-title');
var inputDescriptor1 = document.querySelector('.user-desc1');
var inputDescriptor2 = document.querySelector('.user-desc2');
var makeMyBookBtn = document.querySelector('.create-new-book-button')
var makeNewCoverBtn = document.querySelector('.make-new-button');
var newRandomCoverBtn = document.querySelector('.random-cover-button')
var savedCoversSection = document.querySelector('.saved-covers-section')
var saveCoverBtn = document.querySelector('.save-cover-button');
var savedView = document.querySelector('.saved-view');
var viewSavedCoverBtn = document.querySelector('.view-saved-button');


var currentCover;
var savedCovers = [];


homeBtn.addEventListener('click', goHome);
makeNewCoverBtn.addEventListener('click', goToMakeCoverInputPage);
makeMyBookBtn.addEventListener('click', generateUserCover)
newRandomCoverBtn.addEventListener('click', showNewCover)
saveCoverBtn.addEventListener('click', saveCover);
savedView.addEventListener('dblclick', deleteCover)
viewSavedCoverBtn.addEventListener('click', seeSavedCovers);
window.addEventListener('load', showNewCover)


function deleteCover(){
  if(event.target.closest('section')) {
    var selectedCover = event.target.closest('section')
    for (var i = 0; i < savedCovers.length; i++) {
      if (savedCovers[i].id === Number(selectedCover.id)) {
        savedCovers.splice(i, 1)
      }
    }
    seeSavedCovers()
  }
}

function generateUserCover() {
  event.preventDefault();

  preventEmptyCover();
  if(preventEmptyCover()){
    return alert('It looks like your cover might be missing a thing or two. Please enter all of the necessary information and try again.')
  }

  var userCover = inputCover.value
  var userTitle = inputTitle.value
  var userDescriptor1 = inputDescriptor1.value
  var userDescriptor2 = inputDescriptor2.value

  currentCover = new Cover (userCover, userTitle, userDescriptor1, userDescriptor2)

  displayCover.src = userCover;
  displayTitle.innerHTML = userTitle;
  displayDescriptor1.innerHTML = userDescriptor1;
  displayDescriptor2.innerHTML = userDescriptor2;

  pushToArray(userCover, userTitle, userDescriptor1, userDescriptor2);

  goHome();
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function goHome() {
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
  saveCoverBtn.classList.remove('hidden');
  homeBtn.classList.add('hidden');
  newRandomCoverBtn.classList.remove('hidden');
}

function goToMakeCoverInputPage() {
  savedView.classList.add('hidden')
  homeView.classList.add('hidden');
  homeBtn.classList.remove('hidden');
  newRandomCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  formView.classList.remove('hidden');
}

function preventEmptyCover(){
if (inputCover.value === "" || inputTitle.value === "" || inputDescriptor1.value === "" || inputDescriptor2.value === ""){
  return true;
  }
}

function pushToArray(userCoverA, userTitleA, userDescriptor1A, userDescriptor2A) {
  covers.push(userCoverA);
  titles.push(userTitleA);
  descriptors.push(userDescriptor1A, userDescriptor2A)
}

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
}

function seeSavedCovers() {
  savedView.classList.remove('hidden');
  formView.classList.add('hidden');
  homeView.classList.add('hidden');
  newRandomCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  homeBtn.classList.remove('hidden');
  savedCoversSection.innerHTML = "";
  for (var i = 0; i < savedCovers.length; i++) {
      savedCoversSection.innerHTML += `
      <section class="main-cover mini-cover" id="${savedCovers[i].id}">
        <img class="cover-image" src=${savedCovers[i].cover}>
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
      </section>
      `
    }
}

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
