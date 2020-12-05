// program to Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
var readLineSync = require('readline-sync');

function compareTheArrayElements() {
    let arr1 = [];
    let arr2 = [];
    let newArr = [];
    let limitOfFirstArray = readLineSync.question("Enter the limit of First Array:");
    limitOfFirstArray = parseInt(limitOfFirstArray);
    for (let i = 0; i < limitOfFirstArray; i++) {
        let elementsOfFirstArray = readLineSync.question("Enter the elements of first array:");
        arr1.push(elementsOfFirstArray);
    }
    let limitOfSecondArray = readLineSync.question("Enter the limit of Second Array:");
    limitOfSecondArray = parseInt(limitOfSecondArray);
    for (let j = 0; j < limitOfSecondArray; j++) {
        let elementsOfSecondArray = readLineSync.question("Enter the elements of Second array:");
        arr2.push(elementsOfSecondArray);
    }
    newArr = arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
    console.log("Elements of first array are:");
    console.log(arr1);
    console.log("Elements of second array are:");
    console.log(arr2);
    console.log("Elements that are different in both arrays are:");
    console.log(newArr);
}
compareTheArrayElements();