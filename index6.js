//Random Password Generator

const myPassword = document.getElementById("myPassword");
const generateBtn = document.getElementById("generateBtn");

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
   const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
   const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numberChars = "0123456789";
   const symbolChars = "!@#$%^&*()_+=-";

   let allowedChars = "";
   let password = "";

   allowedChars += includeLowercase ? lowercaseChars : "";
   allowedChars += includeUppercase ? uppercaseChars : "";
   allowedChars += includeNumbers ? numberChars : "";
   allowedChars += includeSymbols ? symbolChars : "";

   if(length <= 0) {
    return `(password length must be at least 1)`;
   }

   if(allowedChars.length === 0) {
    return `(At least one set of characters must be selected)`
   }

   for(let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex]; //string concatenation
   }
   
    return password;
}

const passwordLength = 20;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = false;
const includeSymbols = false;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

generateBtn.onclick = function(){
    myPassword.textContent = `Your new password is: ${password}`;
}

//For changing backgroun color without CSS
//document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

