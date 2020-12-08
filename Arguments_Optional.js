// program to Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
(function addTogether(first, second) {
    if (typeof first !== "number") {
        console.log("undefined");
    }
    const sum = second =>
        typeof second === "number" ? first + second : undefined;
    let result = typeof second === "undefined" ? second => sum(second) : sum(second);
    console.log(`Sum of ${first} and ${second} is:${result}`);
})
(2, 3)