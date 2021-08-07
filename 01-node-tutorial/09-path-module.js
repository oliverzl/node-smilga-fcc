const path = require("path");

//platform specific seperator below
console.log(path.sep);

const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

//resolves the path to an absolute path.
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
