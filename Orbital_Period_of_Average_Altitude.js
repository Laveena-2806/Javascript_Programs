// program to return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
var readLineSync = require('readline-sync');
(function averageAltitudeToOrbitalPeriods() {
    let arr = [];
    let limitOfArray = readLineSync.question("Enter the limit of array:");
    limitOfArray = parseInt(limitOfArray);
    for (let i = 0; i < limitOfArray; i++) {
        let limitOfKeys = readLineSync.question("Enter the limit of keys of object:");
        limitOfKeys = parseInt(limitOfKeys);
        let obj = {};
        for (let j = 0; j < limitOfKeys; j++) {
            let keyOfObj = readLineSync.question("Enter the key of Object:");
            keyOfObj.toLowerCase();
            let valuesOfObj = readLineSync.question("Enter the value of key of object:");
            if (!isNaN(valuesOfObj)) {
                valuesOfObj = parseInt(valuesOfObj);
            }
            keyOfObj.toLowerCase();
            obj[keyOfObj] = valuesOfObj;
        }
        arr.push(obj);
    }
    console.log("The array of object entered is:");
    console.log(arr);
    const GMVALUEOFEARTH = 398600.4418;
    const RADIUSOFEarth = 6367.4447;
    for (let item of arr) {
        item.orbitalPeriod = Math.round(Math.sqrt(Math.pow(item.avgAlt + RADIUSOFEarth, 3) / GMVALUEOFEARTH) * 2 * Math.PI);
        delete item.avgAlt;
    }
    console.log("The array of object after changing the average-altitute is:");
    console.log(arr);


})
()