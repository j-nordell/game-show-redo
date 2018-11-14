class Game {
  constructor(missed, phrases) {
    this.missed = missed;
    this.phrases = phrases;
    this.usedPhrases = [];
    this.started = false;
    this.currentPhrase = null;
    this.lastPhrase = null;
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
        let randomIndex = Math.floor(Math.random() * this.phrases.length);
        // if the the currently selected index contains the same phrase that was shown last time, pick another
        // This is otherwise possible when the phrases is refilled from the used phrases
        while(this.phrases[randomIndex] == this.lastPhrase) {
          randomIndex = Math.floor(Math.random() * this.phrases.length);
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
    alert(winLose);
  }

  startGame() {
    this.currentPhrase = new Phrase(this.getRandomPhrase().toUpperCase());
    this.currentPhrase.addPhraseToDisplay();
  }
}