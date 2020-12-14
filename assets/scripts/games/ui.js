'use strict'

const store = require('./../store')

const createGameSuccess = function(response) {
  console.log(response.game)
  $('.unauthenticated').hide()
  $('#change-password').hide()
  // show the authenticated options
  $('.authenticated').show()
  $('#message').text('New Game Created')
  //  'store' the game
  store.game = response.game

  //display the board
  $('.board').show()

  const gameMessage = (`
    <h3>Game Starts At X</h3>`)

  $('#message').html(gameMessage)

  // clear the board
  $('.box').empty()
}
const createGameFailure = function(error) {
  $('#message').text('Game create failed ' + error.responseJSON.message)
}

const playTurnSuccess = function(response) {
  // add token to board and cells
  // game obj from api has owner(token) and cells
  store.game = response.game
  let gameArray = store.game.cells
  console.log(gameArray)
  // function check winner go in here
}

const playTurnFailed = function(error) {
  $('#player-display').text('Can not choose that spot ' + error.responseJSON.message)
}


module.exports = {
  createGameSuccess,
  createGameFailure,
  playTurnSuccess,
  playTurnFailed,
}