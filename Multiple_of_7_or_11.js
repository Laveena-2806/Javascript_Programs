// program to check whether the entered number is multiple of 7 or 11.
var readlinesync = require('readline-sync');
var num = readlinesync.question("Please enter the number:");
if (num > 0) {
    if (num % 7 === 0 && num % 11 === 0) {
        console.log("The number " + num + " is multiple of both 7 and 11.")
    } else if (num % 7 === 0) {
        console.log("The number " + num + " is multiple of 7.");
    } else if (num % 11 === 0) {
        console.log("The number " + num + " is multiple of 11.")
    } else {
        console.log("The number " + num + " is neither multiple of 7 nor 11.")
    }
} else {
    console.log("Please enter the positive number.");
}