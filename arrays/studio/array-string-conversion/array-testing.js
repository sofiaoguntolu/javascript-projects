let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//2) 
function reverseCommas(str) {
	//TODO: 1. create and instantiate your variables.
	let check = str.includes(',');
	let output = str;
	//TODO: 2. write the code required for this step
	if (check){
		let reverse = output.split(',');
		reverse.reverse();
		output = reverse.join(',');
	}
	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}

//3)
function semiDash(str) {
	let check = str.includes(';');
	let output = str;
//TODO: write the code required for this step
	if (check){
		let alphabetical = output.split(';');
		alphabetical.sort();
		output = alphabetical.join('-');
	}
  
	return output;
}

//4)
function reverseSpaces(str) {
	let check = str.includes(' ');
	let output = str;
  //TODO: write the code required for this step
	if (check){
		reverseAlphabetized = str.split(' ');
		reverseAlphabetized.sort().reverse();
		output = reverseAlphabetized.join(' ');
	}
	return output;
}

//5)
function commaSpace(str) {
	let check = str.includes(", ");
	let output = str;
	//TODO: write the code required for this step
	if (check){
		let reverse = str.split(', ');
		reverse.reverse();
		output = reverse.join(',');
	}	
	return output;
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
