// Check the number is multiple of 3 and 7

function checkMultipleOf(num1) {
    if (num1 % 3 === 0 && num1 % 7 === 0) {
        console.log(num1 + " is multiple of both 3 and 7.");
    } else if (num1 % 3 === 0) {
        console.log(num1 + " is multiple of 3.");
    } else if (num1 % 7 === 0) {
        console.log(num1 + " is multiple of 7.");
    } else {
        console.log(num1 + " is niether multiple of 3 nor 7.");
    }
}
checkMultipleOf(21);
checkMultipleOf(5);