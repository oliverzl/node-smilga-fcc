const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
const globalmiddleware = require("./globalmiddleware");

//  req => middleware => res

//app.use will put logger function as the middleware for all server methods below it: THE ORDER MATTERS

//this app.use below, will make logger, globalmiddleware, and authorize middleware, happen in ALL ROUTES
app.use([logger, authorize, globalmiddleware]);

// -------------- START SPECIFIC MIDDLEWARE ROUTES -----------------

//we can also put a path for app.use: for the line below, logger will apply to any route after /api, means /api/products and /api/items only.
// api/home/about/products

//UNCOMMENT DIRECTLY BELOW FOR SPECIFIC MIDDLEWARE ROUTES
// app.use("/api", logger);
// app.use("/about", authorize);
// app.use("/", globalmiddleware);

// -------------- END SPECIFIC MIDDLEWARE ROUTES -----------------

//adding multiple middleware into a method call:
// app.get("/", [logger, authorize], (req, res) => {
// 	res.send("Home");
// });

app.get("/", (req, res) => {
	res.send("Home");
});
app.get("/about", (req, res) => {
	res.send("About");
});
app.get("/api/products", (req, res) => {
	res.send("Products");
});
app.get("/api/items", (req, res) => {
	console.log(req.user);
	res.send("Items");
});

app.listen(5000, () => {
	console.log("Server is listening on port 5000....");
});
