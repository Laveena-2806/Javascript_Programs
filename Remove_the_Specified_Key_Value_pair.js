// program to remove the specified key value pair from the object.
var readLineSync = require('readline-sync');
(function omitKeyValuePair() {
    let object = {};
    let limitOfKeyOfObj = readLineSync.question('Enter the limit of key of first Object:');
    limitOfKeyOfObj = parseInt(limitOfKeyOfObj);
    for (let i = 0; i < limitOfKeyOfObj; i++) {
        let keyOfObject = readLineSync.question('Enter the key of Object:');
        let valueOfObject = readLineSync.question('Enter the value of Key:');
        object[keyOfObject] = valueOfObject;
    }
    let limitOfOmitKey = readLineSync.question('Enter the limit of keys you want to remove:');
    limitOfOmitKey = parseInt(limitOfOmitKey);
    for (let j = 0; j < limitOfOmitKey; j++) {
        let keysToOmit = readLineSync.question('Enter the key name to remove:');
        let keys = Object.keys(object);
        console.log("The Orginal Object is:");
        console.log(object);
        for (let k = 0; k < keys.length; k++) {
            if (keys[k] == keysToOmit) {
                object = Object.defineProperty(object, keysToOmit, { enumerable: false });
                console.log(`The object after removing the key value pair with key ${keysToOmit} is:`);
                console.log(object);
            }
        }
    }
})
()