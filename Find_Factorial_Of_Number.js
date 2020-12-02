// program to find the factorial of number.
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
var readLineSync = require('readline-sync');

function factorialOfNumber() {
    let number = readLineSync.question("Enter the number to find factorial of:");
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    console.log("The factorial of " + number + " is:" + factorial);
}
factorialOfNumber();
