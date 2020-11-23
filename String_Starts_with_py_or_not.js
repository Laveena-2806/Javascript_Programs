// program to check whether the strings starts with py or not if yes than show the orignal string.
var readlineSync = require('readline-sync');

var string = readlineSync.question("Enter any string:");
if (string.substring(0, 2) === 'py' || string.substring(0, 2) === 'PY' || string.substring(0, 2) === 'Py' || string.substring(0, 2) === 'pY') {
    console.log("The string " + string + " starts with py");
} else {
    console.log("The new string is:" + "Py" + string);
}