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

const updateGame = function(cellIndex, currentValue, gameOver) {
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
        "over": gameOver
      }
    }
  })
}

const showGames = function() {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteGames = function(data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.games._id,
    method: 'DELETE'
  })
}

module.exports = {
  createGame,
  updateGame,
  showGames
}