// program to convert the string in title case
// for example ("I'm a little tea pot") should return I'm A Little Tea Pot.
var readLineSync = require('readline-sync');

function titleCaseString() {
    let sentence = readLineSync.question("Enter the sentence to convert in title case:");
    sentence = sentence.toLowerCase().split(" ");
    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    console.log(sentence.join(" "));
}
titleCaseString();