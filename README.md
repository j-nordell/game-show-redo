# Full Stack JavaScript Techdegree - Project 4
Game Show version

## Project Instructions

To complete this project, follow the instructions below. If you get stuck, ask a question on Slack or in the Treehouse Community.

### Create 3 JavaScript files to hold the program's logic

- [ ] app.js to perform basic DOM selection, add event handlers, and to reset the game when it ends
- [ ] Phrase.js to create a Phrase class to handle the creation of phrases
- [ ] Game.js to create a Game class with methods for starting and ending the game, handling interactions, getting random phrases, checking for a win, and removing a life counter.

### Create the `Phrase` class in the Phrase.js file.

- [ ] The class should include a constructor that accepts a phrase as an argument. The class should include the following methods:

  - [ ] `addPhraseToDisplay()`: this adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one list item for each letter. See the example_phrase_html.txt file for an example of what the render HTML for a phrase should look like when the game starts. When the player correctly guesses a letter, the empty box is replaced with a the matched letter (see the showMatchedLetter() method below. Make sure the phrase displayed on the screen doesn't include spaces.
  - [ ] `checkLetter()`: checks to see if letter selected by player matches a letter in the phrase.
  - [ ] `showMatchedLetter()`: reveals the letter(s) on the board that matches player's selection.

### Create the `Game` class in the Game.js file.

- [ ] The class should include a constructor with the following properties:
  - [ ] missed: used to track the number of missed guesses by the player.
  - [ ] phrases: an array of phrases to use with the game (you'll use a method to create new instances of the Phrase class). A phrase should only include letters and spaces — no numbers, punctuation or other special characters.

- [ ] The class should also have these methods:
  - [ ] `getRandomPhrase()`: this method randomly retrieves one of the phrases stored in the phrases array.
  - [ ] `handleInteraction()`: this method checks to see if the button clicked by the player matches a letter in the phrase.
    - [ ] If it does not, then call the removeLife() method..
    - [ ] If the selected letter matches, call the showMatchedLetter() method on the phrase and then call the checkForWin() method.

  - [ ] `removeLife()`: this method removes a life, removes a heart from the board, and, if the player is out of lives, ends the game.
  - [ ] `checkForWin()`: this method checks to see if the player has selected all of the letters.
  - [ ] `gameOver()`: this method displays a message if the player wins or a different message if they lose.
  - [ ] `startGame()`: calls the getRandomPhrase() method, and adds that phrase to the board by calling the Phrase class' addPhraseToDisplay() method.

### Create the app.js file

- [ ] This file creates a new instance of the Game class, adds event listeners for the onscreen keyboard and a function to display the game:
  - [ ] `resetDisplay()`: this function hides the start screen overlay.
  - [ ] `markButton()`: this function is called when a player selects a letter. It disables the button on the onscreen keyboard and calls the - - [ ] `handleInteraction()` method of the Game class.
  - [ ] Add an event listener to the "Start Game" button which calls the - - [ ] `resetDisplay()` function, creates a new Game object, and starts the game.
  - [ ] Add event listeners to each of the keyboard buttons, so that clicking a button calls the markButton() function.

**NOTE: Keyboard functionality**
Only the keys of the onscreen keyboard should be clickable. Clicking the space between and around the keys should not trigger the click event.

### Making the project your own

The general layout should remain the same, but feel free to make the project your own by experimenting with things like color, background color, font, borders, shadows, transitions, animations and/or the exciting CSS filter property.

### Add good code comments

- [ ] Code is commented

### Check for cross-browser consistency

- [ ] Checked in Firefox
- [ ] Checked in Chrome
- [ ] Checked in Safari

### Review the "How you'll be graded" section

- [ ] grading requirements checked off

### Quality Assurance and Project Submission Checklist

- [ ] Perform QA testing on your project, checking for bugs, user experience and edge cases.
- [ ] Check off all of the items on the Student Project Submission Checklist.

**NOTE: Seeking assistance**

If you're feeling stuck or having trouble with this project:

- Review material in the unit.
- Practice your Google skills by finding different ways to ask the questions you have, paying close attention to the sort of results you get back depending on how your questions are worded.
- Reach out to the team on Slack.

**NOTE: What you submit is what will get reviewed.**

- When you submit your project, a snapshot is taken of your repository, and that is what the reviewer will see. Consequently, any changes you make to your repo after you submit will not be seen by the reviewer. So before you submit, it's a smart idea to do a final check to make sure everything in your repo is exactly what you want to submit.

## Extra Credit

To get an "exceeds" rating, you can expand on the project in the following ways:

### Add keyboard functionality

- [ ] Let players use the computer keyboard to enter guesses. You'll need to use the keypress event.

### Reset the Game

- [ ] Add a button to the “success” and “failure” screens that resets the game. You’ll have to reset the buttons in the keyboard, generate a new random phrase, and set the number of misses to zero.

- [ ] Double check that your app properly and completely resets for subsequent games. Everything should work correctly and without errors every time a new games tarts.

**NOTE:**

- To get an "Exceeds Expectations" grade for this project, you'll need to complete each of the items in this section. See the rubric in the "How You'll Be Graded" tab above for details on how you'll be graded.
- If you’re shooting for the "Exceeds Expectations" grade, it is recommended that you mention so in your submission notes.
- Passing grades are final. If you try for the "Exceeds Expectations" grade, but miss an item and receive a “Meets Expectations” grade, you won’t get a second chance. Exceptions can be made for items that have been misgraded in review.
