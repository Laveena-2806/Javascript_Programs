// program to find the missing letters in entered word.
var readLineSync = require('readline-sync');

function missingLetters() {
    let word = readLineSync.question("Enter the word:");
    for (let i = 0; i < word.length; i++) {
        let character = word.charCodeAt(i);
        if (character !== word.charCodeAt(0) + i) {
            var letter = String.fromCharCode(character - 1);
            console.log(`The first missing letter is:${letter}`);
            return;
        }
    }
    console.log("All the letters are present.")
}
missingLetters();