// program of swapping half of the array if it's length is even.
function half_array_swap() {
    var readLineSync = require('readline-sync');
    var arrayLength = readLineSync.question("Enter the length of array:");
    // checking if the length of array entered is more than 0 or not.
    if (arrayLength > 0) {
        var Array = [];
        for (var i = 0; i <= arrayLength - 1; i++) {
            var elementToPush = readLineSync.question("Enter the elements of array:");
            Array.push(elementToPush);
        }
        // checking that the array can be swapped or not according to it's length.
        if ((arrayLength % 2) != 0) {
            console.log("The array cannot be halved.")
        } else {
            for (var i = 0; i < Array.length / 2; i++) {
                var temp = Array[i];
                Array[i] = Array[i + Array.length / 2];
                Array[i + Array.length / 2] = temp;

            }
            console.log(Array);
        }
    } else {
        console.log("Please the length of array more than 1.")
    }
}
half_array_swap();