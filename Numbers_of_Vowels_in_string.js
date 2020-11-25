// program to count the number of vowels in given string
var readLineSync = require('readline-sync');

function numberOfVowelInString() {
    var string = readLineSync.question("Enter the string:");
    string = string.toLowerCase();
    var Array = string.split("");
    const countVowels = Array.filter(element => 'aeiou'.includes(element)).length;
    console.log("Number of Vowels in " + string + " are " + countVowels);

}
numberOfVowelInString();