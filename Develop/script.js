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

//variables 

var passwordLength = 0
var numbers = false
var capitals = false 
var symbols = false 
var x = 0


// arrays for password generator to select from 

numbersArray = ["1","2","3","4","5","6","7","8","9"]
capitalsArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","'Q","R","S","T","U","V","W","X","Y","Z"]
symbolsArray = ["!","@","#","$","%","^","&","*","?","-"]
lettersArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
passwordArray =[]


// functions 

function passwordCriteria(){
  // ask the user if they want to include numbers
  numbers = confirm("Do you want to include numbers?")
  // ask the user if they want to include Capital letters 
  capitals = confirm("Do you want to include capital letters?")
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

function generatePassword(){
  x = 1
  passwordCriteria();
  passwordLengthForm();
  console.log(numbers)
  console.log(capitals)
  console.log(symbols)
  console.log(x)
  
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// passwordCriteria()
// passwordLengthForm()






