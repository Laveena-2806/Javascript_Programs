// program that looks through an array of objects and returns an array of all objects that have matching name and value pairs.
var readLineSync = require('readline-sync');
(function correctArrayOfObject() {
    let collection = [];
    let source = {};
    let limitOfArray = readLineSync.question("Enter the limit of array:");
    limitOfArray = parseInt(limitOfArray);
    for (let i = 0; i < limitOfArray; i++) {
        let limitOfKeys = readLineSync.question("Enter the limit of keys of object:");
        limitOfKeys = parseInt(limitOfKeys);
        let obj = {};
        for (let j = 0; j < limitOfKeys; j++) {
            let keyOfObj = readLineSync.question("Enter the key of Object:");
            let valuesOfObj = readLineSync.question("Enter the value of key of object:");
            obj[keyOfObj] = valuesOfObj;
        }
        collection.push(obj);

    }
    let key = readLineSync.question("Enter the Key of object that you want to fiter:");
    let value = readLineSync.question("Enter the value of that key you want to filter:");
    source[key] = value;
    let collectionKeys = [];
    for (let i = 0; i < collection.length; i++) {
        collectionKeys.push(Object.keys(collection[i]));
    }
    let sourceKeys = Object.keys(source);

    let result = collection.filter(function(obj) {
        for (let i = 0; i < sourceKeys.length; i++) {
            if (!obj.hasOwnProperty(sourceKeys[i]) ||
                obj[sourceKeys[i]] !== source[sourceKeys[i]]
            ) {
                return false;
            }
        }
        return true;
    });
    console.log("The array of objects entered is:");
    console.log(collection);
    console.log("The Key value pair to filter is:")
    console.log(source);
    console.log("The array of object after filtering is:");
    console.log(result);
})
()
