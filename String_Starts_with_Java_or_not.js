// program to check whether string starts with java or not.
var readlineSync = require('readline-sync');

var string = readlineSync.question("Enter any string:");
if (string.length > 2) {
    var firstFourCharacter = string.substring(0, 4);

    if (firstFourCharacter == "java" || firstFourCharacter == "Java") {
        console.log("The string " + string + " starts with Java.");
    } else {
        console.log("The string " + string + " not starts with java.");
    }
} else {
    console.log("The length of string is less than 2.");
}