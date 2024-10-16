const displayGrid = document.querySelector('#Memory-Game')
const img = document.querySelector('.card')
let decks = [0, 1, 2, 3, 4, 5]
let cardOne = ''
let cardTwo = ''
let matchPairsCount = 0
let disableBoard = false

let i = 0
let questionDecks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let arrayOfImages = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png']
arrayOfImages = [...arrayOfImages, ...arrayOfImages]

const hideDecks = [
  'question.png',
  'question.png',
  'question.png',
  'question.png',
  'question.png',
  'question.png',
  'question.png',
  'question.png',
  'question.png',
  'question.png',
  'question.png',
  'question.png',
  'question.png'
]

const init = (event) => {
  arrayOfImages.sort(() => 0.5 - Math.random())
  hidePic()
}

const hidePic = () => {
  questionDecks.forEach((i) => {
    const img = document.createElement('img')
    img.setAttribute('src', hideDecks[i])
    img.setAttribute('data-id', i)
    img.classList.add('card')
    img.style.backgroundColor = '#333'
    img.style.borderRadius = '66px'
    img.style.width = '260px'
    img.style.height = '170px'
    img.addEventListener('click', flipCard)
    displayGrid.appendChild(img)
  })
}

const flipCard = (event) => {
  if (disableBoard) return
  const img = event.target
  const cardId = img.getAttribute('data-id')

  if (img.src.includes(arrayOfImages[cardId])) return

  img.src = arrayOfImages[cardId]

  if (!cardOne) {
    cardOne = img
  } else if (!cardTwo) {
    cardTwo = img
    disableBoard = true
    checkForMatch()
  }
}

const checkForMatch = () => {
  if (cardOne.src === cardTwo.src) {
    cardOne.removeEventListener('click', flipCard)
    cardTwo.removeEventListener('click', flipCard)
    matchPairsCount++
    cardOne = null
    cardTwo = null
    disableBoard = false
  } else {
    cardOne.src = 'question.png'
    cardTwo.src = 'question.png'
    cardOne = null
    cardTwo = null
    disableBoard = false
  }
}

init()
