const express = require("express");
const path = require("path");

const app = express();

//the express.static takes the static resources =  styles, logo, etc from the public folder from root. static assets are assets that the server does not need to change.
//setup static middleware.
//APP.USE is for SETTING UP MIDDLEWARE
app.use(express.static("./public"));

//we need an absolute path:  path.resolve __dirname because, when someone clones this project to their repo, we do not know the file. path.resolve will join the current dir of this file, in this case app.js, with /navbar-app/index.html
app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

//adding to static assets
// SSR (Server side rendering)

//this is the all method, for handling all HTTP verbs, get, put etc. the path that is not declared, we represent with '*'
app.all("*", (req, res) => {
	res.status(404).send("resource not found");
});

app.listen(5000, () => {
	console.log("server is listening on port 5000....");
});
