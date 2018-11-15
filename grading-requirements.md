# Grading requirements for FSJS Project 4 (Game Show)

## Phrase.js

- Needs Work
  - No constructor

  - Is missing any of the following methods: addPhraseToDisplay(), checkLetter(), showMatchedLetter()

- Meets Expectations
  - [x] Includes constructor which accepts a phrase

  - [x] Includes addPhraseToDisplay() method which shows the phrase on the gameboard

  - [x] Includes checkLetter() method which checks if a letter is in the phrase

  - [x] Includes showMatchedLetter() method which reveals the letter(s) on the board that matches the player's selection

- Exceeds Expectations
  - N/A

## Game.js

- Needs Work
  - No constructor

  - Phrases added to the game include numbers, punctuation or special characters.

  - Is missing any of the following methods: `getRandomPhrase(), handleInteraction(), checkForWin(), removeLife(),gameOver(),startGame()`

- Meets Expectations

  - [x] Includes a constructor that adds a missed property, and a phrases property containing an array of phrases

  - [x] Phrases should only include spaces and letters.

  - [x] Includes getRandomPhrase() method to randomly retrieve one phrase from the phrases array

  - [x] Includes handleInteraction() method to check player's letter selection and assess win or lose conditions

  - [x] Includes checkForWin() method to see if the player has guessed all letters in the phrase

  - [x] Includes a removeLife() method to remove a life from the player, update the game board, and check to see if player loses game.

  - [x] Includes gameOver() method to display a final win or lose message

  - [x] Includes startGame() method to get a random phrase and display it

- Exceeds Expectations
  - N/A

## app.js

- Needs Work

  - Clicking a letter present in the phrase does not add the “show” class to those letters in the display

  - Clicking a letter not present in the phrase does not remove a heart from the scoreboard

  - Letters can be clicked twice

  - Clicking space between letters affects game or board

- Meets Expectations

  - [x] Includes resetDisplay() function which hides the start screen overlay

  - [x] Includes markButton() function which is called when player selects a letter. It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class

  - [x] Clicking the "Start Game" button calls the resetDisplay() function, creates a new Game object, and starts the game

  - [x] Event listeners on onscreen keyboard buttons, so that clicking a button calls the markButton() function

- Exceeds Expectations

  - [x] Event listener for the "keypress" event that calls the markButton() function for the associated onscreen keyboard button

## Game over

- Needs Work

  - If a player makes 5 wrong guesses, the “lose” overlay is not shown

  - If all the letters in the phrase are shown, the “win” overlay is not shown

- Meets Expectations
  - [x] If a player makes 5 wrong guesses, the “lose” overlay is shown

  - [x] If all the letters in the phrase are shown, the “win” overlay is shown

- Exceeds Expectations
- [x] A button has been added to the “lose” and “win” overlays to reset the game