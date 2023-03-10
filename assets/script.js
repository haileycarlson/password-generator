///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector('#generate')
//var passwordLength = 8;
var password = ''
var type =
  '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*-_'

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector('#password')
  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener('click', generatePassword)
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
  // Get length of password
  let isNumber = false
  while (isNumber === false) {
    var passwordLength = window.prompt(
      'How many characters would you like in your password?',
    )
    if (passwordLength === null) {
      validSelection = true
      return false
    } else if (isNaN(passwordLength)) {
      window.alert('Must be a number between 8 and 128')
    } else {
      passwordLength = parseInt(passwordLength)
      console.log(passwordLength)
      if (passwordLength < 8 || passwordLength > 128) {
        window.alert('Must be a number between 8 and 128')
      } else {
        isNumber = true
      }
    }
  }

  // Loop to get all charecter types used in developing the password
  // at least one charecter type required
  let someCriteria = false

  // Ask if they want to use uppercase charecters
  let uppercase = ''
  let lowercase = ''
  let numbers = ''
  let special = ''

  while (someCriteria === false) {
    let validSelection = false
    while (validSelection === false) {
      uppercase = window.prompt(
        'Enter "y" if you would like to use uppercase letters. Otherwise press "n".',
      )
      if (uppercase === null) {
        validSelection = true
        return false
      } else if (uppercase === 'y' || uppercase === 'n') {
        validSelection = true
      } else {
        window.alert('You must enter "y" or "n".')
      }
    }

    // Ask if they want to use lowercase charecters
    validSelection = false
    while (validSelection === false) {
      lowercase = window.prompt(
        'Enter "y" if you would like to use lowercase letters. Otherwise press "n".',
        'y',
      )
      if (lowercase === null) {
        validSelection = true
        return false
      } else if (lowercase === 'y' || lowercase === 'n') {
        validSelection = true
      } else {
        window.alert('You must enter "y" or "n".')
      }
    }

    // Ask if they want to use numbers
    validSelection = false
    while (validSelection === false) {
      numbers = window.prompt(
        'Enter "y" if you would like to use numbers. Otherwise press "n".',
        'y',
      )
      if (numbers === null) {
        validSelection = true
        return false
      } else if (numbers === 'y' || numbers === 'n') {
        validSelection = true
      } else {
        window.alert('You must enter "y" or "n".')
      }
    }

    // Ask if they want to use special charecters
    validSelection = false
    while (validSelection === false) {
      special = window.prompt(
        'Enter "y" if you would like to use special charecters. Otherwise press "n".',
        'y',
      )
      if (special === null) {
        validSelection = true
        return false
      } else if (special === 'y' || special === 'n') {
        validSelection = true
      } else {
        window.alert('You must enter "y" or "n".')
      }
    }

    // Check to see if at least one charecter type has been selected
    console.log(uppercase)
    console.log(lowercase)
    console.log(numbers)
    console.log(special)
    if (
      uppercase == 'y' ||
      lowercase == 'y' ||
      numbers == 'y' ||
      special == 'y'
    ) {
      someCriteria = true
    } else {
      window.alert('You need to select some type of characters!')
    }
  }
  // Defines each choice
  let characters = ''
  if (uppercase == 'y') {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  if (lowercase == 'y') {
    characters += 'abcdefghijklmnopqrstuvwxyz'
  }
  if (numbers == 'y') {
    characters += '0123456789'
  }
  if (special == 'y') {
    characters += '!@.?$*'
  }

  password = makePassword(passwordLength, characters)
  document.querySelector('#password').innerHTML = password
}
// Generates password based on choices
function makePassword(length, characters) {
  let result = ''
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}
