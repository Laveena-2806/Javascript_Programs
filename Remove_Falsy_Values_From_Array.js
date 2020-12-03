var readLineSync = require('readline-sync');

function removeAllFalsyValuesFromArray() {
    let limitOfArray = readLineSync.question("Enter the limit of array:");
    limitOfArray = parseInt(limitOfArray);
    let arr = [];
    for (let i = 0; i < limitOfArray; i++) {
        let elementsOfArray = readLineSync.question("Enter the Elements of Array:");
        arr.push(elementsOfArray);
    }
    var filter = arr.filter(function(n) {
        return n !== undefined && n !== null && n !== false && n !== 0 && n !== "" && !isNaN(n);
    });

    console.log(filter);
}

removeAllFalsyValuesFromArray();