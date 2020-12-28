'use strict'

const store = require('./../store')

$('.authenticated').hide()

// the ajax function's .then
// will pass this function a response object from the API
const signUpSuccess = function (response) {
  $('#message').text('Sign Up Successfully!')
  $('form').trigger('reset')
}

// the ajax function's .catch
// will pass this function an error object
const signUpFailure = function (error) {
  $('#message').text('Failed To Sign Up ', error)
  $('form').trigger('reset')
}

const signInSuccess = function (response) {
  // save user information to use later on
  store.user = response.user
  $('#message').text(`Welcome Back, ${store.user.email}!`)
  $('.authenticated').show()
  $('.unauthenticated').hide()
  $('.container').hide()
  // show the authenticated options
  $('#change-password').show()
  $('#sign-out').show()
}

const signInFailure = function (error) {
  $('#message').text(error.responseJSON.message)
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#message').text('Updated New Password')
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#message').text('Failed to change password ' + error.responseJSON.message)
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#message').text('Sign In To Start A New Game!')

  $('.authenticated').hide()
  $('.unauthenticated').show()
  // VERY IMPORTANT => unstore the user information
  store.user = null
  $('form').trigger('reset')
}

const signOutFailure = function (error) {
  $('#message').text('Failed Sign Out ' + error.responseJSON.message)
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}