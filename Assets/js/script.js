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
// Getters
var generateBtn = document.querySelector("#generate");
var submitCriteriaBtn = document.querySelector("#submit-criteria");
var resetCriteriaBtn = document.querySelector("#reset-criteria");
var formEl = document.querySelector("#criteria-form");
// Variable assignments/declarations
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChars = "0123456789";
var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var userCriteria = {
  reset: function() {
    this.passwordLength = 0;
    this.lowercaseSelected = false;
    this.uppercaseSelected = false;
    this.numericalSelected = false;
    this.specialSelected = false;
  }
}
// END Assignments

// BEGIN Function Declarations
// Function to get user's criteria, validate it, and update criteria object if valid
function getCriteria() {
  // Get the user's desired length and, just in case it's a float, round it to the nearest integer
  var userLength = Math.round(parseFloat(document.getElementById("password-length").value));
  // Assume user's desired length is invalid until tested below
  var userLengthValid = false;
  // Determine which boxes the user checked
  var userLC = document.getElementById("lowercase-chars").checked;
  var userUC = document.getElementById("uppercase-chars").checked;
  var userNC = document.getElementById("numerical-chars").checked;
  var userSC = document.getElementById("special-chars").checked;
  // Check if user's desired length is within acceptable parameters
  if (userLength > 7 && userLength < 129) {
    userLengthValid = true;
  }

  // If user's length is invalid AND they haven't selected any characters
  if (!userLengthValid && !userLC && !userUC && !userNC && !userSC) {
    alert("You must enter a valid password length AND select at least one character type to generate your password.");
    return false;
  // If user has entered valid length but not selected any characters
  } else if (userLengthValid && !userLC && !userUC && !userNC && !userSC) {
    alert("You must select at least one character type to generate your password.");
    return false;
  // If user's length is invalid but they have selected characters
  } else if (!userLengthValid) {
    alert("You must enter a valid password length to generate your password.");
    return false;
  // Push the criteria to the criteria object
  } else {
    userCriteria.passwordLength = userLength;
    userCriteria.lowercaseSelected = userLC;
    userCriteria.uppercaseSelected = userUC;
    userCriteria.numericalSelected = userNC;
    userCriteria.specialSelected = userSC;
  }
  
  alert("Your criteria have been saved!");
}

// Function to reset criteria fields
function resetCriteria() {
  formEl.reset();
  userCriteria.reset();
  alert("Your criteria have been reset.");
}

// Function to generate password
function generatePassword() {
  // Create a temporary string that will be used to generate a password based on user's criteria
  var tempString = "";
  var userPassword = "";
  if (userCriteria.lowercaseSelected) {
    tempString += lowercaseChars;
  }

  if (userCriteria.uppercaseSelected) {
    tempString += uppercaseChars;
  }

  if (userCriteria.numericalSelected) {
    tempString += numericalChars;
  }

  if (userCriteria.specialSelected) {
    tempString += specialChars;
  }

  // Generate password using temporary string and user's desired length
  for (var i = 0; i < userCriteria.passwordLength; i++) {
    userPassword += tempString.charAt(Math.floor(Math.random()*tempString.length));
  }
  return userPassword;
}

// Write password to the password display field
function writePassword() {
  debugger;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
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