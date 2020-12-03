// program to make the new array from the largest element from subarray.
var readLineSync = require('readline-sync');

function largestArrayFromSubarray() {
    let mainArray = [];
    let largest = 0;
    let largestArray = [];
    let limitOfMainArray = readLineSync.question("Enter the limit of main array:");
    limitOfMainArray = parseInt(limitOfMainArray);
    for (let i = 0; i < limitOfMainArray; i++) {
        let limitOfSubArray = readLineSync.question("Enter the limit of subArray:");
        limitOfSubArray = parseInt(limitOfSubArray);
        let arr = [];
        for (j = 0; j < limitOfSubArray; j++) {
            var elementsToPush = readLineSync.question("Enter the elements of subarray:");
            elementsToPush = parseInt(elementsToPush);
            arr[j] = elementsToPush;
        }
        mainArray[i] = arr;


    }
    for (let i = 0; i <= mainArray[i]; i++) {
        for (let j = 0; j < mainArray[j].length; j++) {
            if (mainArray[i][j] > largest) {
                largest = mainArray[i][j];
            }
            console.log(largest);
            largestArray.push(largest);
        }
    }
    console.log(mainArray);
    console.log(largestArray);

}
largestArrayFromSubarray();