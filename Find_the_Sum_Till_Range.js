// program to fin the sum till the range.
// for example 1-4 returns 10.
var readLineSync = require('readline-sync');

function sumOfRange() {
    let sum = 0;
    let startNumber = readLineSync.question("Enter the start number from where to start adding:");
    startNumber = parseInt(startNumber);
    let endnumber = readLineSync.question("Enter the number where to stop adding:");
    endnumber = parseInt(endnumber);
    if (startNumber < endnumber) {
        for (let i = startNumber; i <= endnumber; i++) {
            sum += i;
        }
        console.log(`The sum of all numbers from ${startNumber} to ${endnumber} is: ${sum}`);
    } else {
        console.log("Please enter the starting number smaller than end number.")
    }
}
sumOfRange()