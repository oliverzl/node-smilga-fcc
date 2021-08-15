const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
	const { name } = req.body;
	console.log(name); //input value in index.html form

	if (name) {
		return res.status(200).send(`Welcome ${name}`);
	}

	res.status(401).send("Please provide credentials");
});

module.exports = router;
