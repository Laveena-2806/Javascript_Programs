// program to check that where the entered number belongs in array.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
var readLineSync = require('readline-sync');

function getIndexOfNumberInArray() {
    let arr = [];
    let limitOfArray = readLineSync.question("Enter the Limit of array:");
    limitOfArray = parseInt(limitOfArray);
    if (limitOfArray >= 2) {
        for (let i = 0; i < limitOfArray; i++) {
            let elementOfArray = readLineSync.question("Enter the elements of array:");
            elementOfArray = parseInt(elementOfArray);
            arr.push(elementOfArray);
            arr.sort((a, b) => a - b);
        }
        let numberToCheck = readLineSync.question("Enter the number to check the index where it belongs in array:");
        numberToCheck = parseInt(numberToCheck);
        for (j = 0; j < arr.length; j++) {
            if (arr[j] >= numberToCheck) {
                console.log(arr);
                console.log(`The index of number that is greater than ${numberToCheck} is: ${j}.`);
                return;
            } else {
                console.log(arr);
                console.log(`All the elements in entered array are smaller than ${numberToCheck}.`);
                return;
            }
        }
    } else {
        console.log("Please the limit of array more than 1.");
    }
}
getIndexOfNumberInArray();