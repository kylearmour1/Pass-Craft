// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword)

  function generatePassword() {
    var passwordLength = prompt("Enter a length of at least 8 characters and no more than 128 characters")
    var includeLowerCase = confirm("Would you like to include lowercase characters in your password?")
    var includeUpperCase = confirm("Would you like to include uppercase characters in your password?")
    var includeNumeric = confirm("Would you like to include numeric characters in your password?")
    var includeSpecial = confirm("Would you like to include special characters (!@#$%^&*) in your password?")

    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please choose a length of at least 8 characters and no more thn 128 characters");
      return;
    }
    if (!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecial) {
      alert("you must choose at least one character to include in your password")
      return;
    }

    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeric = "123456789";
    var special = "!@#$%^&*()`~-_=+[{]}\|;:'?/>.<,";

    var password = "";
    var characterSet = "";

    if (includeLowerCase) {
      characterSet += lowerCase
    }
    if (includeUpperCase) {
      characterSet += upperCase
    }
    if (includeNumeric) {
      characterSet += numeric
    }
    if (includeSpecial) {
      characterSet += special

    }
    
    for (var i = 0; i < passwordLength; i++) {
      password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }
    return password;
  }