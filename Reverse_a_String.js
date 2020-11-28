// program to remove the duplicate characters from string
var readLineSync = require('readline-sync');

function reverseString() {
    let word = readLineSync.question("Enter the string:");
    let newString = "";
    for (let i = word.length - 1; i >= 0; i--) {
        newString += word[i];
    }
    console.log(newString);
}
reverseString();