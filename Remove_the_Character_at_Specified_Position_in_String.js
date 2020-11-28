// Program to remove the character from specified position in string
var readLincSync = require('readline-sync');

function removeCharacterFromSpecifiedPosition() {
    let word = readLincSync.question("Enter the string:");
    let positionOfCharacter = readLincSync.question("Enter the position of character to remove:");
    let firstHalfOfString = word.substring(0, positionOfCharacter);
    let secondHalfOfString = word.substring(++positionOfCharacter, word.length);
    let result = firstHalfOfString + secondHalfOfString;
    console.log(result);
}
removeCharacterFromSpecifiedPosition();