import watch from './inputeventwatcher'
import Timr from 'timrjs'
import Field from './field'
import Indext from './indext'
import * as keycoder from 'keycoder'
require('../styles/classicgamestyle.css')
require('../font-awesome/css/font-awesome.min.css')

export default class {
  constructor () {
    this.clock = 0
    this.timer = new Timr(0)
    this.running = false
  }
  create (text) {

    this.message = text 

    this.parent = document.createElement('div')
    this.parent.id = 'classic-app'
    this.parent.className = 'border'
    
    this.error = document.createElement('p')
    this.error.id = 'classic-error'
    this.error.className = 'error white-border'

    this.playButton = document.createElement('i')
    this.playButton.id = 'classic-play-button'
    this.playButton.className = 'underline-magic play-button fa fa-play'
    this.playButton.setAttribute('aria-hidden', 'true')
    this.playButton.setAttribute('title', 'Play the game')

    this.repeatButton = document.createElement('i')
    this.repeatButton.id = 'classic-repeat-button'
    this.repeatButton.className = 'underline-magic play-button fa fa-repeat'
    this.repeatButton.setAttribute('aria-hidden', 'true')
    this.repeatButton.setAttribute('title', 'Restart')
    
    this.time = document.createElement('p')
    this.time.id = 'classic-clock'
    this.time.textContent = '0:00'

    this.prompt = document.createElement('p')
    this.prompt.id = 'classic-go'
    this.prompt.textContent = 'Ready?'

    this.status = document.createElement('div')
    this.status.id = 'classic-status'

    this.textBlock = document.createElement('div')
    this.textBlock.id = 'classic-text-block'
    
    this.errorField = new Field(this.error)
    this.buildParent() 
    this.addListeners()
    return this.parent
  }
  buildParent () {
    while (this.parent.firstChild) {
      this.parent.removeChild(this.parent.firstChild)
    }
    this.text = this.createText(this.message)
    this.textBlock.appendChild(this.text)

    this.status.appendChild(this.playButton)
    this.status.appendChild(this.repeatButton)
    this.status.appendChild(this.prompt)
    this.status.appendChild(this.time)

    this.parent.appendChild(this.status)
    this.parent.appendChild(this.textBlock)
    this.parent.appendChild(this.error)
  }
  createText (message) {
    let text = document.createElement('p')
    text.id = 'classic-text'
    text.className = 'fine white-border'
    this.typed = document.createElement('span')
    this.typed.id = 'classic-typed'
    this.untyped = document.createElement('span')
    this.untyped.id = 'classic-untyped'
    this.untyped.setAttribute('tabindex', '0')
    this.untyped.textContent = message
    this.index = new Indext(this.typed, this.untyped, message)
    text.appendChild(this.typed)
    text.appendChild(this.untyped)
    return text
  }
  setText (text) {
    this.message = text
    this.untyped.textContent = text
  }
  setFlash (bool) {
    if (bool) {
      this.backgroundInterval = setInterval(() => {
        this.text.classList.toggle('blue')
      }, 400)
    } else {
      clearInterval(this.backgroundInterval)
      this.text.classList.remove('blue')
    }
  }
  stop () {
    this.running = false
    this.timer.stop()
    this.ended = true
    this.playButton.classList.remove('fa-pause')
    this.playButton.classList.add('fa-play')
    this.errorField.el.textContent = ''
    this.text.classList.remove('error')
    // By removing the 'tabindex' property, the untyped element can not have typing focus
    if (this.untyped.hasAttribute('tabindex')) {
      this.untyped.removeAttribute('tabindex')
    }
  }
  pause () {
    this.prompt.textContent = 'Paused'
    this.playButton.classList.remove('fa-pause')
    this.playButton.classList.add('fa-play')
    this.timer.pause()
    // By removing the 'tabindex' property, the untyped element can not have typing focus
    if (this.untyped.hasAttribute('tabindex')) {
      this.untyped.removeAttribute('tabindex')
    }
  }
  start () {
    this.prompt.textContent = 'Type!'
    this.playButton.classList.remove('fa-play')
    this.playButton.classList.add('fa-pause')
    this.untyped.textContent = this.message
    this.typed.textContent = ''
    this.index.reset(this.message)
    this.running = true
    this.timer.start()
    this.untyped.setAttribute('tabindex', '0')
    this.untyped.focus()
  }
  resume () {
    this.prompt.textContent = 'Go'
    this.playButton.classList.remove('fa-play')
    this.playButton.classList.add('fa-pause')
    this.timer.start()
    this.untyped.setAttribute('tabindex', '0')
    this.untyped.focus()
  }
  restart () {
    this.stop()
    this.start()
  }
  addListeners (onEnd) {
    this.timer.ticker((formattedTime, percentDone) => {
      this.currentTime = percentDone
      this.time.textContent = formattedTime
      this.prompt.textContent = Math.round((this.typed.textContent.split(' ').length*60) /this.currentTime)+ ' WPM'
      console.log('time')
    })
    watch(this.untyped, (e) => {
      // Clear the flashing background once typing starts
      this.setFlash(false)
      let char = keycoder.eventToCharacter(e)
      console.log(char)
      if (char === this.index.currentChar() && this.errorField.empty()) {
        console.log('correct')
        this.index.increase()
        // If we have reached the end
        if (this.index.index === this.message.length) {
            console.log( this.message.split(' ').length )
            this.prompt.textContent = 'Done! ' + Math.round((this.message.split(' ').length*60) /this.currentTime)+ ' WPM'
          this.stop()
          console.log('end')
          return
        }
      } else {
        this.text.classList.add('error')
        if (char === ' ') {
          char = '·'
        }
        this.errorField.addChar(char)
        console.log('incorrect')
      }

    }, (e) => {
      this.deleteLetter()
    })
  }
  deleteLetter () {
    // Delete char from error only if it has letters in it
    if (!this.errorField.empty()) {
      this.errorField.removeChar()
      if (this.errorField.empty()) {
        this.text.classList.remove('error')
        this.text.classList.add('fine')
      }
    }
  }
}
