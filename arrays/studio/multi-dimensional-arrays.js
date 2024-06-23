let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";
const input = require('readline-sync');

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArray = food.split(',');
let equipmentArray = equipment.split(',');
let petsArray = pets.split(',');
let sleepAidsArray = sleepAids.split(',');
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodArray, equipmentArray, petsArray, sleepAidsArray];
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let query = Number(input.prompt("Select a cabinet (0-3) in the cargoHold. "));
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (query < 0 || query > 3){
    console.log("ERROR: This cabinet does not exist.");
} else{
    console.log(`This cabinet includes: ${cargoHold[query]}.`);
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let query2 = Number(input.prompt("Select a cabinet (0-3) in the cargoHold. "));
let query3 = Number(input.prompt("Select an item in the cabinet. "));
if (query2 < 0 || query2 > 3){
    console.log("ERROR: This cabinet does not exist.");
} else{
    if (!cargoHold[query2].includes(query3)){
        console.log(`Cabinet ${query2} DOES NOT contain ${query3}.`);
    } else{
        console.log(`Cabinet ${query2} DOES contain ${query3}.`);
    }
}