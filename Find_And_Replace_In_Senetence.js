// find the specified word and replace it another word
var readLineSync = require('readline-sync');

function findAndReplaceString() {
    let sentence = readLineSync.question("Enter the senetence:");
    let wordToSearch = readLineSync.question("Enter the word to search:");
    let replaceWith = readLineSync.question("Enter the word to replace:");
    let newStr = sentence.replace(wordToSearch, replaceWith);
    console.log(`The ${sentence} after replacing the ${wordToSearch} is:${newStr}.`);
}
findAndReplaceString();