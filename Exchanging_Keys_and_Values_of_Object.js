// program to exchange the keys and value of entered object.
var readLineSync = require('readline-sync');
(function exchangeKeyAndValueOfObject() {
    let object = {};
    let limitOfKeyOfObj = readLineSync.question('Enter the limit of key of first Object:');
    limitOfKeyOfObj = parseInt(limitOfKeyOfObj);
    for (let i = 0; i < limitOfKeyOfObj; i++) {
        let keyOfObject = readLineSync.question('Enter the key of Object:');
        let valueOfObject = readLineSync.question('Enter the value of Key:');
        object[keyOfObject] = valueOfObject;
    }
    let newObject = {};
    Object.entries(object).forEach(element => {
        let key = element[0];
        let value = element[1];
        newObject[value] = key;
    });
    console.log("The Original Object is:");
    console.log(object);
    console.log("The new-object after swapping the key-value pair is:");
    console.log(newObject);
})
()