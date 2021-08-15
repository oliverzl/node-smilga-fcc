const logger = (req, res, next) => {
	const method = req.method;
	const url = req.url;
	const time = new Date().getFullYear();
	console.log(method, url, time);
	//either we send a response with this logger middleware
	//res.send('some example here')

	// OR, call next();

	//so that the next middleware, in this case the response, can function.
	next();
};

module.exports = logger;
