///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");
//var passwordLength = 8;
var password = "";
var type = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*-_";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
  var passwordLength = window.prompt("How many characters would you like in your password?")
  passwordLength = '';

console.log(passwordLength);

  if ((passwordLength <8) && (passwordLength>128)) {
    return;
  }

  

  var characterType = window.prompt("Enter one at a time charecter types needed : upercase, lowercase, numbers, special charecters ")


  password = Math.floor(Math.random() * passwordLength) ;
document.querySelector("#password").innerHTML = password;

}
