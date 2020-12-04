// Program to split the array in specified size.
var readLineSync = require('readline-sync');

function splitArrayInSpecifiedSize() {
    let arr = [];
    let newArr = [];
    let limitOfArray = readLineSync.question("Enter the limit of array:");
    limitOfArray = parseInt(limitOfArray);
    if (limitOfArray >= 2) {
        for (i = 0; i < limitOfArray; i++) {
            var elementToInsert = readLineSync.question("Enter the elements of array:");
            arr.push(elementToInsert);
        }
        let sizeToSplitArray = readLineSync.question("Enter the size to split the array:");
        sizeToSplitArray = parseInt(sizeToSplitArray);
        while (arr.length > sizeToSplitArray) {
            newArr.push(arr.splice(0, sizeToSplitArray))
        }
        if (arr.length) {
            newArr.push(arr);
        }

        console.log(newArr);
    } else {
        console.log("Please enter the limit of array greater than 1.");
    }
}
splitArrayInSpecifiedSize();