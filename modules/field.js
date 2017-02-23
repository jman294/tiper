// field.js
// What
// A wrapper for elements with ease-of-functions for acting like a FILO structure

export default class {
  constructor (el, defaultText = '') {
    this.el = el
    this.defaultText = defaultText
  }
  addChar (char) {
    if (char === ' ') {
      char = ' '
    }
    this.el.textContent = this.el.textContent + char
  }
  removeChar (char) {
    this.el.textContent = this.el.textContent.slice(0, -1)
    this.safeRemove()
  }
  firstChar () {
    return this.el.textContent.substring(0, 1)
  }
  removeFirstChar () {
    this.el.textContent = this.el.textContent.substr(1)
    this.safeRemove()
  }
  empty () {
    return this.el.textContent.length <= 0
  }
  safeRemove () {
    if (!this.el.textContent.length) {
      this.el.textContent = this.defaultText
    }
  }
}
