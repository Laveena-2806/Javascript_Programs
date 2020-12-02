// program to divide the array in specified number of times.
var readLineSync = require('readline-sync');

function divideTheArray() {
    let limitOfArray = readLineSync.question("Enter the limit of array:");
    if (limitOfArray > 2) {
        var arr = [];
        for (let i = 0; i <= limitOfArray - 1; i++) {
            let elementOfArray = readLineSync.question("Enter the elements of array:");
            arr.push(elementOfArray);
        }
        let number = readLineSync.question("Enter the number in which array should be divided:");
        number = parseInt(number);
        let newArr = [];
        let j = 0;

        while (j < arr.length) {
            newArr.push(arr.slice(j, j + number));
            j += number;
        }
        console.log(`The division of ${arr} into ${number} is:`);
        console.log(newArr);

    }
}
divideTheArray();