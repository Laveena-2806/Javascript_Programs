// program to check whether the entered value is boolean primitive or not.
var readLineSync = require('readline-sync');

function checkBooleanPrimitive(character) {
    if (typeof character === "boolean") {
        console.log(`The datatype of entered ${character} is boolean.`)
    } else {
        console.log(`The datatype of entered ${character} is not boolean.`)
    }
}
checkBooleanPrimitive(true);