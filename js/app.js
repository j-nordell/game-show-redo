let game = new Game(0, phrases, [], true, null) ;
const overlay = $("#overlay");
const startButton = $("#btn__reset");
const keys = $(".key");

function resetDisplay() {
  overlay.addClass("animated slideOutUp");
}

function markButton(letter, letterInvalid) {
  letter.prop("disabled", true);
  let index = game.allowedLetters.indexOf(letterInvalid);
  game.allowedLetters.splice(index, 1);
  game.handleInteraction(letterInvalid);
}

startButton.on("click", (e) => {
  resetDisplay();
  if(!game.firstRound) {
     game = new Game(0, game.phrases, game.usedPhrases, false, game.lastPhrase);
  }
  game.startGame();
});

$(document).mousedown((e) => {
  e.preventDefault();
});

$(document).keypress((e) => {
  let letter = e.key.toUpperCase();
  if(e.which == 13 && !game.started) {
    resetDisplay();
    if(!game.firstRound) {
      game = new Game(0, game.phrases, game.usedPhrases, false, game.lastPhrase);
    }
    game.startGame();
  } else if(game.allowedLetters.includes(letter)) {
    let result = null;
    for(let key of keys) {
      if(key.innerText == e.key) {
        result = key;
      }
    }
    markButton($(result), letter);
  }
});

keys.on("click", (e) => {
   markButton($(e.target), e.target.innerText.toUpperCase());
});


//=============================
//  Helper Functions
//=============================

Array.prototype.randomIndex = function() {
  return Math.floor(Math.random() * this.length);
}