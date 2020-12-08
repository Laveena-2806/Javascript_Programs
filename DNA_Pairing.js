// program to pair the base pair of DNA i.e. AT and CG.
(function dnaPairElement(str) {
    let pair = [];

    let search = function(char) {
        switch (char) {
            case "A":
                pair.push(["A", "T"]);
                break;
            case "T":
                pair.push(["T", "A"]);
                break;
            case "C":
                pair.push(["C", "G"]);
                break;
            case "G":
                pair.push(["G", "C"]);
                break;
        }
    };
    for (let i = 0; i < str.length; i++) {
        search(str[i]);
    }
    console.log(`The DNA Strands of ${str} are:`);
    console.log(pair)
})
("GCG")