// program to identify the type of triangle by given angle.
var readLineSync = require('readline-sync');

function typeOfTriangle() {
    let angleOfTriangle = readLineSync.question("Enter the degree of triangle:");
    angleOfTriangle = parseInt(angleOfTriangle);
    if (angleOfTriangle >= 0 && angleOfTriangle < 90) {
        console.log(`The triangle with ${angleOfTriangle}° is Acute angle triangle.`);
    } else if (angleOfTriangle === 90) {
        console.log(`The triangle with ${angleOfTriangle}° is Right angle triangle.`)

    } else if (angleOfTriangle >= 80 && angleOfTriangle < 180) {
        console.log(`The triangle with ${angleOfTriangle}° is Obtuse angle triangle.`)

    } else if (angleOfTriangle === 180) {
        console.log(`The triangle with ${angleOfTriangle}° is Straight angle triangle.`)

    } else {
        console.log("Please enter the positive number");

    }
}
typeOfTriangle()