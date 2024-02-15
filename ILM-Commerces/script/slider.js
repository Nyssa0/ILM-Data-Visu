let upBtn = document.querySelector('.up')
let downBtn = document.querySelector('.down')
let cards = document.getElementById('cards_section')
let i = 1

    if (document.querySelector('.page--commerces')) {
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
    }
