'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const getFormFields = require('./../../../lib/get-form-fields')

const onCreateGame = function(event) {
  event.preventDefault()
  $('#sign-out').show()
  // reset gameArray
  gameArray = ["", "", "", "", "", "", "", "", ""]
  gameOver = false
  // make sure first starts as X
  turnCount = 0
  // found on stack over flow, enable all the click events
  $('.box').css('pointer-events', 'auto')
  $('.container').show()
  $('#games-display').empty()


  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

// Game starts here
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
  // switch players here
  playerTurn()

  // function starts when click on any empty boxes
  if ($(event.target).text().length === 0) {

    $(event.target).text(currentPlayer)
    const currentValue = $(event.target).text()
    const userMove = 'Valid move'
    let cellClick = $(event.target).html()
    // asign the current player to game array
    gameArray[cellIndex] = currentValue

    // check winner here
    function checkWinner() {
      if (gameArray[cellIndex] === gameArray[0] && gameArray[cellIndex] === gameArray[1] && gameArray[cellIndex] === gameArray[2]) {
        $('#message').text(`${currentValue} is the winner!`)
        gameOver = true
        // disable all the click after determined winner
        $('.box').css('pointer-events', 'none') // => stack over flow saved my life
      } else if (
        gameArray[cellIndex] === gameArray[3] && gameArray[cellIndex] === gameArray[4] && gameArray[cellIndex] === gameArray[5]
      ) {
        $('#message').text(`${currentValue} is the winner!`)
        gameOver = true
        $('.box').css('pointer-events', 'none')
      } else if (
        gameArray[cellIndex] === gameArray[6] && gameArray[cellIndex] === gameArray[7] && gameArray[cellIndex] === gameArray[8]
      ) {
        $('#message').text(`${currentValue} is the winner!`)
        gameOver = true
        $('.box').css('pointer-events', 'none')
      } else if (
        gameArray[cellIndex] === gameArray[0] && gameArray[cellIndex] === gameArray[3] && gameArray[cellIndex] === gameArray[6]
      ) {
        $('#message').text(`${currentValue} is the winner!`)
        gameOver = true
        $('.box').css('pointer-events', 'none')
      } else if (
        gameArray[cellIndex] === gameArray[1] && gameArray[cellIndex] === gameArray[4] && gameArray[cellIndex] === gameArray[7]
      ) {
        $('#message').text(`${currentValue} is the winner!`)
        gameOver = true
        $('.box').css('pointer-events', 'none')
      } else if (
        gameArray[cellIndex] === gameArray[2] && gameArray[cellIndex] === gameArray[5] && gameArray[cellIndex] === gameArray[8]
      ) {
        $('#message').text(`${currentValue} is the winner!`)
        gameOver = true
        $('.box').css('pointer-events', 'none')
      } else if (
        gameArray[cellIndex] === gameArray[0] && gameArray[cellIndex] === gameArray[4] && gameArray[cellIndex] === gameArray[8]
      ) {
        $('#message').text(`${currentValue} is the winner!`)
        gameOver = true
        $('.box').css('pointer-events', 'none')
      } else if (
        gameArray[cellIndex] === gameArray[2] && gameArray[cellIndex] === gameArray[4] && gameArray[cellIndex] === gameArray[6]
      ) {
        $('#message').text(`${currentValue} is the winner!`)
        gameOver = true
        $('.box').css('pointer-events', 'none')
      }
      // check if there is no more empty boxes and game has no winner
      let gameDraw = !gameArray.includes('')
      if (gameDraw) {
        $('#message').text('Game has ended tie!')
        $('.box').on('click', function() {
          $('#message').text('Please start a new game!')
        })
        gameOver = true
      }
    }

    checkWinner(gameArray)
    // update API when we found a winner
    api.updateGame(cellIndex, currentValue, gameOver)
      .then(ui.playTurnSuccess)
      .catch(ui.playTurnFailed)
  } else {
    const userMove = 'You must select an empty space'
    $('#message').text(userMove)
  }
}


const onShowGames = function(event) {
  event.preventDefault()

  api.showGames()
    .then(ui.showGamesSuccess)
    .catch(ui.showGamesFailure)
}


module.exports = {
  onCreateGame,
  onPlayTurn,
  onShowGames
}