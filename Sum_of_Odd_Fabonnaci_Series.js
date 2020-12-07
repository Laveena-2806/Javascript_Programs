// program to find the sum of odd fabonnaci series
var readLineSync = require('readline-sync');
(function sumOfFabonnaciSeries() {
    let startNumber = 0;
    let firstNumber = 1;
    let sum = 0;
    let endNumber = readLineSync.question("Enter the number till where you need sum:");
    endNumber = parseInt(endNumber);
    while (firstNumber <= endNumber) {
        if (firstNumber % 2 !== 0) {
            sum += firstNumber;
        }

        firstNumber += startNumber;
        startNumber = firstNumber - startNumber;
    }

    console.log(`The sum of first ${endNumber} odd fabonnaci series start with 1 is:${sum}.`);


})
();