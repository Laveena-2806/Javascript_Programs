// program to convert given number in hours and minutes.
var readLineSync = require('readline-sync');

function numberToHoursAndMinutes() {
    var number = readLineSync.question("Enter the number:");
    const MINUTEINONEHOUR = 60;
    var hours = Math.floor(number / MINUTEINONEHOUR);
    var minutes = number % MINUTEINONEHOUR;
    console.log("The conversion of " + number + " into hours and minutes is:" + hours + "hours " + minutes + "minutes.");
}
numberToHoursAndMinutes();
