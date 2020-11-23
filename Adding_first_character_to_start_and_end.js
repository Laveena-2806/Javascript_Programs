// program to add the first character of entered string to the start and the end of the string.
var readlineSync = require('readline-sync');

var string = readlineSync.question("Enter any string:");
if (string.length <= 1) {
    console.log("Please enter the string whose length is greter than 1.")
} else {
    var firstChar = string.charAt(0);
    console.log("The String " + string + " changes to " + firstChar + string + firstChar);
}