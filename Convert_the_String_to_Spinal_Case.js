// program to convert the string ti spinal case.
// example ("This Is Spinal Tap") should return "this-is-spinal-tap".
var readLineSync = require('readline-sync');

function convertStringToSpinalCase() {
    let sentence = readLineSync.question("Enter the sentence:");
    let newStr = ' ';
    var arr = sentence.split('');
    for (var i = 0; i < arr.length; i++) {
        if (i >= 0) {
            if (arr[i] >= 'A' && arr[i] <= 'Z') {
                if (arr[i - 1] >= 'a' && arr[i - 1] <= 'z') {
                    newStr += '-';
                    newStr += arr[i].toLowerCase();
                    continue;
                }
            } else if (arr[i] === ' ' || arr[i] === '_') {
                newStr += '-';
                continue;
            }
        }
        newStr += arr[i].toLowerCase();
    }
    console.log(newStr);
}
convertStringToSpinalCase();