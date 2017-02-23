import Field from './field'

// indext.js
// What
// A module for blocks of text with assigned indexes and class schemes for differentiation of what has been moved through and what has not

export default class {
  // constructor
  // Params
  // done: an element, usually a span, describing what has been moved through or completed
  // undone: an element, usually a span, describing what is left to move through or complete
  constructor (done, undone, text) {
    this.text = text
    this.undone = new Field(undone)
    this.index = 0
    this.done = new Field(done)
  }
  // increase
  // Params
  // none
  // What
  // increases the index in the text by one, moving one character from the undone to the done
  increase () {
    this.index++
    // Move first char from undone to done to increase highlight by one
    var char = this.undone.firstChar()
    this.undone.removeFirstChar()
    this.done.addChar(char)
  }
  // decrease
  // Params
  // none
  // What
  // decreases the index in the text, the opposite of increase
  decrease () {
    this.index--
    // TODO Decrease highlight by one
  }
  // currentChar
  // Params
  // none
  // What
  // returns the currently pending character, found at the index position
  currentChar () {
    return this.text.charAt(this.index)
  }
  mark () {

  }
  reset (newText) {
    this.text = newText
    this.undone.textContent = this.text
    this.done.textContent = ''
    this.index = 0
  }
}
