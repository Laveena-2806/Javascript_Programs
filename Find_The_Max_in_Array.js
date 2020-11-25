// program to find the largest from an array using Spread operator
var readLineSync = require('readline-sync');

function largestNumberInArray() {
    var limitOfArray = readLineSync.question("Enter the limit of the array:");
    if (limitOfArray >= 2) {
        var array = [];
        for (var i = 0; i <= limitOfArray - 1; i++) {
            var elementToPush = readLineSync.question("Enter the elements of array:");
            array.push(elementToPush);
            var largestElement = Math.max(...array);
        }
        console.log("The largest element in entered array is:" + largestElement);
    } else {
        console.log("Please Enter the length of array greater than 1.")
    }
}
largestNumberInArray();