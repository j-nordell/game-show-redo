let game = new Game(0, phrases);
const overlay = $("#overlay");
const startButton = $("#btn__reset");
const keys = $(".key");

function resetDisplay() {
  overlay.hide();
}

function markButton(letter, letterInvalid) {
  letter.attr("disabled", true);
  let index = game.allowedLetters.indexOf(letterInvalid);
  game.allowedLetters.splice(index, 1);
  game.handleInteraction(letterInvalid);
}

startButton.on("click", (e) => {
  resetDisplay();
  game.startGame();
});

$(document).keypress((e) => {
  let letter = e.key.toUpperCase();
  if(e.which == 13 && !game.started) {
    resetDisplay();
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

