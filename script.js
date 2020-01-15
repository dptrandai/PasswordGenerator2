// Assignment Code
var generateBtn = document.querySelector("#generate");

//DOM Elements
const resultE1 = document.getElementById("result");
const lengthE1 = document.getElementById("length");
const lowercaseE1 = document.getElementById("lower");
const uppercaseE1 = document.getElementById("upper");
const number1 = document.getElementById("number");
const symbolE1 = document.getElementById("symbol");
const generateE1 = document.getElementById("#generate");
const clipboardE1 = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandonLower,
  upper: getrandonUpper,
  number: getRandomNumber,
  symbols: getRandomSymbol
};
// Generates event listen
generateE1.addEventListener("click", () ==> {
  const length = lengthE1.value,
  const hasLower = lowercaseE1.checked;
  const hasUpper = uppercaseE1.checked;
  const hasNumber = numberE1.checked;
  const hasSymbol = symbolE1.checked;

  resultE1.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

//Generates password function 
function generatePassword(lower, upper, number, symbol, length)
let generatePassword = "";
const typeCount = [{lower}, {upper}, {number}, {symbol}];

// Generator Functions 

// grabs random lower case
function getRandonLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// grabs random Upper Case
function getrandonUpper(){
  String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//Grabs random Number
function getRandomNumber(){
  return String.fromCharCode(Math.floor(math.random() * 10) + 48);
}

// grabs random special char
function getRandomSymbol(){
  const Symbols = "!@#$%^&*(){}?.<>";
  return Symbols[Math.floor(Math.random() * Symbols.length)];
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
