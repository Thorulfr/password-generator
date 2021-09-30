/* PSEUDOCODE
1. User clicks button, triggering writePassword()
2. writePassword() calls passWordPrompts()
3. passwordPrompts() prompts user for the following criteria
  a. Password length (between at 8 and 128 characters, inclusive)
  b. Included character types (lowercase, uppercase, numeric, special)
    i. Special characters are:  !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
4. Each prompt validates responses; if no valid response given, user is asked to try again
  a. At least one character type must be selected
5. Each prompt response stored as values in object (probably as true/false)
6. passwordPrompts() returns object, passes to generatePassword()
7. generatePassword() creates password and returns to user by setting text field on page to generated password */

// BEGIN Assignments
var generateBtn = document.querySelector("#generate");
// END Assignments

// BEGIN Function Declarations
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// END Function Declarations

// BEGIN Other Logic
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// END Other Logic