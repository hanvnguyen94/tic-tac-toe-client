'use strict'

const store = require('./../store')
const config = require('./../config')

const createGame = function(data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    // data: {},
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
  })
}

const updateGame = function(cellIndex, currentValue) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      "game": {
        "cell": {
          "index": cellIndex,
          //currentValue
          "value": currentValue
        },
        "over": false
      }
    }
  })
}

module.exports = {
  createGame,
  updateGame
}