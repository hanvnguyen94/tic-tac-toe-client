'use strict'

const store = require('./../store')

const createGameSuccess = function (response) {
  $('.unauthenticated').hide()
  $('#change-password').hide()
  // show the authenticated options
  $('.authenticated').show()
  $('.navbar').show()
  $('#message').text('New Game Created')
  //  'store' the game
  store.game = response.game
  // display the board
  $('.container').show()
  $('#sign-out').show()
  // clear the board
  $('.box').empty()
}

const createGameFailure = function (error) {
  $('#message').text('Game create failed ' + error.responseJSON.message)
}

const playTurnSuccess = function (response) {
  // add token to board and cells
  // game obj from api has owner(token) and cells
  store.game = response.game
}

const playTurnFailed = function (error) {
  $('#message').text('Can not choose that spot ' + error.responseJSON.message)
}

const showGamesSuccess = function (response) {
  const games = response.games
  $('#message').text(`${store.user.email} have played: ${games.length} games`)
  $('.container').hide()
}

const showGamesFailure = function (error) {
  $('#message').html('There is an error occurs ', error)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  playTurnSuccess,
  playTurnFailed,
  showGamesSuccess,
  showGamesFailure
}