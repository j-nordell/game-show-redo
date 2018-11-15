class Game {
  constructor(missed, phrases, usedPhrases, firstRound, lastPhrase) {
    this.missed = missed;
    this.phrases = phrases;
    this.usedPhrases = usedPhrases;
    this.firstRound = firstRound;
    this.started = false;
    this.currentPhrase = null;
    this.lastPhrase = lastPhrase;
    this.allowedLetters = ["A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];
  }

    /**
   * Get a random phrase from the phrases array and return it
   * Logic to ensure the same phrase doesn't appear twice in a row
   * Logic to ensure that every phrase is displayed once before repeating barring a refresh of the browser
   * @return {string} randomPhrase from phrases array
   */
  getRandomPhrase() {
    // When phrases is empty refill it from the used phrases pool and empty used phrases array
    if(this.phrases.length === 0) {
      this.phrases = this.usedPhrases;
      this.usedphrases = [];
      return this.getRandomPhrase(); // Recursion to get a random phrase once everything is set up
    } else {
        let randomIndex = this.phrases.randomIndex();
        // if the the currently selected index contains the same phrase that was shown last time, pick another
        // This is otherwise possible when the phrases is refilled from the used phrases
        while(this.phrases[randomIndex] == this.lastPhrase) {
          randomIndex = this.phrases.randomIndex();
        }
        // remove the random phrase from the phrases list and add it to used phrases list
        const randomPhrase = this.phrases.splice(randomIndex, 1)[0].toUpperCase(); // This simultaneously gets the object at a random index and removes it from the quotes array
        this.usedPhrases.push(randomPhrase);
        return randomPhrase;
    }
  }

  handleInteraction(letter) {
    if(this.currentPhrase.checkLetter(letter)) { 
      this.currentPhrase.showMatchedLetter(letter);
      this.checkForWin();
     } else { 
       this.removeLife();
     }
  }

  removeLife() {
    this.missed += 1;

    let hearts = $(".tries");
    let heartImgs = $(".tries img");
  
    $(hearts[5 - this.missed]).addClass("animated flash");
    $(heartImgs[5 - this.missed]).attr("src", "images/lostHeart.png");
     
    if(this.missed == 5) {
      this.gameOver("lose");
    }

  }

  checkForWin() {
    let win = true;
    let boxes = $("#phrase li");
    for(let box of boxes) {
        if(!($(box).hasClass("show")) && !($(box).hasClass("space"))) {
          win = false;
        }
    }
    
    if(win) {
      this.gameOver("win");
    };
  }

  gameOver(winLose) {
    this.started = false;
    this.firstRound = false;
    this.lastPhrase = this.currentPhrase;
    $("#phrase ul").html("");

    let totalMessage = '';
    let emoji = '';
    let message = '';
    let color = '';
      
    overlay.removeClass("slideOutUp slideInLeft slideInRight win lose");
       
    if(winLose == "win") {
      message = winningMessages[winningMessages.randomIndex()];
      emoji = winEmojis[winEmojis.randomIndex()];
      color = `${winColors[winColors.randomIndex()]}`;
      $("#game-over-message").css({"font-family": "Pacifico"});
      overlay.addClass("slideInLeft win");
      $("#answer").text("");
    } else {
      message = losingMessages[losingMessages.randomIndex()];
      emoji = loseEmojis[loseEmojis.randomIndex()];
      color = `${loseColors[loseColors.randomIndex()]}`;
      $("#answer").text(`Correct answer: ${this.currentPhrase.phrase}`);
      overlay.addClass("slideInRight lose");
      $("#game-over-message").css({"font-family": "'Shadows Into Light', cursive"});
    }
    overlay.css({"background-color": color});
    emoji = String.fromCodePoint(parseInt(emoji, 16));
    totalMessage += `${message}! ${emoji}`;
    
    $("#game-over-message").text(totalMessage);
  
    this.enableHearts();
    this.enableKeys();
    $("#btn__reset").text("Play again");
   }

  startGame() {
    this.currentPhrase = new Phrase(this.getRandomPhrase().toUpperCase());
    this.allowedLetters = ["A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];
    this.currentPhrase.addPhraseToDisplay();
  }

  enableHearts() {
    $(".tries").removeClass("animated flash");
    let heartsImages = $(".tries img");
    for(let heart of heartsImages) {
      $(heart).attr("src", "images/liveHeart.png");
    }
  }

  enableKeys() {
    let keys = $(".key");
    for(let key of keys) {
      key.disabled = false;
    }
  }

}