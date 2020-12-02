// program to repeat a string till the number specified.
var readLineSync = require("readline-sync");

function repeatAString() {
    let characters = readLineSync.question("Enter the string to repeat:");
    let number = readLineSync.question("Enter the number of times string must be repeated:");
    number = parseInt(number);
    let repeatedString = "";
    while (number > 0) {
        repeatedString += characters;
        number--;
    }
    console.log(`The result after repeating the ${characters} is: ${repeatedString}.`)
}
repeatAString();