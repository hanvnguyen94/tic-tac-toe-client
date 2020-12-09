'use strict'

const store = require('./../store')

const createGameSuccess = function(response) {
  // console.log(response.game)
  $('.unauthenticated').hide()
  $('#change-password').hide()
  // show the authenticated options
  $('.authenticated').show()
  $('#message').text('New Game Created')
  // save API response
  //  'store' the game
  // create a new key on the `store` object
  // give that key a value of `response.game`
  store.game = response.game
  console.log(store)

  let gameHtml = `
  <h3>You are X</h3>`
  $('#player-display').html(gameHtml)
}


const createGameFailure = function(error) {
  $('#message').text('Game create failed ' + error.responseJSON.message)
}

// check if user click on empty spot
const playTurn = function(event) {
  let cells = [
    "", "", "",
    "", "", "",
    "", "", "",
  ]
  let currentPlayer = "X"
  const boardPosition = event.target.id
  console.log(boardPosition)
  // check if user click on empty spot
  // display current move on the board
  if ($(this).text() === "") {
    $(this).append(currentPlayer)
    // // add token to board and cells
    // store.user.token = response.user.token
    // console.log(store.user.token)
  } else {
    $('#player-display').html('Invalid Space')
  }

}

const playTurnFailed = function(error) {
  $('#player-display').text('Game create failed ' + error.responseJSON.message)
}

const restartGame = function(event) {
  $('.box').empty()
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  playTurn,
  playTurnFailed,
  restartGame
}