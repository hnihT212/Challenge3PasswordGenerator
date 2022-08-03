// Assignment code here
function charType(){
  var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  function charType(){
    var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

