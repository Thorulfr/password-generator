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
// Function to get user's criteria, validate it, and update criteria object if valid
function getCriteria() {
  var userLength = Math.round(parseFloat(document.getElementById("password-length").value));
  var userLengthValid = false;
  var userLC = document.getElementById("lowercase-chars").checked;
  var userUC = document.getElementById("uppercase-chars").checked;
  var userNC = document.getElementById("numerical-chars").checked;
  var userSC = document.getElementById("special-chars").checked;
  if (userLength > 7 && userLength < 129) {
    userLengthValid = true;
  }

  if (!userLengthValid && !userLC && !userUC && !userNC && !userSC) {
    alert("You must enter a valid password length AND select at least one character type to generate your password.");
    return false;
  } else if (userLengthValid && !userLC && !userUC && !userNC && !userSC) {
    alert("You must select at least one character type to generate your password.");
    return false;
  } else if (!userLengthValid) {
    alert("You must enter a valid password length to generate your password.");
    return false;
  } else {
    userCriteria.passwordLength = userLength;
    userCriteria.lowercaseSelected = userLC;
    userCriteria.uppercaseSelected = userUC;
    userCriteria.numericalSelected = userNC;
    userCriteria.specialSelected = userSC;
  }
  alert("Your criteria have been saved!");
  // formEl.reset();
}

// Function to reset criteria fields
function resetCriteria() {
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