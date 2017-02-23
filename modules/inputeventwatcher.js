export default function watch (inputEl, keyPress, onDelete) {
  inputEl.addEventListener('keypress', function onKeyPress (e) {
    e.preventDefault()
    keyPress(e)
  })
  inputEl.addEventListener('keydown', function onKeyDown (e) {
    // Only prevents backspace and delete so the events can fire the keypressed event
    if (e.keyCode === 8 || e.keyCode === 46) {
      onDelete(e)
      e.preventDefault()
    }
  })
}
