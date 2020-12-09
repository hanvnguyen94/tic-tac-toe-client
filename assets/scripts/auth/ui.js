'use strict'


const store = require("./../store")

$('.authenticated').hide()

// the ajax function's .then
// will pass this function a response object from the API
const signUpSuccess = function(response) {
  $('#message').text('Sign Up Successfully!')
}

// the ajax function's .catch
// will pass this function an error object
const signUpFailure = function(error) {
  $('message').text('Sign Up Failed with error:: ' + error.message)
}

const signInSuccess = function(response) {
  // $('.unauthenticated').hide()
  $('#message').text('Welcome to the page!')
  // console.log(response.user)
  store.user = response.user
  $('.unauthenticated').hide()
  // show the authenticated options
  $('.authenticated').show()


}

const signInFailure = function(error) {
  $('message').text('Error ' + error.responseJSON.message)
}

const changePasswordSuccess = function() {
  $('#message').text('Change password success!')
}

const changePasswordFailure = function(error) {
  $('#message').text('Change password failed with error ' + error.responseJSON.message)
}

const signOutSuccess = function() {
  $('#message').text('Successfully Signed Out!')


  $('.authenticated').hide()
  $('.unauthenticated').show()
  // VERY IMPORTANT => unstore the user information
  store.user = null


  $('form').trigger('reset')
}


const signOutFailure = function(error) {
  $('#message').text('Failed Sign Out with error ' + error.responseJSON.message)
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