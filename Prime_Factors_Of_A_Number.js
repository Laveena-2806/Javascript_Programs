// program to find all the prime factors of given number.
var readLineSync = require('readline-sync');
const PrimeFactorsOfNumber = () => {
    let number = readLineSync.question("Enter the number:");
    number = parseInt(number);

    const isPrime = (n) => {
        for (let i = 2; i <= n / 2; i++) {
            if (n % i === 0) {
                return false;
            }
        };
        return true;
    };
    const primeFactors = number % 2 === 0 ? [2] : [];
    let start = 3;
    while (start <= number) {
        if (number % start === 0) {
            if (isPrime(start)) {
                primeFactors.push(start);
            };
        };
        start++;
    };
    console.log(`The Array of all the prime factors of ${number} is:`);
    console.log(primeFactors);

}
PrimeFactorsOfNumber()