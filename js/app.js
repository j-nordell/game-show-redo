let game = new Game(0, phrases, [], true, null) ;
const overlay = $("#overlay");
const startButton = $("#btn__reset");
const keys = $(".key");

/**
 * Function to move the overlay and display the game board
 */
function resetDisplay() {
  overlay.addClass("animated slideOutUp");
}

/**
 * Function to disable the appropriate letter on the onscreen
 * keyboard. Also removes the corresponding letter from "allowedLetters".
 * This prevents the loss of a heart in the event that a letter that is
 * not found in the phrase is inadvertently pressed more than once.
 * @param {Object} letter - jQuery object containing the event.target 
 * @param {string} letterInvalid - the character changed to upper case 
 */
function markButton(letter, letterInvalid) {
  letter.prop("disabled", true);
  let index = game.allowedLetters.indexOf(letterInvalid);
  game.allowedLetters.splice(index, 1);
  game.handleInteraction(letterInvalid);
}

// event listener on the "Play game" button
startButton.on("click", (e) => {
  // reset the display
  resetDisplay();
  // if it's not the first round create a game that uses the values
  // of some properties from the previous round to persist data
  if(!game.firstRound) {
     game = new Game(0, game.phrases, game.usedPhrases, false, game.lastPhrase);
  }
  game.startGame();
});

// this event handler is to prevent the user from being able to highlight the 
// text in the boxes thus cheating :) 
$(document).mousedown((e) => {
  e.preventDefault();
});

// event listener set to listen for any keypress
$(document).keypress((e) => {
  let letter = e.key.toUpperCase();  // upper case version of the key that was pressed
  // if the game hasn't been started (the overlay is showing) and the key that was pressed
  // is Enter/Return reset the display and create a new game if it's not the first round
  if(e.which == 13 && !game.started) {
    resetDisplay();
    if(!game.firstRound) {
      game = new Game(0, game.phrases, game.usedPhrases, false, game.lastPhrase);
    }
    game.startGame();
  } else if(game.allowedLetters.includes(letter)) {  // if the key was pressed was a valid letter
    let result = null;
    for(let key of keys) {
      if(key.innerText == e.key) {  // if the phrase contains that letter
        result = key;
      }
    }
    markButton($(result), letter);  // mark the button of the letter and send the event as a jQuery object
  }
});

// event listener for the onscreen keyboard
keys.on("click", (e) => {
   markButton($(e.target), e.target.innerText.toUpperCase());
});


//=============================
//  Helper Functions
//=============================

Array.prototype.randomIndex = function() {
  return Math.floor(Math.random() * this.length);
}