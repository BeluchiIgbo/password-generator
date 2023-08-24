// Assignment code here












  // confirm with user on their optional choices in characters.
  var lowerCase = confirm(
    "Add a lowercase character to generated password?"
  );

  var upperCase = confirm(
    "Add an uppercase character to generated password?"
  );

  var number = confirm(
    "Add a number character to generated password?"
  );

  var symbol = confirm(
    "Add an symbol character to generated password?"
  );



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
