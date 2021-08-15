const globalmiddleware = (req, res, next) => {
	console.log("happens in all routes");
	next();
};

module.exports = globalmiddleware;
