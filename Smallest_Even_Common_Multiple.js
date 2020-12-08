// program to find the smallest even common multiple of entered numbers.
var readLineSync = require('readline-sync');
(function commonMultiple() {
    let arr = [];
    let limitOfNumbers = readLineSync.question("Enter the number of digits you want to find even common multiple of:");
    limitOfNumbers = parseInt(limitOfNumbers);
    for (i = 0; i < limitOfNumbers; i++) {
        var num = readLineSync.question("Enter the number:");
        num = parseInt(num);
        arr.push(num);
    }
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let lcm = max;

    for (let i = max - 1; i >= min; i--) {
        if (lcm % i) {
            lcm += max;
            i = max;
        }
    }
    console.log(`The least common even multiple of ${arr} is:${lcm}.`);

})
();