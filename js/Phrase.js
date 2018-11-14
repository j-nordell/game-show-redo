class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

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

  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  showMatchedLetter(letter) {
    let boxes = $("#phrase li");
    for(let box of boxes) {
      if(box.innerText == letter) {
        $(box).addClass("show animated pulse");
      }
    }
  }
}