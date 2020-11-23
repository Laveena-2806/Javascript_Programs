// program to exchange the first and last character of entered string. 
var readlineSync = require('readline-sync');

var string = readlineSync.question("Enter any string:");
if (string.length <= 1) {
    console.log("Please enter the string whose length is more than 1.")
} else {
    var remainingChar = string.substring(1, string.length - 1);
    var startChar = string.charAt(0);
    var endChar = string.charAt(string.length - 1);
    console.log("The string " + string + " changes to " + endChar + remainingChar + startChar);
}