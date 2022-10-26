// These are  global variables that are assigned to elements in the HTML
// so we can manipulate them with JS. Classes are refereneced with '.' and id's with '#' prefixes.
var randomButton = document.querySelector(`.show-random`)
var image = document.querySelector(`.poster-img`)
var title = document.querySelector(`.poster-title`)
var quote = document.querySelector(`.poster-quote`)
var homePage = document.querySelector(`.main-poster`)
var makeNewPoster = document.querySelector(`.poster-form`)
var makePosterButton = document.querySelector(`.show-form`)
var savedButton = document.querySelector(`.show-saved`)
var savedPostersPage = document.querySelector(`.saved-posters`)
var backToMainButton = document.querySelector(`.back-to-main`)
var nevermindButton = document.querySelector(`.show-main`)
var createImage = document.querySelector(`#poster-image-url`)
var createTitle = document.querySelector(`#poster-title`)
var createQuote = document.querySelector(`#poster-quote`)
var createPosterButton = document.querySelector(`.make-poster`)
var savePosterButton = document.querySelector(`.save-poster`)
var savedPosterGallery = document.querySelector(`.saved-posters-grid`)

var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
// These global variables were really important! The saved posters array is where we pushed the
// posters that were saved by the savePosterButton event listener and saveCurrentPoster function.
// We reassigned the global var currentPoster in all below functions instead of creating new
// instances which made things much easier like preventing duplicates.
var savedPosters = [];
var currentPoster;

// Event listeners assigned to the queried vars above. First one is on the window to allow us
// to run a functon on page load, the rest of the functions are invoked by clicks or dblclick.
window.addEventListener(`load`, getNewLoadPoster)
randomButton.addEventListener(`click`, getNewLoadPoster)
makePosterButton.addEventListener(`click`, loadCreateForm)
savedButton.addEventListener('click', showSavedPosters)
backToMainButton.addEventListener(`click`, goHome)
nevermindButton.addEventListener(`click`, goHome)
createPosterButton.addEventListener(`click`, createPoster)
savePosterButton.addEventListener(`click`, saveCurrentPoster)
savedPosterGallery.addEventListener(`dblclick`, deleteSavedPoster)

// This was given to us but just generates a random number.
function getRandomIndex(array) {
  var arrayIndex = Math.floor(Math.random() * array.length);
  return array[arrayIndex]
}
// Reassigns the current poster to a new instance of the Poster class with a random image, title and quote
function loadRandomPoster() {
  currentPoster = new Poster(getRandomIndex(images), getRandomIndex(titles), getRandomIndex(quotes))
}
// Reassigns the global vars for image source, title and quote to the currentPoster's properties
function randomLoadPoster() {
  image.src = currentPoster.imageURL
  title.innerText = currentPoster.title
  quote.innerText = currentPoster.quote
}
// Combines the last two functions in to one function invoked when the random buton is pressed
function getNewLoadPoster() {
  loadRandomPoster()
  randomLoadPoster()
}
// Ressaigns the home page class list to unhide it and hide the poster form and saved poster pages
function goHome() {
  homePage.classList.remove(`hidden`)
  makeNewPoster.classList.add("hidden")
  savedPostersPage.classList.add("hidden")
}
// Reassigns the class of home page to hide and show the make a new poster form
function loadCreateForm() {
  homePage.classList.add("hidden")
  makeNewPoster.classList.remove("hidden")
}
// Reassigns the class of the home page to hide it and show the saved posters page.
// It also invokes the function that pushes the saved poster array in to the poster grid to show them
function showSavedPosters() {
  homePage.classList.add("hidden")
  savedPostersPage.classList.remove("hidden")
  displayPosterPallete()
}
// This is only invoked when the below createPoster function is invoked and is used to
// reassign the currentPoster and hide the create poster form/show the home page/section
function displayCreatedPoster() {
  randomLoadPoster()
  goHome()
}
// From MDN "tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be"
// Local vars assigned to the values of the global vars selecting the ids for the <input>'s on index.html lines 26,28 and 30
// Those user created inputs in local vars are pushed in to the arrays for each respective element
// currentPoster is reassigned to a new instance of Poster with these local vars of the user input
// goHome invoked to hide this form and show the main section
// displayCreated poster reassigns the global vars for the main section's poster display with currentPoster
function createPoster(event) {
  event.preventDefault()
  var newImage = createImage.value
  var newTitle = createTitle.value
  var newQuote = createQuote.value
  images.push(newImage)
  titles.push(newTitle)
  quotes.push(newQuote)
  currentPoster = new Poster(newImage, newTitle, newQuote)
  goHome()
  displayCreatedPoster() 
}
// *** Most complicated and new to me function for sure! ***
// savedPosterGallery is assigned to the `.saved-posters-grid` artice on line 38 of index
// That article needs to make a space in between the tags to put new sections of each saved poster object,
// so assigned it's innerHTML (between the article tags) it to just a " "
// For loop created with a upper bound of the total num of posters in the savedPosters array
// On each element, that blank space in the innerHTML is assigned to a new <section> with a class of
// "mini-poster" found at line 112 in the CSS, an interpolated ID from the savedPoster objects,
// the savedPoster <image with ".mini-poster-img" from line127 of the CSS, the interpolated id for that object,
// the imageURL and a boilerplate alt text. The next two classes are at 132 and 133 in the CSS and follow similar procedure.
// Used the <h2> and <h4> respectively as they corresponded to each of those classes.
// The initial "savedPosterGallery.innerHTML + " allows compounding of each element to build this article out as
// it cycles through the loop of savedPosters. It essentially just keeps adding the new one on each time.
// *** NOTE ABOUT CLASSES HERE, the dash is neccesary to combine "mini-poster" and the "img" "h2" "h4"
// despite it being shown in the index.html using combinations of classes i.e. "poster-form hidden"
// combines the poster-form class on line 77 and the global hidden class on 32. Not exactly sure why but
// without the dases here, the savedPosters are shown in the grid but are not formatted properly at all. ***
function displayPosterPallete() {
  savedPosterGallery.innerHTML = " ";
  for (var i = 0; i < savedPosters.length; i++) {
  savedPosterGallery.innerHTML = savedPosterGallery.innerHTML +
    `<section class="mini-poster" id="${savedPosters[i].id}">
      <img class="mini-poster-img" id="${savedPosters[i].id}" src="${savedPosters[i].imageURL}" alt="inspirational poster">
      <h2 class="mini-poster-h2" id="${savedPosters[i].id}">${savedPosters[i].title}</h2>
      <h4 class="mini-poster-h4" id="${savedPosters[i].id}">${savedPosters[i].quote}</h4>
    </section>`
 }
}
// For/if function to identify the id of the dblclik'ed object by ID with the event parameter coming from
// the event listener for the double clicked object, pass it in and use event.target.id and find it in the
// savedPosters objects, then splice it out at index and rerun our above function to recreate the savedPosters gallery.
function deleteSavedPoster(event) {
  for (var i = 0; i < savedPosters.length;i++) {
   if(savedPosters[i].id == event.target.id) {
    savedPosters.splice(i, 1)
   }
  }
  displayPosterPallete()
}
// Prevent duplication while pushing the currently shown poster in to savedPosters.
function saveCurrentPoster() {
  if (!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster)
  } 
}