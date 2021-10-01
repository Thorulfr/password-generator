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
var formEl = document.querySelector("#criteria-form");
var lowercaseChars = [];
var uppercaseChars = [];
var numericChars = [];
var specialChars = [];
var userCriteria = {};
// END Assignments

// BEGIN Function Declarations
// Function to get user's criteria and return as object
function getCriteria (event) {
  event.preventDefault();
  userCriteria.passwordLength = document.getElementById("password-length").value;
  userCriteria.lowercaseSelected = document.getElementById("lowercase-chars").checked;
  userCriteria.uppercaseSelected = document.getElementById("uppercase-chars").checked;
  userCriteria.numericalSelected = document.getElementById("numerical-chars").checked;
  userCriteria.specialSelected = document.getElementById("special-chars").checked;
  console.log(userCriteria);
}

// Function to reset criteria fields
function resetCriteria(event) {
  event.preventDefault();
  formEl.reset();
}

// Write password to the password display field
function writePassword(userCriteria) {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;
}
// END Function Declarations

// BEGIN Other Logic
// Add event listener to submit-criteria button
submitCriteriaBtn.addEventListener("click", getCriteria);
// Add event listener to reset-criteria button
resetCriteriaBtn.addEventListener("click", resetCriteria);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// END Other Logic