var readlineSync = require('readline-sync');

// Wait for user's response.
var num1 = readlineSync.question('Please enter the number:');
if ((Math.abs(100 - num1) <= 20) || (Math.abs(400 - num1) <= 20)) {
    console.log("The difference is greater than 20.")
} else {
    console.log("The difference is less than 20.")
}