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
  // create the box
  $('.box').empty()
}


const createGameFailure = function(error) {
  $('#message').text('Game create failed ' + error.responseJSON.message)
}

const playTurnSuccess = function(response) {
  store.game = response.game
  console.log(store)
}

const playTurnFailed = function(error) {
  $('#player-display').text('Game create failed ' + error.responseJSON.message)
}

const restartGame = function(event) {
  $('.box').empty()
  $('#player-display').html()
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  playTurnSuccess,
  playTurnFailed,
  restartGame
}