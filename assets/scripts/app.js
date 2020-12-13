'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events.js')

const gameEvents = require('./games/events')

const ui = require('./games/ui')
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
  $('#start-game').on('click', gameEvents.onCreateGame)

  // $('.box').on('click', ui.playTurn)
  $('.box').on('click', gameEvents.onPlayTurn)
  $('#restart-game').on('click', ui.restartGame)
})