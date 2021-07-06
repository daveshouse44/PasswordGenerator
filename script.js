// Assignment Code
var generateBtn = document.querySelector("#generate");
// Variables for password
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberString = "1234567890";
var specialString = "~!@#$%^&*()_-=+;:?";
var charLength;

function generatePassword() {

  // Prompts for character length imput
var charLength = prompt("Please enter the amount of characters you want, between 8 and 128.")


if (isNaN(charLength)){
  alert ("You must enter a number, between 8 and 128.")
  return
}

if (charLength < 8) {
  alert ("Please enter a number 8 or greater.")
  return
}

if (charLength > 128) {
  alert ("Please enter a number 128 or less.")
  return
}

// Additional prompts to confirm what characters to use
if (8 <= charLength <= 128) {
  var lowerCase = confirm("Choose OK to include lowercase letters in password, Cancel for No.")
  var upperCase = confirm("Choose OK to include uppercase letters in password, Cancel for No.")
  var numberChar = confirm("Choose OK to include numbers in password, Cancel for No.")
  var specialChar = confirm("Choose OK to include special characters in password, Cancel for No.")

}

// Alert if no characters are selected
if (!lowerCase && !upperCase && !numberChar && !specialChar) {
  alert ("You must choose OK to at least one type of character, please try again.");
  return
}




var passwordGen = "Completed Password"

  return passwordGen
}//end generate password

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);