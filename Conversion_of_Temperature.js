// program to convert the given temperature from celsius to Fahrenheit or vice versa
const startPtOfScale = 100;
const endPtOfScale = 180;
const freezingPtOfWater = 32;
// Wait for user's response.
var readlineSync = require('readline-sync');
var num1 = readlineSync.question('Enter 1 for converting Celsius to farenheit \n' + 'Enter 2 for converting farenheit to celsius \n' + 'Enter your choice:');

if (num1 == 1) {
    console.log("your choice is to convert celsius to fahrenheit");
    var temperature1 = readlineSync.question("Enter the temperature: ");
    var fahrenheit = temperature1 * (endPtOfScale / startPtOfScale) + freezingPtOfWater;
    console.log("Convertion of " + temperature1 + "°C" + " to fahrenheit is " + fahrenheit + "°F");

} else if (num1 == 2) {
    console.log("your choice is to convert farenheit to celsius");
    var temperature2 = readlineSync.question("Enter the temperature: ");
    var celsius = (temperature2 - freezingPtOfWater) * (startPtOfScale / endPtOfScale);
    console.log("Conversion of " + temperature2 + "°F" + " to celsius is " + celsius + "°C");
} else {
    console.log("please enter the your choice by pressing 1 or 2 only.");
}