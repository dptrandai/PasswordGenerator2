//Connecting Elements to an ID in html file
var characterAmountNumber = document.getElementById("characterAmountNumber");
var characterAmountRange = document.getElementById("characterAmountRange");
var includeUppercaseE1 = document.getElementById("includeUpper");
var includeLowercaseE1 = document.getElementById("includeLower");
var includeNumbersE1 = document.getElementById("includeNumbers");
var includeSymbolsE1 = document.getElementById("includeSymbols");
var passwordDisplay = document.getElementById("passwordDisplay");
var generateBtn = document.getElementById("generate");


//Syncs the Range and Number to match
characterAmountRange.addEventListener('input', syncCharacterAmount);
characterAmountNumber.addEventListener('input', syncCharacterAmount);

function syncCharacterAmount(event){
  var value = event.target.value
  characterAmountRange.value = value
  characterAmountNumber.value = value
}

//Connecting the arrays to the Character Codes
var Lowercase_Char_Codes = arrayFromLowToHigh(65, 90)
var Uppercase_Char_Codes = arrayFromLowToHigh(97, 122);
var Numbers_Char_Codes = arrayFromLowToHigh(48, 57);
var Symbols_Char_Codes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))

function arrayFromLowToHigh(low, high){
  const array = []
  for (let i = low ; i <= high; i++) {
    array.push(i)
  }
    return array;
}




//Creates the event listeners for each selection
generateBtn.addEventListener('click', function(event){
  event.preventDefault()
  var includeLowercase = includeLowercaseE1.checked
  var includeUppercase = includeUppercaseE1.checked
  var includeNumbers = includeNumbersE1.checked
  var includeSymbols = includeSymbolsE1.checked
  var password = generatePassword(characterAmountNumber.value, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
  passwordDisplay.textContent = password
})

//Creates the function to generate password
function generatePassword(characterAmount, includeLowercase, includeUppercase, includeSymbols, includeNumbers){
  var charCodes = [];
  if (includeUppercase) {
    console.log('include uppercase', includeUppercase);
    charCodes = [...charCodes, ...Uppercase_Char_Codes];
  }
  if (includeLowercase) {
    console.log('include lower', includeLowercase);
    charCodes = [...charCodes, ...Lowercase_Char_Codes];
    console.log('lower case char codes', Lowercase_Char_Codes);
  }
  if (includeNumbers) {
    console.log('include numbers', includeNumbers);
    charCodes = [...charCodes, ...Numbers_Char_Codes];
  }
  if (includeSymbols) {
    console.log('include symbols', includeSymbols);
    charCodes = [...charCodes, ...Symbols_Char_Codes];
  }

  var passwordCharacters = [];
  for (let index = 0; index < characterAmount; index++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  console.log(passwordCharacters)
  console.log(charCodes);
  return passwordCharacters.join("");
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}


  
// BONUS EVENT LISTENER
