// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  // ask questions for password
  var characterTotal = prompt("How many characters would you like your password to be? MUST BE 8-128 characters")
while((characterTotal<8) || (characterTotal > 128) || (isNaN (characterTotal)=== true)){
  alert("MUST BE 8-128 CHARACTERS")
  characterTotal=prompt("How many characters would you like your password to be? MUST BE 8-128 characters")
}
  var pickLowerCase = confirm("Do you want to use lower case characters?")

  var pickUpperCase = confirm("Do you want to use upper case characters?")

  var pickSpecialCharacters = confirm("Do you want to use special characters?")

  var pickNumbers = confirm("Do you want to use numbers?")

  // add different variables for choices

  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789"
  var specialCharacters = "!@#$%^&*()"
  var charBank = ""
  var newPassword = ""
// if statements to hold characters and add to bank

if (pickLowerCase === true) {
  charBank = charBank.concat(lowerCase)
}
if (pickUpperCase === true) {
  charBank = charBank.concat(upperCase)
}
if (pickSpecialCharacters === true) {
  charBank = charBank.concat(specialCharacters)
}
if (pickNumbers === true) {
  charBank = charBank.concat(numbers)
}


// make functions that randomizes bank
function randomize(max){
  return [Math.floor(Math.random() * max)]
}

// loop through character bank then randomize and return to user
for (var i=0; i<characterTotal; i++){
  newPassword= newPassword.concat(charBank.charAt(randomize(charBank.length-1)))
}
return newPassword

}


// // Add event listener to generate button
