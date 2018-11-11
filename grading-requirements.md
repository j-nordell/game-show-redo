# Grading requirements for FSJS Project 4 (Game Show)

## Phrase.js

- Needs Work
  - No constructor

  - Is missing any of the following methods: addPhraseToDisplay(), checkLetter(), showMatchedLetter()

- Meets Expectations
  - [ ] Includes constructor which accepts a phrase

  - [ ] Includes addPhraseToDisplay() method which shows the phrase on the gameboard

  - [ ] Includes checkLetter() method which checks if a letter is in the phrase

  - [ ] Includes showMatchedLetter() method which reveals the letter(s) on the board that matches the player's selection

- Exceeds Expectations
  - N/A

## Game.js

- Needs Work
  - No constructor

  - Phrases added to the game include numbers, punctuation or special characters.

  - Is missing any of the following methods: `getRandomPhrase(), handleInteraction(), checkForWin(), removeLife(),gameOver(),startGame()`

- Meets Expectations

  - [ ] Includes a constructor that adds a missed property, and a phrases property containing an array of phrases

  - [ ] Phrases should only include spaces and letters.

  - [ ] Includes getRandomPhrase() method to randomly retrieve one phrase from the phrases array

  - [ ] Includes handleInteraction() method to check player's letter selection and assess win or lose conditions

  - [ ] Includes checkForWin() method to see if the player has guessed all letters in the phrase

  - [ ] Includes a removeLife() method to remove a life from the player, update the game board, and check to see if player loses game.

  - [ ] Includes gameOver() method to display a final win or lose message

  - [ ] Includes startGame() method to get a random phrase and display it

- Exceeds Expectations
  - N/A

## app.js

- Needs Work

  - Clicking a letter present in the phrase does not add the “show” class to those letters in the display

  - Clicking a letter not present in the phrase does not remove a heart from the scoreboard

  - Letters can be clicked twice

  - Clicking space between letters affects game or board

- Meets Expectations

  - [ ] Includes resetDisplay() function which hides the start screen overlay

  - [ ] Includes markButton() function which is called when player selects a letter. It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class

  - [ ] Clicking the "Start Game" button calls the resetDisplay() function, creates a new Game object, and starts the game

  - [ ] Event listeners on onscreen keyboard buttons, so that clicking a button calls the markButton() function

- Exceeds Expectations

  - [ ] Event listener for the "keypress" event that calls the markButton() function for the associated onscreen keyboard button

## Game over

- Needs Work

  - If a player makes 5 wrong guesses, the “lose” overlay is not shown

  - If all the letters in the phrase are shown, the “win” overlay is not shown

- Meets Expectations
  - [ ] If a player makes 5 wrong guesses, the “lose” overlay is shown

  - [ ] If all the letters in the phrase are shown, the “win” overlay is shown

- Exceeds Expectations
- [ ] A button has been added to the “lose” and “win” overlays to reset the game