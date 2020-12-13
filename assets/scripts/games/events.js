'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')


const getFormFields = require('./../../../lib/get-form-fields')

const onCreateGame = function(event) {
  event.preventDefault()

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

// Game starts here
// function starts when click on any boxes

let currentPlayer = 'X'
let gameOver = false
let turnCount = 0

const playerTurn = function() {
  currentPlayer = 'X'
  turnCount++
  if (turnCount % 2 === 0) {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}

const onPlayTurn = function(event) {
  event.preventDefault()
  const cellIndex = event.target.id
  playerTurn()
  checkWinner()
  if ($(event.target).text().length === 0) {
    $(event.target).text(currentPlayer)
    const currentValue = $(event.target).text()
    const userMove = 'Valid move'
    api.updateGame(cellIndex, currentValue)
      .then(ui.playTurnSuccess)
      .catch(ui.playTurnFailed)
  } else {
    const userMove = 'Invalid move'
  }
  // const boardPosition = event.target.id
  // currentPlayer = "X"
  // if ($(event.target).text() === '') {
  //
  //   $(event.target).text(currentPlayer)
  //   console.log(currentPlayer)
  //   $('#message').text(currentPlayer +
  //     " 's turn")
  //   gameArray.push(currentPlayer)
  //   console.log(gameArray)
  //
  //
  //   // api.updateGame(boardPosition, currentPlayer)
  //   //   .then(ui.playTurnSuccess)
  //   //   .catch(ui.playTurnFailed)
  // } else {
  //   $('#message').text('You must select a valid space')
  // }
}
//
// const newGame = function() {
//   let gameArray = []
// }

// const switchPlayers = function() {
//   if (currentPlayer === 'x') {
//     currentPlayer = 'o'
//     return currentPlayer
//   } else {
//     currentPlayer = 'x'
//     return currentPlayer
//   }


// function checkWin starts here
// make array for win conditions
// compare game array with win conditions array
const winCons = [
  // horizontal win
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //vertical win
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagnal win
  [0, 4, 8],
  [2, 4, 6]
]
//
// let playerTurn = ['x','o','x','o','x','o','x','o','x']
//
// let n = 1
// let click = n + 1 // find index
//
// let firstClick = playerTurn[0]
// const checkWinner = function () {
//   let gameOver = false
//   for(let i = 0; i <= 7; i++) {
//
//   }
// }

let gameArray = ["", "", "", "", "", "", "", "", ""]

const checkWinner = function() {
  for (let i = 0; i <= 7; i++) {
    const winCon = winCons[i] // [0,1,2]
    let firstIndex = gameArray[winCon[0]]
    let secondIndex = gameArray[winCon[1]]
    let thirdIndex = gameArray[winCon[2]]
    if (firstIndex === '' || secondIndex === '' || thirdIndex === '') {
      continue;
    }
    if (firstIndex === secondIndex && secondIndex === thirdIndex) {
      gameOver = true
      break
    }
  }
  // } else {
  //   console.log('continue')
  // }
  //   }
}




// const checkWinner = function(gameBoard) {
//   if (gameArray[0] === gameArray[1] && gameArray[0] === gameArray[2]) {
//     console.log(gameArray[0], gameArray[1])
//     $('#message').text('You win!');
//     gameOver = true
//   } else if (gameArray[3, 4, 5] !== "" && gameArray[3] === gameArray[4] && gameArray[3] === gameArray[5]) {
//     $('#message').text('You win!');
//     gameOver = true
//   } else if (gameArray[6, 7, 8] !== "" && gameArray[6] === gameArray[7] && gameArray[6] === gameArray[8]) {
//     $('#message').text('You win!');
//     gameOver = true
//   } else if (gameArray[0, 3, 6] !== "" && gameArray[0] === gameArray[3] && gameArray[0] === gameArray[6]) {
//     $('#message').text('You win!');
//     gameOver = true
//   } else if (gameArray[1, 4, 7] !== "" && gameArray[1] === gameArray[4] && gameArray[1] === gameArray[7]) {
//     $('#message').text('You win!');
//     gameOver = true
//   } else if (gameArray[2, 5, 8] !== "" && gameArray[2] === gameArray[5] && gameArray[2] === gameArray[8]) {
//     $('#message').text('You win!');
//     gameOver = true
//   } else if (gameArray[0, 4, 8] !== "" && gameArray[0] === gameArray[4] && gameArray[0] === gameArray[8]) {
//     $('#message').text('You win!');
//     gameOver = true
//   } else if (gameArray[2, 4, 6] !== "" && gameArray[2] === gameArray[4] && gameArray[2] === gameArray[6]) {
//     $('#message').text('You win!');
//     gameOver = true
//   } else if (gameArray[0] !== "" && gameArray[1] !== "" && gameArray[2] !== "" && gameArray[3] !== "" && gameArray[4] !== "" && gameArray[5] !== "" && gameArray[6] !== "" && gameArray[7] !== "" && gameArray[8] !== "") {
//     $('#message').text('It\'s a draw!');
//   }
//   console.log(gameOver);
// }

module.exports = {
  onCreateGame,
  // playerTurn,
  onPlayTurn,
}