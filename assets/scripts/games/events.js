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

//
// let currentPlayer = "x"
// const onPlayTurn = function(event) {
//   event.preventDefault()
//
//   const boardPosition = event.target.id
//
//   // check if user click on empty spot
//   // display current move on the board
//   if ($(event.target).text() === "") {
//     $(event.target).text(currentPlayer)
//     $('#player-display').text(currentPlayer + "'s turn")
//     // switch to O turn
//     switchPlayers()
//     $('#player-display').text(currentPlayer + "'s turn")
//   } else {
//     $('#player-display').text('Invalid Space')
//   }
//
//
//   // func to switch between two players

//
//   api.updateGame(boardPosition, currentPlayer)
//     .then(ui.playTurnSuccess)
//     .catch(ui.playTurnFailed)
//
// }

// function starts when click on any boxes

let currentPlayer = 'x'
const onPlayTurn = function(event) {
  const boardPosition = event.target.id
  const gameArray = store.game.cells

  function switchPlayers() {
    if (currentPlayer === "x") {
      currentPlayer = "o"
    } else {
      currentPlayer = "x"
    }
  }

  // console.log(event.target.innerHTML)
  if ($(event.target).text() === "") {
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

module.exports = {
  onCreateGame,
  onPlayTurn
}