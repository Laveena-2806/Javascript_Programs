// program to alter the english word.
var readLineSync = require('readline-sync');

function alterEnglishWord() {
    let word = readLineSync.question("Enter the word:");
    word = word.toLowerCase();
    if ('aeiou'.includes(word[0])) {
        let newWord = word + 'way';
        console.log(`${word} begins with vowel so it becomes:${newWord}.`);

    } else {
        let newWord = Array.from(word);
        for (var i = 0; i < newWord.length; i++) {
            if ('aeiou'.includes(newWord[i])) {
                newWord = newWord.join('');
                console.log(`The word ${word} doesn't begin with vowel so it changes to:${newWord}ay.`)
                return;
            } else {
                newWord.push(newWord.shift([i]));
                i--;
            }
        }
    }
}
alterEnglishWord();