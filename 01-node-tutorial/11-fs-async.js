const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	const first = result;
	readFile("./content/second.txt", "utf8", (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const second = result;

		//writeFile replaces text in result-async because there is no flag: 'a' object.

		//in the sync version, it is writeFileSync, but now it is writeFile only. this is the async version.
		writeFile("./content/result-async.txt", `Here is the result : ${first}, ${second}`, (err, result) => {
			if (err) {
				console.log(err);
				return;
			}
			console.log("done with this task");
		});
	});
});
console.log("starting next task");

//writeFile(..., () => { ... })
