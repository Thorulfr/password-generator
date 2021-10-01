/* PSEUDOCODE
1. User clicks button, triggering writePassword()
2. writePassword() calls getCriteria()
3. getCriteria() prompts user for the following criteria
  a. Password length (between at 8 and 128 characters, inclusive)
  b. Included character types (lowercase, uppercase, numeric, special)
    i. Special characters are:  !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
4. Each prompt validates responses; if no valid response given, user is asked to try again
  a. At least one character type must be selected
5. Each prompt response stored as values in object (probably as true/false)
6. getCriteria() returns object, passes to generatePassword()
7. generatePassword() creates password and returns to user by setting text field on page to generated password */

// BEGIN Assignments
var generateBtn = document.querySelector("#generate");
var submitCriteriaBtn = document.querySelector("#submit-criteria");
var resetCriteriaBtn = document.querySelector("#reset-criteria");
var lowercaseChars = [];
var uppercaseChars = [];
var numericChars = [];
var specialChars = [];
// END Assignments

// BEGIN Function Declarations
function getCriteria () {
  console.log("Code location indicator");
}


// Write password to the #password input
function writePassword() {
  getCriteria();
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;
}
// END Function Declarations

// BEGIN Other Logic
// Add event listerner to 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// END Other Logic