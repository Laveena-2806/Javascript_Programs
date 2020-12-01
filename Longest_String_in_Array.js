// program to check the largest string in array.
var readLineSync = require('readline-sync');

function longestStringInArray() {

    let limitOfArray = readLineSync.question("Enter the length of array:");
    if (limitOfArray > 1) {
        let array = [];
        var longest;
        var largest = 0
        for (let i = 0; i <= limitOfArray - 1; i++) {
            var elementToPush = readLineSync.question("Enter the string:");
            array.push(elementToPush);
        }
        for (let j = 0; j < array.length; j++) {
            if (array[j].length > largest) {
                largest = array[j].length;
                longest = array[j];
                console.log("The longest string among " + array + " is:" + longest);
            }
        }
        return false;
    }
}
longestStringInArray();