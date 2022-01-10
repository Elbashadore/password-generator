// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// arrays for password generator to select from 

var numbersArray = ["1","2","3","4","5","6","7","8","9"]
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","'Q","R","S","T","U","V","W","X","Y","Z"]
var symbolsArray = ["!","@","#","$","%","^","&","*","?","-"]
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var passwordArray =[]

//variables 

var passwordLength = 0
var numbers = false
var upperCase = false 
var symbols = false 
var lowerCase = false
var x = 0
var i = 0






// functions 

function passwordCriteria(){
  // ask the user if they to include lower case letters
  lowerCase = confirm("Do you want to include lower case letters?")
  // ask the user if they want to include Capital letters
  upperCase = confirm("Do you want to include capital letters?")
  // ask the user if they want to include numbers
  numbers = confirm("Do you want to include numbers?")
  // ask the user if they want to include symbols
  symbols = confirm("Do you want to include symbols?")
}


function passwordLengthForm(){
  // ask the user for input on password length
   passwordLength = prompt("How long would you like your password to be?");

   if (passwordLength < 8 || passwordLength > 128 ){
     //tells user invalid selection 
     window.alert("Password length must be a numeric value between 8 and 128. \nPlease try again.");
     passwordLengthForm();
   }
   else return passwordLength;
}

function createPassword (length=passwordLength) {
  while(i < passwordLength){
  var lowerCaseRand = Math.floor(Math.random() * lowerCaseArray.length)
  var upperCaseRand = Math.floor(Math.random() * upperCaseArray.length)
  var numbersRand = Math.floor(Math.random() * numbersArray.length)
  var symbolsRand = Math.floor(Math.random() * symbolsArray.length)
    if (lowerCase === true){
      passwordArray.push(lowerCaseRand)
      console.log(passwordArray)
      
    }

    else {
      console.log("lowercase is false")
    }

      if (upperCase === true){
      passwordArray.push(upperCaseRand)
      }

      else{
      console.log("uppercase is false")
      }

        if (numbers === true){
      passwordArray.push(numbersRand)
        }
        else{
      console.log("numbers is false")
        }

        if (symbols === true){
      passwordArray.push(symbolsRand)
          }
        else {
      console.log("symbols is false")
          }
    i ++
  }
}

// creates password after user clicks button
function generatePassword(){
  x = 1
  passwordCriteria();
  passwordLengthForm();
  createPassword();
  alert(passwordArray.join(""));
  console.log(upperCase)
  console.log(lowerCase)
  console.log(numbers)
  console.log(symbols)
  console.log(x)
  console.log(i)
  console.log(passwordArray)
  console.log(numbersArray)
  
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// passwordCriteria()
// passwordLengthForm()

console.log(passwordArray)
console.log(Math.floor(Math.random() * symbolsArray.length))


console.log( lowerCaseRand = Math.floor(Math.random() * lowerCaseArray.length))




