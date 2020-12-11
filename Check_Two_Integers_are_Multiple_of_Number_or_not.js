// Program program to check whether two given integers are similar or not, if a given divisor divides both integers and it does not divide either.
var readLineSync = require('readline-sync');
(function checkNumbers() {
    let num1 = readLineSync.question("Enter the first number:");
    num1 = parseInt(num1);
    let num2 = readLineSync.question("Enter the second number:");
    num2 = parseInt(num2);
    let divisor = readLineSync.question("Enter the divisor:");
    divisor = parseInt(divisor);
    if (num1 % divisor === 0 && num2 % divisor === 0) {
        console.log(`The number ${num1} and ${num2} both are divisible by ${divisor}.`);
    } else if (num1 % divisor === 0) {
        console.log(`Only ${num1} is divisibe by ${divisor}.`);
    } else if (num2 % divisor === 0) {
        console.log(`Only ${num2} is divisibe by ${divisor}.`)
    } else {
        console.log(`Neither ${num1} nor ${num2} is divisibe by ${divisor}.`)
    }
})
()