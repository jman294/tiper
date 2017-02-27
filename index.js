require('font-awesome/css/font-awesome.css')

import ClassicGame from './modules/classicgame'

// ClassicGame variables and setup
let classicGame = new ClassicGame()
let game = classicGame.create('Some new text will pop up here when you start the game')
document.querySelector('#classic-wrapper').appendChild(game)

// Modal stuff
let modal = document.getElementById('classic-info-modal')
let clscBtn = document.querySelector('#classic-instructions i.fa')
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
