// program to flatten the nested array.
// example steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
var readLineSync = require('readline-sync');
const flattenTheNestedArray = () => {
    let mainArray = [];
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
    }
    var flattened = mainArray.reduce(function(a, b) {
        return a.concat(b);
    });
    console.log("The nested array entered is:");
    console.log(mainArray);
    console.log("The array after flattening the nested array:");
    console.log(flattened);

}
flattenTheNestedArray();