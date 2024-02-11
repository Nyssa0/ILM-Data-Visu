var upBtn = document.querySelector('.up')
var downBtn = document.querySelector('.down')
var cards = document.getElementById('cards_section')
i = 1

downBtn.addEventListener('click', function() {
    if (i < 3) {
      i++
      cards.classList.value = 'cards' + i
    }
})

upBtn.addEventListener('click', function() {
    if (i > 1) {
      i--
      cards.classList.value = 'cards' + i
    }
})