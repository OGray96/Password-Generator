// Assignment code here

var specialCharacters = "!@#$%%^&*()<>?";

var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

var upperCaseLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numbers = "1234567890";

var characterSet=""

var mustUse=""

var clientPassword="";


var generatePassword = function(){
  var userChoiceLength = window.prompt("Please input how long you would like your password to be? Please note that a password must be a length between 8-128 characters", "Enter number");



  //Resetting the password and must use list so it is blank for every password generation
  clientPassword="";
  mustUse="";

  //ending function if user hits cancel in first window and leaving a message in the window for user to read
  if(userChoiceLength==null){
    return clientPassword="User ended application, please click on the button below to generate your password!";
  }


//If the password is less than 8 characters
  if(userChoiceLength<8){
    window.alert("It appears you selected a password length less than 8 characters, please enter a number between 8-128 characters");
    return generatePassword();
  } 
//If the password is greater than 128 characters
if (userChoiceLength>128){
    window.alert("It appears you selected a password length greater than 128 characters, please enter a number between 8-128 characters");
    return generatePassword();
  }




//Checks to see if the user choice was a number

if(isNaN(userChoiceLength)){
  alert("Oops! Looks like you have inputed something other than a number! Please try again");
  return generatePassword();
}

//Correct password length continued - checking length of character

console.log(userChoiceLength);

//selection of whether or not to include special characters

var specialCharactersChoice = window.confirm("Would you like special characters in your password? Please select confirm to include them or cancel to not include them");
console.log(specialCharactersChoice);

//selection of whether or not to include upper case characters

var UpperCaseCharactersChoice = window.confirm("Would you like upper case characters in your password? Please select confirm to include them or cancel to not include them");

//selection of lowercase characters

var LowerCaseCharactersChoice = window.confirm("Would you like lower case characters in your password? Please select confirm to include them or cancel to not include them");

//selection of numbers

var NumbersCharactersChoice = window.confirm("Would you like numbers in your password? Please select confirm to include them or cancel to not include them");

//Making sure that a selection is chosen

if(!specialCharactersChoice && !UpperCaseCharactersChoice && !LowerCaseCharactersChoice && !NumbersCharactersChoice){
  alert("You must at least choose 1 character type!");
  return generatePassword()
}
//creating selection of characters based on user input
//Also have to create a seperate list of choices to gurantee that a users choices are actually reflected in thier password

if(specialCharactersChoice){
  characterSet += specialCharacters;
  mustUse += specialCharacters.charAt(Math.floor(Math.random()*specialCharacters.length));
}


if(UpperCaseCharactersChoice){
  characterSet += upperCaseLetters;
  mustUse += upperCaseLetters.charAt(Math.floor(Math.random()*upperCaseLetters.length));
}

if(LowerCaseCharactersChoice){
  characterSet += lowerCaseLetters;
  mustUse += lowerCaseLetters.charAt(Math.floor(Math.random()*lowerCaseLetters.length));
}

if(NumbersCharactersChoice){
  characterSet += numbers;
  mustUse += numbers.charAt(Math.floor(Math.random()*numbers.length));
}

//printing to make sure that mustuse list contains only one character each of the users choices

console.log(mustUse);

//Running a for loop to randomly assign characters from the character set based on the length of characters that the user presrcribed

for(var i=0; i < userChoiceLength; i++){
  clientPassword += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
}

//Running a for loop to remove the number of characters from the password based on the amount of choices that the user has chosen

for(var i=0; i< mustUse.length; i++){
  clientPassword=clientPassword.slice(0,clientPassword.length-1);
  console.log(clientPassword);
}

//Concatinating both strings together to ensure that the password has the characters that the user has chosen

clientPassword = clientPassword.concat(mustUse);

return clientPassword;

}








// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
