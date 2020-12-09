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
  api.playTurn(data)
    .then(ui.playTurn)
    .catch(ui.playTurnFailed)
}


module.exports = {
  onCreateGame,
  onPlayTurn
}