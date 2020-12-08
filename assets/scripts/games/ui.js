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
  console.log(store.game)
  // const gameHtml = `
  // <h3>${response.game}</h3>
  // `
  //
  // $('#game-display').html(gameHtml)
  // $('#board').html()



}

const createGameFailure = function(error) {
  $('#message').text('Game create failed ' + error.responseJSON.message)
}

module.exports = {
  createGameSuccess,
  createGameFailure
}