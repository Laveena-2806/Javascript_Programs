// program to check whether all the digits of entered number is same or not.
function Check_Same_Digit_Of_Number() {
    var readlinesync = require('readline-sync');
    var number = readlinesync.question("Enter the Number:");
    const CONST_NUMBER = 10;
    var lastDigit = number % CONST_NUMBER;
    while (number) {
        if (number % CONST_NUMBER !== lastDigit)
            return false;
        number = Math.floor(number / CONST_NUMBER);
    }
    console.log("The entered digit of number are same");
}
Check_Same_Digit_Of_Number();