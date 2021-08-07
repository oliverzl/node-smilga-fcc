//filesystem synchronous

const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

//creates a new file if it doesnt exist: result-sync.txt, with the method writeFileSync and puts in the text from first and second.
//by default it will override, to append, we can add the flag property object
writeFileSync("./content/result-sync.txt", `Here is the result : ${first}, ${second}`, { flag: "a" });
console.log("done with this task");
console.log("starting the next one");
