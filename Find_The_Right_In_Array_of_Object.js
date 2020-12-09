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
            var keyOfObj = readLineSync.question("Enter the key of Object:");
            var valuesOfObj = readLineSync.question("Enter the value of key of object:");
            obj.key = keyOfObj;
            obj.value = valuesOfObj;
            collection.push(obj);
            console.log(obj);
        }

    }
    console.log(collection);
    let key = readLineSync.question("Enter the Key of object:");
    let value = readLineSync.question("Enter the value of that key:");
    source.key = key;
    source.value = value;
    var collectionKeys = [];
    for (var i = 0; i < collection.length; i++) {
        collectionKeys.push(Object.keys(collection[i]));
    }
    var sourceKeys = Object.keys(source);
    console.log(sourceKeys);

    for (var t = 0; t < collectionKeys.length; t++) {
        for (var x = 0; x < collectionKeys[t].length; x++) {
            for (var y = 0; y < sourceKeys.length; y++) {
                if (sourceKeys[y] == collectionKeys[t][x]) {
                    if (collection[t][collectionKeys[t][x]] == source[sourceKeys[y]]) {
                        console.log(collection[t].key + " " + collection[t].value);
                    } else {
                        console.log("value not found");
                    }
                } else {
                    console.log("key not found");
                }
            }
        }
    }
})
()