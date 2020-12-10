// prohgram to validate the phone number.
var readLineSync = require('readline-sync');
(function telephoneChecker() {
    let telephoneNumber = readLineSync.question("Enter the telephone number for validating:")
    telephoneNumber = parseInt(telephoneNumber);
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    console.log(regex.test(telephoneNumber));

})
()