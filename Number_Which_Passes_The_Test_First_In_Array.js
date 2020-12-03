// program to check the number which passes the test first in array.
var readLineSync = require('readline-sync');

function numberThatPassTheTest() {
    let array = [];
    let num = 0;
    let limitOfArray = readLineSync.question("Enter the limit of array:");
    limitOfArray = parseInt(limitOfArray);
    for (let i = 0; i < limitOfArray; i++) {
        let number = readLineSync.question("Enter the elements of array:");
        number = parseInt(number);
        array.push(number);
    }
    for (let j = 0; j <= limitOfArray; j++) {
        num = array[j];
        if (num % 2 === 0) {
            console.log(`The element that passes the test in ${array} is: ${num}.`)
            return;
        }
    }
    console.log(`Not even single passes the test in ${array}.`)
}
numberThatPassTheTest();