// program to count the number of vowels in given string
var readLineSync = require('readline-sync');

function numberOfVowelInString() {
    var characters = readLineSync.question("Enter the string:");
    characters = characters.toLowerCase();
    var data = characters.split("");
    const countVowels = data.filter(element => 'aeiou'.includes(element)).length;
    console.log("Number of Vowels in " + characters + " are " + countVowels);

}
numberOfVowelInString();
