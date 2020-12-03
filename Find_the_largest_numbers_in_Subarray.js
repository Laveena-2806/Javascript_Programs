// program to make the new array from the largest element from subarray.
var readLineSync = require('readline-sync');

function largestArrayFromSubarray() {
    let mainArray = [];
    let largestArray = [];
    let limitOfMainArray = readLineSync.question("Enter the limit of main array:");
    limitOfMainArray = parseInt(limitOfMainArray);
    for (let i = 0; i < limitOfMainArray; i++) {
        let limitOfSubArray = readLineSync.question("Enter the limit of subArray:");
        limitOfSubArray = parseInt(limitOfSubArray);
        let arr = [];
        for (j = 0; j < limitOfSubArray; j++) {
            var elementsToPush = readLineSync.question("Enter the elements of subarray:");
            elementsToPush = parseInt(elementsToPush);
            arr[j] = elementsToPush;
        }
        mainArray[i] = arr;
        for (var n = 0; n < mainArray.length; n++) {
            var largestNumber = mainArray[n][0];
            for (var sb = 1; sb < mainArray[n].length; sb++) {
                if (mainArray[n][sb] > largestNumber) {
                    largestNumber = mainArray[n][sb];
                }
            }

            largestArray[n] = largestNumber;
        }

    }

    console.log("The Array with subarray entered is:");
    console.log(mainArray);
    console.log("The array after getting the largest number from is:")
    console.log(largestArray);

}
largestArrayFromSubarray();
