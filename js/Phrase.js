class Phrase {
  /**
   * 
   * @param {string} phrase - a string pulled from an array of strings in data.js
   */
  constructor(phrase) {
    this.phrase = phrase;
  }

  /**
   * Function athat adds the blank boxes representing letters to the display
   */
  addPhraseToDisplay() {
    const phraseUl = $("#phrase ul");
    let html = "";
    for(let letter of this.phrase) {
      letter == " " ?
        html += `<li class="hide space"> </li>`:
        html += `<li class="hide letter ${letter}">${letter}</li>`;
    }
    phraseUl.html(html);
  }

  /**
   * 
   * @param {string} letter - string that contains the letter to search for
   * @returns {boolean} - returns true or false depending on whether or not the letter was found in the phrase  
   */
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  /**
   * Function that loops through all the boxes and searches for the matching letter and reveals all instances of it
   * @param {string} letter - the letter we're going to reveal 
   */
  showMatchedLetter(letter) {
    let boxes = $("#phrase li");
    for(let box of boxes) {
      if(box.innerText == letter) {
        $(box).addClass("show animated pulse");
      }
    }
  }
}