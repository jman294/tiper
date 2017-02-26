require('./styles/keyappstyle.css')
require('font-awesome/css/font-awesome.css')

import ClassicGame from './modules/classicgame'

// ClassicGame variables and setup
let classicGame = new ClassicGame()
let game = classicGame.create('Some new text will pop up here when you start the game')
document.querySelector('#classic-wrapper').appendChild(game)

let playButton = document.querySelector('#classic-play-button')
let restartButton = document.querySelector('#classic-repeat-button')

// Click listeners
playButton.addEventListener('click', (e) => {
  if (!classicGame.running) {
    classicGame.setText(classicGame.makeText())
    classicGame.start()
    return
  }
  if (playButton.className.includes('fa-play')) {
    classicGame.resume()
  } else {
    classicGame.pause()
  }
})
restartButton.addEventListener('click', (e) => {
  classicGame.setText(classicGame.makeText())
  classicGame.restart()
})

// Modal stuff
let modal = document.getElementById('classic-info-modal')
let clscBtn = document.getElementById('classic-question-circle')
let close = document.getElementsByClassName('close')[0]
close.addEventListener('click', (ev) => {
  modal.style.display = 'none'
})
clscBtn.addEventListener('click', (ev) => {
  modal.style.display = 'block'
}, false)
window.addEventListener('click', (ev) => {
  if (ev.target === modal) {
    modal.style.display = 'none'
  }
})
