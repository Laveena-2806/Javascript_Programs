// program to  Check if the predicate is truthy on all elements of a collection.
var readLineSync = require('readline-sync');
(function everythingBeTrueInCollection() {
    let arr = [];
    let limitOfArray = readLineSync.question("Enter the limit of array:");
    limitOfArray = parseInt(limitOfArray);
    for (let i = 0; i < limitOfArray; i++) {
        let limitOfKeys = readLineSync.question("Enter the limit of keys of object:");
        limitOfKeys = parseInt(limitOfKeys);
        let obj = {};
        for (var j = 0; j < limitOfKeys; j++) {
            var keyOfObj = readLineSync.question("Enter the key of Object:");
            keyOfObj.toLowerCase();
            var valuesOfObj = readLineSync.question("Enter the value of key of object:");
            keyOfObj.toLowerCase();
            obj[keyOfObj] = valuesOfObj;
        }
        arr.push(obj);

    }
    let predicate = readLineSync.question("Enter the key You need to compare in object:");
    let result = arr.every(obj => obj[predicate]);
    console.log("The array of objects entered is:");
    console.log(arr);
    console.log(`The value Predicate for which you want to check true or false:${predicate}.`);
    console.log(`The result is:${result}.`);
})
()