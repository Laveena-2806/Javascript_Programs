// program to truncate the entered string with specified position.
var readLineSync = require("readline-sync");

function truncateTheString() {
    let sentence = readLineSync.question("Enter the sentence:");
    let position = readLineSync.question("Enter the position from where sentence should trancate:")
    position = parseInt(position);
    if (sentence.length > position) {
        let truncatedSentence = sentence.slice(0, position) + "....";
        console.log(`truncated string of ${sentence} after ${position} is: ${truncatedSentence}`)
    } else {
        console.log(`Specified ${position} is greater than ${sentence} so trancating is not possible`);
    }
}
truncateTheString();