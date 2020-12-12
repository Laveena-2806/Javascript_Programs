// program to compare the two objects.
var readLineSync = require('readline-sync');
(function compareTwoObjects() {
        let firstObject = {};
        let secondObject = {};
        let limitOfKeyOfObj1 = readLineSync.question('Enter the limit of key of first Object:');
        limitOfKeyOfObj1 = parseInt(limitOfKeyOfObj1);
        for (i = 0; i < limitOfKeyOfObj1; i++) {
            let keyOfObject1 = readLineSync.question('Enter the key of Object1:');
            let valueOfObject1 = readLineSync.question('Enter the value of Key:');
            firstObject[keyOfObject1] = valueOfObject1;
        }
        let limitOfKeyOfObj2 = readLineSync.question('Enter the limit of key of second Object:');
        limitOfKeyOfObj2 = parseInt(limitOfKeyOfObj2);
        for (i = 0; i < limitOfKeyOfObj2; i++) {
            let keyOfObject2 = readLineSync.question('Enter the key of Object2:');
            let valueOfObject2 = readLineSync.question('Enter the value of Key:');
            secondObject[keyOfObject2] = valueOfObject2;
        }
        let keys1 = Object.keys(firstObject);
        let keys2 = Object.keys(secondObject);
    for (i = 0; i < keys1.length; i++) {
        if (keys1[i] === keys2[i]) {
            console.log("The object:");
            console.log(firstObject);
            console.log("contains all the keys of ");
            console.log(secondObject);
            return
        } else {
            console.log("The object:");
            console.log(firstObject);
            console.log("does not contains all the keys of ");
            console.log(secondObject);
        }
    }
})
()
