// program to Combine given array into an array containing all combinations
var readLineSync = require('readline-sync');
(function allPossibleCombinations() {
    let array = [];
    let limitOfArray = readLineSync.question("Enter the limit of Array:");
    limitOfArray = parseInt(limitOfArray);
    for (let i = 0; i < limitOfArray; i++) {
        let elementsOfArray = readLineSync.question("Enter the element of Array:");
        array.push(elementsOfArray);
    }
    var result = [
        []
    ];
    for (let value of array) {
        const length = result.length
        for (let i = 0; i < length; i++) {
            let temp = result[i].slice(0)
            temp.push(value)
            result.push(temp)
        }
    }
    console.log("All the possible combinations of:");
    console.log(array + ' are:');
    console.log(result);
})
()