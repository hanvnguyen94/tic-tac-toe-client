'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')


const getFormFields = require('./../../../lib/get-form-fields')

const onCreateGame = function(event) {
  event.preventDefault()

  // reset gameArray
  gameArray = ["", "", "", "", "", "", "", "", ""]
  gameOver = false
  // make sure first starts as X
  turnCount = 0

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

// Game starts here
// function starts when click on any boxes

let currentPlayer = 'X'
let gameArray = ["", "", "", "", "", "", "", "", ""]
let gameOver = false
let turnCount = 0

const playerTurn = function() {
  currentPlayer = 'X'
  turnCount++
  // hence odd number is X, even number is O
  if (turnCount % 2 === 0) {
    currentPlayer = 'O'
    $('#message').text("It's your turn, X")
  } else {
    currentPlayer = 'X'
    $('#message').text("It's your turn, O")
  }

}

const onPlayTurn = function(event) {
  event.preventDefault()
  let cellIndex = event.target.id

  console.log(cellIndex)

  playerTurn()


  if ($(event.target).text().length === 0) {

    $(event.target).text(currentPlayer)
    const currentValue = $(event.target).text()
    const userMove = 'Valid move'
    let cellClick = $(event.target).html()
    console.log(cellClick)

    gameArray[cellIndex] = currentValue
    console.log(gameArray)

    // check winner here
    function checkWinner() {
      // check if the board is full
      if (gameArray[cellIndex] === gameArray[0] && gameArray[cellIndex] === gameArray[1] && gameArray[cellIndex] === gameArray[2]) {
        $('#message').text(`You are the winner ${currentValue}`)
      } else if (
        gameArray[cellIndex] === gameArray[3] && gameArray[cellIndex] === gameArray[4] && gameArray[cellIndex] === gameArray[5]
      ) {
        $('#message').text(`You are the winner ${currentValue}`)
      } else if (
        gameArray[cellIndex] === gameArray[6] && gameArray[cellIndex] === gameArray[7] && gameArray[cellIndex] === gameArray[8]
      ) {
        $('#message').text(`You are the winner ${currentValue}`)
      } else if (
        gameArray[cellIndex] === gameArray[0] && gameArray[cellIndex] === gameArray[3] && gameArray[cellIndex] === gameArray[6]
      ) {
        $('#message').text(`You are the winner ${currentValue}`)
      } else if (
        gameArray[cellIndex] === gameArray[1] && gameArray[cellIndex] === gameArray[4] && gameArray[cellIndex] === gameArray[7]
      ) {
        $('#message').text(`You are the winner ${currentValue}`)
      } else if (
        gameArray[cellIndex] === gameArray[2] && gameArray[cellIndex] === gameArray[5] && gameArray[cellIndex] === gameArray[8]
      ) {
        $('#message').text(`You are the winner ${currentValue}`)
      } else if (
        gameArray[cellIndex] === gameArray[0] && gameArray[cellIndex] === gameArray[4] && gameArray[cellIndex] === gameArray[8]
      ) {
        $('#message').text(`You are the winner ${currentValue}`)
      } else if (
        gameArray[cellIndex] === gameArray[2] && gameArray[cellIndex] === gameArray[4] && gameArray[cellIndex] === gameArray[6]
      ) {
        $('#message').text(`You are the winner ${currentValue}`)
      }
      let gameDraw = !gameArray.includes('')
      if (gameDraw) {
        $('#message').text('Game has ended tie!')
        $('.box').on('click', function() {
          $('#message').text('Please start a new game!')
        })
        gameOver = true
        return
      }
    }

    checkWinner(gameArray)

    //later on move to ui for display winner
    // $('#message').text(`Congratulations!!! ${currentPlayer} is the winner!`)
    api.updateGame(cellIndex, currentValue)
      .then(ui.playTurnSuccess)
      .catch(ui.playTurnFailed)

  } else {
    const userMove = 'You must select an empty space'
    $('#message').text(userMove)
  }


}

// function checkWin starts here
// make array for win conditions
// compare game array with win conditions array

const winCons = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]



module.exports = {
  onCreateGame,
  onPlayTurn
}