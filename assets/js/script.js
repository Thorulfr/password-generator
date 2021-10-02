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
// END Assignments

// BEGIN Function Declarations
// Function to get user's criteria, validate it, and update criteria object if valid
function getCriteria() {
  var userCriteria = {};
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
  return userCriteria;
}

// Function to generate password
function generatePassword() {
  var userCriteria = getCriteria();
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
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// END Function Declarations

// BEGIN Other Logic
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// END Other Logic