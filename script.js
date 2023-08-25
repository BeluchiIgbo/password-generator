// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
// creating passwords variables in four arrays:
//lower case alphabet

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
//uppercase alphabet
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
//Special symbols
var symbol = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
];
//numbers
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];




  // confirm with user on their optional choices in characters.
  function generatePassword() {
  var password = '';
  var allchar = '';


  var confirmlowerCase = confirm(
    "Add a lowercase character to generated password?"
  );

  var confirmupperCase = confirm(
    "Add an uppercase character to generated password?"
  );

  var confirmnumber = confirm(
    "Add a number character to generated password?"
  );

  var confirmsymbol = confirm(
    "Add an symbol character to generated password?"
  );

  if (
    confirmlowerCase === false &&
    confirmupperCase === false &&
    confirmsymbol === false &&
    confirmnumber=== false
  ) {
    alert("Pick a Character Type!");
    return generatePassword();
  }

  if (confirmlowerCase) {
    allchar = allchar.concat(lowerCase);
  }
  if (confirmupperCase) {
    allchar = allchar.concat(upperCase);
  }
  if (confirmnumber) {
    allchar = allchar.concat(number);
  }
  if (confirmsymbol) {
    allchar = allchar.concat(symbol);
  }


 
  var length = parseInt(
    window.prompt("Choose between 8 and 128 characters"));
  
  if (isNaN(length) || (Length < 8 || Length > 128)) {
    alert("Invalid number")
    return null;
  }


  for (var i = 0; i < length; i++) {
    password =
      password + allchar[Math.floor(Math.random() * allchar.length)];
  }
  console.log(password);
  return password;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}





  
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
