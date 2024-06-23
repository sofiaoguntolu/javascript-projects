const input = require('readline-sync');
let str = "LaunchCode";
let numberOfLetters = Number(input.question("How many letters should we modify? "));

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
if (numberOfLetters > str.length){
    numberOfLetters = 3;
    console.log("Your request was too big.");
} 
let newStr = str.slice(0, numberOfLetters);
let newStr1 = str.slice(numberOfLetters, 9);

let pigLatinStr = newStr1 + newStr;
console.log(newStr);
console.log(pigLatinStr);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`We're in ${str}, but in PigLatin we call it ${pigLatinStr} `);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
//   