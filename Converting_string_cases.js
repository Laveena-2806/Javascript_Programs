// Program to check string length is greater than if true than change the case.
var readlineSync = require('readline-sync');

var string = readlineSync.question("Enter any string:");
if (string.length < 3) {
    console.log(string.toUpperCase());
} else {
    var firstThreeCharacter = (string.substring(0, 3)).toLowerCase();
    var remainingString = string.substring(3, string.length);
    console.log("As string length is greater than 3 so it changes to " + firstThreeCharacter + remainingString);
}