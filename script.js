//Connecting Elements to an ID in html file
const characterAmountNumber = document.getElementById("#characterAmountNumber");
const characterAmountRange = document.getElementById("#characterAmountRange");
const includeUppercaseE1 = document.getElementById("#includeUppercase");
const includeLowercaseE1 = document.getElementById("#includeLowercase");
const includeNumbersE1 = document.getElementById("includeNumbers");
const includeSymbolsE1 = document.getElementById("#includeSymbols");
const passwordDisplay = document.getElementById("#passwordDisplay");

const form = document.getElementById("#passwordGeneratorForm");

//Connecting the arrays to the Character Codes
const Lowercase_Char_Codes = arrayFromLowToHigh(65, 90)
const Uppercase_Char_Codes = arrayFromLowToHigh(97, 122)
const Numbers_Char_Codes = arrayFromLowToHigh(48, 57)
const Symbols_Char_Codes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))


//Syncs the Range and Number to match
characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)

//Creates the event listeners for each selection
form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeLowercase = includeLowercaseE1.checked
  const includeUppercase = includeUppercaseE1.checked
  const includeNumbers = includeNumbersE1.checked
  const includeSymbols = includeSymbolsE1.checked
  const password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
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
  const value = event.target.value
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
