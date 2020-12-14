'use strict'

const store = require('./../store')

const createGameSuccess = function(response) {
  $('.unauthenticated').hide()
  $('#change-password').hide()
  // show the authenticated options
  $('.authenticated').show()

  $('#message').text('New Game Created')
  //  'store' the game
  store.game = response.game

  //display the board
  $('.container').show()
  $('#sign-out').show()
  const gameMessage = (`
    <h3>Game Starts As X</h3>`)

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

}

const playTurnFailed = function(error) {
  $('#player-display').text('Can not choose that spot ' + error.responseJSON.message)
}

const showGamesSuccess = function(response) {
  const games = response.games
  const gamesHTML = (`
  <div class="total-games">
    <h4>Total games user ${store.user.email} have played: ${games.length}</h4>
  </div>`)
  $('#games-display').html(gamesHTML)
}

const showGamesFailure = function(error) {
  $('#games-display').html('Oh nooo')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  playTurnSuccess,
  playTurnFailed,
  showGamesSuccess,
  showGamesFailure
}