// program to find the sum of all the digits occur in string.
var readLineSync = require('readline-sync');

function sumOfDigitsInString() {
    var character = readLineSync.question("Please enter the string both characters and numbers:")
    let sum = 0;
    for (let i = 0; i < character.length; i++) {
        if (/[0-9]/.test(character[i])) {
            sum += parseInt(character[i]);
        }
    }
    console.log("The sum of digits in " + character + " is:" + sum);
}
sumOfDigitsInString();