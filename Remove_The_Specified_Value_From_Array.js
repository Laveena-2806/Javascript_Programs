// Program to remove the specified value from the initial array.
// example: (["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
var readLineSync = require('readline-sync');

function destroySpecifiedValueFromArray() {
    let arr = [];
    let destroyedArr = [];
    let limitOfArray = readLineSync.question("Enter the limit of array:");
    limitOfArray = parseInt(limitOfArray)
    for (let i = 0; i < limitOfArray; i++) {
        let elementsOfArray = readLineSync.question("Enter the elements of array:");
        arr.push(elementsOfArray);
    }
    let limitOfElementToDestroy = readLineSync.question("Enter the number of elements that you want to destroy in array:");
    limitOfElementToDestroy = parseInt(limitOfElementToDestroy);
    for (let j = 0; j < limitOfElementToDestroy; j++) {
        let elementToDestroy = readLineSync.question("Enter the value of element that you want to destroy:");
        destroyedArr.push(elementToDestroy);
    }
    console.log("Array is:");
    console.log(arr);
    console.log("Elements to destroy from array are:");
    console.log(destroyedArr);
    arr = arr.filter(item => !destroyedArr.includes(item));
    console.log("Array after removing the specified elements:")
    console.log(arr);
}
destroySpecifiedValueFromArray();