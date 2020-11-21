var readlineSync = require('readline-sync');

// Wait for user's response.
var num1 = readlineSync.question('Please enter the number:');
var num2 = num1 - 13;

if (num1 > 13) {
    console.log((num1 - 13) * 2);
} else {
    console.log("Differnece between the number " + num1 + " and 13 is:" + num2);
}