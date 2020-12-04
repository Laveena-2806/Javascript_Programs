// program to check the string in first element contains all the letters of second or not.
// for example ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

var readLineSync = require('readline-sync');

function checkStringMutation() {
    let character1 = readLineSync.question("Enter the First String:");
    let character2 = readLineSync.question("Enter the second String:");
    let arr1 = character1.toLowerCase().split("");
    let arr2 = character2.toLowerCase().split("");
    let count = 0;
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) > -1) {
            count++;
        }
    }
    if (count == arr2.length) {
        console.log(`The string ${character1} contains all the letters that are in string ${character2}.`);
    } else {
        console.log(`The string ${character1} not contains all the letters that are in string ${character2}.`);
    }

}
checkStringMutation();