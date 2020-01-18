//Connecting Elements to an ID in html file
var characterAmountNumber = document.getElementById("characterAmountNumber");
var characterAmountRange = document.getElementById("characterAmountRange");
var includeUppercaseE1 = document.getElementById("includeUppercase");
var includeLowercaseE1 = document.getElementById("includeLowercase");
var includeNumbersE1 = document.getElementById("includeNumbers");
var includeSymbolsE1 = document.getElementById("includeSymbols");
var passwordDisplay = document.getElementById("passwordDisplay");

var form = document.getElementById("passwordGeneratorForm");

//Connecting the arrays to the Character Codes
var Lowercase_Char_Codes = arrayFromLowToHigh(65, 90)
var Uppercase_Char_Codes = arrayFromLowToHigh(97, 122)
var Numbers_Char_Codes = arrayFromLowToHigh(48, 57)
var Symbols_Char_Codes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))


//Syncs the Range and Number to match
characterAmountRange.addEventListener('input', syncCharacterAmount);
characterAmountNumber.addEventListener('input', syncCharacterAmount);

//Creates the event listeners for each selection
form.addEventListener('submit', e => {
  e.preventDefault()
  var includeLowercase = includeLowercaseE1.checked
  var includeUppercase = includeUppercaseE1.checked
  var includeNumbers = includeNumbersE1.checked
  var includeSymbols = includeSymbolsE1.checked
  var password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
})

//Creates the function to generate password
function generatePassword(characterAmount, includeLowercase, includeUppercase, includeSymbols, includeNumbers){
  let charCodes = Lowercase_Char_Codes
  if (includeUppercase) charCodes = charCodes.concat(Uppercase_Char_Codes)
  if (includeNumbers) charCodes = charCodes.concat(Numbers_Char_Codes)
  if (includeSymbols) charCodes = charCodes.concat(Symbols_Char_Codes)
  const passwordCharacters = []
  for (let index = 0; index < characterAmount; index++) {
    const characterCode = charCodes[Math.floor(Math.random() * characterAmount)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join("")
}

function arrayFromLowToHigh(low, high){
  const array = []
  for (let i = low ; i <= high; i++) {
    array.push(i)}
}
function syncCharacterAmount(event){
  var value = event.target.value
  characterAmountRange.value = value
  characterAmountNumber.value = value
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
