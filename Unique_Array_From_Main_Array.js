// program to remove all the duplicate elements from array and retuen a new array.
// example [[1, 3, 2], [5, 2, 1, 4], [2, 1]] should return [1, 3, 2, 5, 4].
var readLineSync = require('readline-sync');
(function uniqueArray() {
    let mainArray = [];
    let uniqueArray = [];
    let limitOfMainArray = readLineSync.question("Enter the limit of main Array:");
    limitOfMainArray = parseInt(limitOfMainArray);
    for (let i = 0; i < limitOfMainArray; i++) {
        let limitOfSubArray = readLineSync.question(`Enter the limit of ${i} subarray:`);
        limitOfSubArray = parseInt(limitOfSubArray);
        let arr = [];
        for (let j = 0; j < limitOfSubArray; j++) {
            let elementofSubArray = readLineSync.question("Enter the elements of subarray:");
            arr[j] = elementofSubArray;
        }
        mainArray[i] = arr;
    }
    for (var k = 0; k < mainArray.length; k++) {
        for (var m = 0; m < mainArray[k].length; m++) {
            if (!uniqueArray.includes(mainArray[k][m])) {
                let uniqueElement = mainArray[k][m]
                uniqueArray.push(uniqueElement);
            }
        }
    }
    console.log("Array entered:");
    console.log(mainArray);
    console.log("Array of unique elements:");
    console.log(uniqueArray);
})();