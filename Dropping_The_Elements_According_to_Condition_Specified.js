// program to drop the elements according to choice.
var readLineSync = require('readline-sync');

function dropArrayElements() {
    let arr = [];
    let newArr = [];
    let limitOfArray = readLineSync.question("Enter the limit of array:");
    limitOfArray = parseInt(limitOfArray);
    for (let i = 0; i < limitOfArray; i++) {
        let elementsOfArray = readLineSync.question("Enter the elements of array:");
        elementsOfArray = parseInt(elementsOfArray);
        arr.push(elementsOfArray);
    }
    let userChoice = readLineSync.question("Enter your choice:\n 1.Greater than\n 2.Smaller than\n 3.Greater than equal to\n 4.Smaller than equal to\n 5.Equal to \n");
    userChoice = parseInt(userChoice);
    let number = readLineSync.question("Enter the number:");
    number = parseInt(number);
    if (userChoice === 1) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > number) {
                newArr.push(arr[j]);
            }
        }
        console.log("The array is:");
        console.log(arr);
        console.log(`The values of array greater than ${number} are:`);
        console.log(newArr);
    } else if (userChoice === 2) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < number) {
                newArr.push(arr[i]);
            }
        }
        console.log("The array is:");
        console.log(arr);
        console.log(`The values of array smaller than ${number} are:`);
        console.log(newArr);
    } else if (userChoice === 3) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= number) {
                newArr.push(arr[i]);
            }
        }
        console.log("The array is:");
        console.log(arr);
        console.log(`The values of array greater than equal to ${number} are:`);
        console.log(newArr);
    } else if (userChoice === 4) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= number) {
                newArr.push(arr[i]);
            }
        }
        console.log("The array is:");
        console.log(arr);
        console.log(`The values of array smaller than and equal to ${number} are:`);
        console.log(newArr);
    } else if (userChoice === 5) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === number) {
                newArr.push(arr[i]);
            }
        }
        console.log("The array is:");
        console.log(arr);
        console.log(`The values of array equal to ${number} are:`);
        console.log(newArr);
    } else {
        console.log("Please enter your choice from range 1-5 only");
    }
}
dropArrayElements();