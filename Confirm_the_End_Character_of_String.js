// program to confirm the end of the string with specified character.
var readLineSync = require('readline-sync');

function confirmTheEndOfString() {
    let character = readLineSync.question("Enter the string:");
    character = character.toLowerCase();
    let characterToMatch = readLineSync.question("Enter any letter:");
    characterToMatch = characterToMatch.toLowerCase();
    if (character.charAt(character.length - 1) === characterToMatch) {
        console.log(`The ${character} ends with ${characterToMatch}`);
    } else {
        console.log(`The ${character} does not ends with ${characterToMatch}`);
    }
}
confirmTheEndOfString();