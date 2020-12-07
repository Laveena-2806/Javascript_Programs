// sum of all the prime number till the specified range
var readLineSync = require("readline-sync");
(function sumOfPrime() {

    let sum = 0;
    let num = readLineSync.question("Enter the number of primes that you want to add:")
    num = parseInt(num);

    function checkPrime(i) {
        for (var k = 2; k < i; k++) {
            if (i % k === 0) {
                return;
            }
        }
        return true;
    }
    for (var i = 2; i <= num; i++) {
        if (checkPrime(i)) {
            sum += i;
        }
    }
    console.log(`The sum of ${num} prime numbers is:${sum}.`);
  
})
();
