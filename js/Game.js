class Game {
  /**
   * 
   * @param {number} missed - the number missed always reset to 0 
   * @param {Array} phrases - an array of strings containing phrases available 
   * @param {Array} usedPhrases - an array of strings containing phrases already shown 
   * @param {boolean} firstRound - a boolean value representing if this is the first round of the game 
   * @param { } lastPhrase 
   */
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

  /**
   * 
   * @param {string} letter - the string that contains the letter we're working with
   */
  handleInteraction(letter) {
    if(this.currentPhrase.checkLetter(letter)) {      // if the phrase contains the leter
      this.currentPhrase.showMatchedLetter(letter);   // reveal that letter anywhere it appears
      this.checkForWin();                             // check for a win
     } else { 
       this.removeLife();                             // remove a "heart" from the player
     }
  }

  /**
   * Function to remove a "life" from a player
   */
  removeLife() {
    this.missed += 1;                                 // increment the number missed

    let hearts = $(".tries");
    let heartImgs = $(".tries img");
  
    $(hearts[5 - this.missed]).addClass("animated flash");  // add class to lass heart
    $(heartImgs[5 - this.missed]).attr("src", "images/lostHeart.png");  // change out last heart image source
     
    if(this.missed == 5) {    // if all lives are gone
      this.gameOver("lose");  // game is over and pass "lose" to that function
    }

  }

  /**
   * Function to check if the user has won a game. This is called every time a player guesses
   * a leter that was present in the current phrase
   */
  checkForWin() {
    let win = true;                   // start assuming that the player won
    let boxes = $("#phrase li");      // select all the boxes for all letters shown or hidden
    for(let box of boxes) {
        if(!($(box).hasClass("show")) && !($(box).hasClass("space"))) {  // if it's not a space and it's not releaved
          win = false;    // then the player hasn't yet won
        }
    }
    
    if(win) {   // if the player won
      this.gameOver("win");  // call the gameOver function with the argument "win"
    };
  }

  /**
   * Function that runs whenever the game is over due to a loss or a win
   * @param {string} winLose - should contain either the string "win" or "lose" 
   */
  gameOver(winLose) {
    this.started = false;     // set the game.started to false so that we aren't still listening for enter to start a new game
    this.firstRound = false;  // every subsequent round after the first will be subject to this
    this.lastPhrase = this.currentPhrase;  // reset the lastPhrase used to this phrase to avoid repetition of phrases
    $("#phrase ul").html("");

    let totalMessage = '';
    let emoji = '';
    let message = '';
    let color = '';
      
    overlay.removeClass("slideOutUp slideInLeft slideInRight win lose");
       
    if(winLose == "win") {  // if the person won
      // put together the message and styles for the "win" screen
      message = winningMessages[winningMessages.randomIndex()];
      emoji = winEmojis[winEmojis.randomIndex()];
      color = `${winColors[winColors.randomIndex()]}`;
      $("#game-over-message").css({"font-family": "Pacifico"});
      overlay.addClass("slideInLeft win");
      $("#answer").text("");
    } else {
      // otherwise, put together the message and styles for the "lose" screen
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
  
    this.enableHearts();  // renable the hearts otherwise they show through the overlay
    this.enableKeys();    // renable the keys otherwise they show through the overlay
    $("#btn__reset").text("Play again");  // change the button text to indicate they are playing a new round
   }

   /**
    * Function to start the game that creates a new phrase and makes it the current phrase. Resets
    * the allowed letters so that we can once again listen for keypresses on letters we guessed the last
    * round. Add the current phrase to the display.
    */
  startGame() {
    this.currentPhrase = new Phrase(this.getRandomPhrase().toUpperCase());
    this.allowedLetters = ["A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];
    this.currentPhrase.addPhraseToDisplay();
  }

  /**
   * Function to reset the hearts to their original state
   */
  enableHearts() {
    $(".tries").removeClass("animated flash");
    let heartsImages = $(".tries img");
    for(let heart of heartsImages) {
      $(heart).attr("src", "images/liveHeart.png");
    }
  }

  /**
   * Function reset the onscreen keyboard to its original state
   */
  enableKeys() {
    let keys = $(".key");
    for(let key of keys) {
      key.disabled = false;
    }
  }

}