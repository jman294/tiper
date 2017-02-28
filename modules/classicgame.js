import watch from './inputeventwatcher'
import LoremHipsum from 'lorem-hipsum'
import Timr from 'timrjs'
import Field from './field'
import Indext from './indext'
import * as keycoder from 'keycoder'

export default class {
  constructor () {
    this.PLAYING = 1
    this.PAUSED = 2
    this.FINISHED = 3
    this.RESET = 4

    this.clock = 0
    this.timer = new Timr(0)
    this.running = false
    this.state = this.FINISHED
  }
  create (text) {
    this.message = text

    this.parent = document.createElement('div')
    this.parent.id = 'classic-app'
    this.parent.className = 'border'

    this.error = document.createElement('p')
    this.error.id = 'classic-error'
    this.error.className = 'error white-border'
    this.error.style.display = 'none'

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
    this.time.textContent = '00:00'

    this.prompt = document.createElement('p')
    this.prompt.textContent = 'Ready?'

    this.status = document.createElement('div')
    this.status.id = 'classic-status'

    this.text = document.createElement('p')
    this.text.id = 'classic-text'
    this.text.className = 'fine white-border'

    this.typed = document.createElement('span')
    this.typed.id = 'classic-typed'

    this.untyped = document.createElement('span')
    this.untyped.id = 'classic-untyped'
    this.untyped.textContent = text

    this.index = new Indext(this.typed, this.untyped, text)

    this.errorField = new Field(this.error)
    this.buildParent()
    this.addListeners()
    return this.parent
  }
  buildParent () {
    this.status.appendChild(this.playButton)
    this.status.appendChild(this.repeatButton)
    this.status.appendChild(this.prompt)
    this.status.appendChild(this.time)

    this.text.appendChild(this.typed)
    this.text.appendChild(this.untyped)

    this.parent.appendChild(this.status)
    this.parent.appendChild(this.text)
    this.parent.appendChild(this.error)
  }

  setText (text) {
    this.message = text
    this.untyped.textContent = text
  }
  makeText () {
    return LoremHipsum().replace(/\s+/g, ' ')
  }

  reset () {
    console.log('resetting')
    if (this.state === this.RESET) {
      return
    }
    this.state = this.RESET

    this.setText(this.makeText())
    this.untyped.textContent = this.message
    this.typed.textContent = ''
    this.index.reset(this.message)
    this.errorField.clear()
    this.text.classList.remove('error')
    this.setErrorVisibile(false)
    this.prompt.textContent = 'Type!'
  }
  play () {
    console.log('playing')
    if (!(this.state === this.PAUSED || this.state === this.RESET)) {
      return
    }
    this.state = this.PLAYING

    this.timer.start()
    this.playButton.classList.remove('fa-play')
    this.playButton.classList.add('fa-pause')
    this.untyped.setAttribute('tabindex', '0')
    this.untyped.focus()
  }
  pause () {
    console.log('paused')
    if (!(this.state === this.PLAYING)) {
      return
    }
    this.state = this.PAUSED

    this.prompt.textContent = 'Paused'
    this.playButton.classList.remove('fa-pause')
    this.playButton.classList.add('fa-play')
    this.timer.pause()
    // By removing the 'tabindex' property, the untyped element can not have typing focus
    if (this.untyped.hasAttribute('tabindex')) {
      this.untyped.removeAttribute('tabindex')
    }
  }
  finish () {
    if (!(this.state === this.PLAYING || this.state === this.RESET)) {
      return
    }
    this.state = this.FINISHED
    console.log('finished')

    this.prompt.textContent = 'You finished with a speed of ' + this.wpm() + ' WPM!'
    this.playButton.classList.remove('fa-pause')
    this.playButton.classList.add('fa-play')
    this.timer.stop()
    this.text.classList.remove('error')
    // By removing the 'tabindex' property, the untyped element can not have typing focus
    if (this.untyped.hasAttribute('tabindex')) {
      this.untyped.removeAttribute('tabindex')
    }
    this.untyped.blur()
  }
  addListeners (onEnd) {
    // Click listeners for the buttons
    this.playButton.addEventListener('click', (e) => {
      switch (this.state) {
        case this.FINISHED:
          this.reset()
          this.play()
          break
        case this.PAUSED:
          this.play()
          break
        case this.PLAYING:
          this.pause()
          break
        default:
          break
      }
    })
    this.repeatButton.addEventListener('click', (e) => {
      this.finish()
      this.reset()
      this.play()
    })

    // Enter to start a new game
    window.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        this.finish()
        this.reset()
        this.play()
      }
    })

    // The timer's ticker
    this.timer.ticker((formattedTime, percentDone) => {
      this.currentTime = percentDone
      this.time.textContent = formattedTime
      this.prompt.textContent = this.wpm() + ' WPM'
    })

    // Key watcher
    watch(this.untyped, (e) => {
      this.keyPressed(keycoder.eventToCharacter(e))
    }, (e) => {
      this.deleteLetter()
    })
  }
  keyPressed (char) {
    if (!char) {
      return
    }
    if (char === this.index.currentChar() && this.errorField.isEmpty()) {
      this.setErrorVisibile(false)
      this.index.increase()
      // If we have reached the end
      if (this.index.index === this.message.length) {
        this.finish()
        return
      }
    } else {
      this.setErrorVisibile(true)
      this.text.classList.add('error')
      if (char === ' ') {
        char = '·'
      }
      this.errorField.addChar(char)
    }
  }
  wpm () {
    return Math.round((this.typed.textContent.split(' ').length * 60) / this.currentTime)
  }
  setErrorVisibile (visible) {
    if (visible && this.error.style.display !== 'flex') {
      this.error.style.display = 'flex'
    } else if (!visible && this.error.style.display !== 'none') {
      this.error.style.display = 'none'
    }
  }

  deleteLetter () {
    // Delete char from error only if it has letters in it
    if (!this.errorField.isEmpty()) {
      this.errorField.removeChar()
      if (this.errorField.isEmpty()) {
        this.setErrorVisibile(false)
        this.text.classList.remove('error')
        this.text.classList.add('fine')
      }
    }
  }
}
