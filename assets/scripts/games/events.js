'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')


const getFormFields = require('./../../../lib/get-form-fields')

const onCreateGame = function(event) {
  event.preventDefault()

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

// Game starts here
// function starts when click on any boxes

let currentPlayer = 'x'
const onPlayTurn = function(event) {
  const boardPosition = event.target.id
  const gameBoard = store.game.cells

  function switchPlayers() {
    if (currentPlayer === 'x') {
      currentPlayer = 'o'
    } else {
      currentPlayer = 'x'
    }
  }

  if ($(event.target).text() === '') {
    console.log(currentPlayer)
    $(event.target).text(currentPlayer)
    $('#player-display').text(currentPlayer + "'s turn")
    api.updateGame(boardPosition, currentPlayer)
      .then(ui.playTurnSuccess)
      .catch(ui.playTurnFailed)
    // switch x to o
    switchPlayers()

  } else {
    $('#player-display').text('You must choose a valid space')
  }

}

// function checkWin starts here
// make array for win conditions
// compare game array with win conditions array
const gameArray = ["", "", "",
  "", "", "",
  "", "", ""
]
const winCons = [
  // horizontal win
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //vertical win
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagnal win
  [0, 4, 8],
  [2, 4, 6]
]

const checkWin = function(gameBoard) {
  if (gameArray[0] === gameArray[1] && gameArray[0] === gameArray[2]) {
    console.log('winner top row')
  } else if (gameArray[3] === gameArray[4] && gameArray[3] === gameArray[5]) {
    console.log('winner middle row')
  } else if (gameArray[6] === gameArray[7] && gameArray[6] === gameArray[8]) {
    console.log('winner last row')
  } else if (gameArray[0] === gameArray[3] && gameArray[0] === gameArray[6]) {
    console.log('winner left column')
  } else if (gameArray[1] === gameArray[4] && gameArray[1] === gameArray[7]) {
    console.log('winner middle column')
  } else if (gameArray[2] === gameArray[5] && gameArray[2] === gameArray[8]) {
    console.log('winner right column')
  } else if (gameArray[0] === gameArray[4] && gameArray[0] === gameArray[8]) {
    console.log('winner left diagnal')
  } else if (gameArray[2] === gameArray[4] && gameArray[2] === gameArray[6]) {
    console.log('winner right diagnal')
  } else {
    // game continue (maybe draw)
    console.log('huh?')
  }
}

module.exports = {
  onCreateGame,
  onPlayTurn,
  checkWin
}