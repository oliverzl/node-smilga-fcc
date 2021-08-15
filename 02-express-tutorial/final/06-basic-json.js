const express = require("express");
const app = express();

//{ products } because it is in the node module exports object.
const { products } = require("./data");
app.get("/", (req, res) => {
	res.json(products);
});

app.listen(5000, () => {
	console.log("Server is listening on port 5000....");
});
