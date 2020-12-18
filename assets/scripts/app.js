'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events.js')

const gameEvents = require('./games/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('.board').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  // start new game
  $('.box').on('click', gameEvents.onPlayTurn)

  $('#start-game').on('click', gameEvents.onCreateGame)

  // show games that played
  $('#add-games').on('click', gameEvents.onShowGames)
})
