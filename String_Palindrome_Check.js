// program to check whether entered string is palindrome or not
var readLineSync = require('readline-sync');
(function checkStringPalindrome() {
    let str = readLineSync.question("Enter the string:");
    let newstr = str.split(/\s/).join('');
    newstr = newstr.toLowerCase();
    const STRING_LENGTH = newstr.length;
    for (let i = 0; i < STRING_LENGTH / 2; i++) {
        if (newstr[i] !== newstr[STRING_LENGTH - 1 - i]) {
            console.log(`Entered ${str} is not a palindrome.`);
            return
        }
    }
    console.log(`Entered ${str} is a palindrome.`)
})
()