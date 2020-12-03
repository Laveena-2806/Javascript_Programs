// program to Copy each element of the first array into the second array, in order.
// example ([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
var readLineSync = require('readline-sync');

function spliceAndSliceArray() {
    let arr1 = [];
    let arr2 = []
    let limitOfFirstArray = readLineSync.question("Enter the limit of first array:");
    limitOfFirstArray = parseInt(limitOfFirstArray);
    for (let i = 0; i < limitOfFirstArray; i++) {
        let elementsOfFirstArray = readLineSync.question("Enter the elements of first array:");
        arr1.push(elementsOfFirstArray);
    }
    let limitOfSecondArray = readLineSync.question("Enter the limit of second array:");
    limitOfSecondArray = parseInt(limitOfSecondArray);
    for (let j = 0; j < limitOfSecondArray; j++) {
        let elementsOfFirstArray = readLineSync.question("Enter the elements of second array:");
        arr2.push(elementsOfFirstArray);
    }
    let number = readLineSync.question("Enter the number of elements that should copied from second array to first:");
    number = parseInt(number);
    let resultArray = arr2.slice();
    for (let j = 0; j < arr1.length; j++) {
        resultArray.splice(number, 0, arr1[j]);
        number++
    }
    console.log(`The first array is:${arr1} and the second array is:${arr2}.`);
    console.log(`The resulting array after copying ${number} number of elements from second array is:${resultArray}.`)
}
spliceAndSliceArray();