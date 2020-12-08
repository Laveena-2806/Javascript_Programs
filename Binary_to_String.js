// program to convert the binary code into readable format.
// example ('01000001 01110010 01100101 01101110 00100111 01110100') to Aren't.
var readLineSync = require('readline-sync');
const binaryToString = () => {
    let binaryForm = readLineSync.question("Enter the sentence in binary form means in 0 and 1 format:");
    let newBinary = binaryForm.split(" ");
    let convertedToString = [];

    for (let i = 0; i < newBinary.length; i++) {
        convertedToString.push(String.fromCharCode(parseInt(newBinary[i], 2)));
    }
    let newString = convertedToString.join("");
    console.log(newString);

}
binaryToString();
