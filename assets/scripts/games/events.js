'use strict'

const api = require('./api')
const ui = require('./ui')

const getFormFields = require('./../../../lib/get-form-fields')

const onCreateGame = function(event) {
  event.preventDefault()

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onPlayTurn = function(event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  let currentPlayer = "x"
  const boardPosition = event.target.id
  // check if user click on empty spot
  // display current move on the board
  if ($(this).text() === "") {
    $(this).append(currentPlayer)
    // // add token to board and cells
    // store.user.token = response.user.token
    // console.log(store.user.token)
    // store.user = response.user

  } else {
    $('#player-display').html('Invalid Space')
  }

  api.updateGame(boardPosition, currentPlayer)
    .then(ui.playTurnSuccess)
    .catch(ui.playTurnFailed)
}



module.exports = {
  onCreateGame,
  onPlayTurn
}