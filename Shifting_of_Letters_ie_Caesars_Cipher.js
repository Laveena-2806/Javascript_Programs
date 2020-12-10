// program to shift the enter letter by its 13 position.
var readLineSync = require('readline-sync');
(function caesarsCipherShiftBy13() {
    let cipher = "";
    const ALPHABETS = [...
        "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"
    ];
    let str = readLineSync.question("Enter the string:");
    str = str.toUpperCase();
    for (let i = 0; i < str.length; i++) {
        if (/\w/.test(str[i])) {
            cipher += ALPHABETS[ALPHABETS.indexOf(str[i]) + 13];
        } else {
            cipher += str[i];
        }
    }
    console.log(`The caesars cipher of ${str} is:${cipher}`);
})
()