// program to  Check if the predicate is truthy on all elements of a collection.
var readLineSync = require('readline-sync');
(function everythingBeTrueInCollection() {
    let arr = [];
    let keys = [];
    let values = [];
    let limitOfArray = readLineSync.question("Enter the limit of array:");
    limitOfArray = parseInt(limitOfArray);
    for (let i = 0; i < limitOfArray; i++) {
        let limitOfKeys = readLineSync.question("Enter the limit of keys of object:");
        limitOfKeys = parseInt(limitOfKeys);
        for (var j = 0; j < limitOfKeys; j++) {
            let keyOfObj = readLineSync.question("Enter the key of Object:");
            let valuesOfObj = readLineSync.question("Enter the value of key of object:");
            keys.push(keyOfObj);
            values.push(valuesOfObj);
        }

        function obj(keys, values) {
            this.keys = keys;
            this.values = values;
        }

        arr.push(new obj(keys[j], values[j]));
    }
    console.log(arr);
})
();