const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("Home Page");
	}
	if (req.url === "/about") {
		//Below is an example of blocking code. should always try to avoid.
		//with the blocking code, when one user goes to the about page, any other user that tries to go to the home page will be blocked, because the server is serving the about page user synchronously instead of offloading the for loops to the queue.

		//BLOCKING CODE: the for loop is synchronous
		for (let i = 0; i < 1000; i++) {
			for (let j = 0; j < 1000; j++) {
				console.log(`${i} ${j}`);
			}
		}
		res.end("About Page");
	}
	res.end("Error Page");
});

server.listen(5000, () => {
	console.log("Server listening on port : 5000....");
});
