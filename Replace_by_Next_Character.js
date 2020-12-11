// program to replace the letter of entered string by the letter next to it in alphabetical order.
var readLineSync = require('readline-sync');
(function alphabetCharacterShift() {
    let shiftedword = "";
    const ALPHABETS = [...
        "abcdefghijklmnopqurstuvwrstuvwxyzabcdefghijklmnopqrstuvwxyz"
    ];
    let str = readLineSync.question("Enter the string:");
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (/\w/.test(str[i])) {
            shiftedword += ALPHABETS[ALPHABETS.indexOf(str[i]) + 1];
        } else {
            shiftedword += str[i];
        }
    }
    console.log(`The string after shifting ${str} is:${shiftedword}`);
})
()