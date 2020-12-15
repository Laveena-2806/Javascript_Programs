// program to replace the keys of object specified.
var readLineSync = require('readline-sync');
(function replaceObjectKeys() {
    let firstObject = {};
    let limitOfKeyOfObj = readLineSync.question('Enter the limit of key of first Object:');
    limitOfKeyOfObj = parseInt(limitOfKeyOfObj);
    for (let i = 0; i < limitOfKeyOfObj; i++) {
        let keyOfObject = readLineSync.question('Enter the key of Object:');
        let valueOfObject = readLineSync.question('Enter the value of Key:');
        firstObject[keyOfObject] = valueOfObject;
    }
    // let keys = Object.keys(firstObject);
    let limiOfChangeKeys = readLineSync.question("Enter the limit of keys you want to change in object:");
    limiOfChangeKeys = parseInt(limiOfChangeKeys);
    var replacedkeys = {};
    for (let i = 0; i < limiOfChangeKeys; i++) {
        let oldKey = readLineSync.question("Enter the key you want to replace:");
        let newKey = readLineSync.question("Enter the new key:");
        replacedkeys[oldKey] = newKey;
        console.log(replacedkeys);
        var result = Object.keys(firstObject).reduce(
            (acc, key) => ({
                ...acc,
                ... {
                    [replacedkeys[key] || key]: firstObject[key]
                }
            }), {}
        );

    }
    console.log("The Original Object is:");
    console.log(firstObject);
    console.log(`The new object after changing ${oldKey} into ${newKey} is:`);
    console.log(result);
})
()