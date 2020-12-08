'use strict'

const store = require('./../store')
const config = require('./../config')

const createGame = function(data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    // data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
  })
}

module.exports = {
  createGame
}