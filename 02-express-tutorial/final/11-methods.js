const express = require("express");
const app = express();
let { people } = require("./data");

// static assets
//serves index.html from ./methods-public on root, '/'. basically like app.get('/')
app.use(express.static("./methods-public"));
// parse form data, for the html way of POST. this parses the json and adds it to the people array from req.body.
app.use(express.urlencoded({ extended: false }));
// parse json, this is for javascript.html way of POST. to be able to parse in the form data which turns into JSON, to add in to array.
app.use(express.json());

//GET METHOD
app.get("/api/people", (req, res) => {
	res.status(200).json({ success: true, data: people });
});

//IMPORTANT to note that app.post and app.get to the same url do not do the same thing.
app.post("/api/people", (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res.status(400).json({ success: false, msg: "please provide name value" });
	}
	res.status(201).json({ success: true, person: name });
});

app.post("/api/postman/people", (req, res) => {
	//const { name } = req.body; <- destructuring the name here sends it as a key value in the whole object. to send a json object, do not destructure it.
	const name = req.body;
	console.log(name);

	if (!name) {
		return res.status(400).json({ success: false, msg: "please provide name value" });
	}
	res.status(201).json({ success: true, data: [...people, name] });
});

//on index.html form submission
app.post("/login", (req, res) => {
	const { name } = req.body;
	console.log(name); //input value in index.html form

	if (name) {
		return res.status(200).send(`Welcome ${name}`);
	}

	res.status(401).send("Please provide credentials");
});

//PUT = UPDATE, the server needs to know which item to update, ( Params ),  and what to update inside ( req.body )
app.put("/api/people/:id", (req, res) => {
	const { id } = req.params;
	const { name } = req.body;

	const person = people.find((person) => person.id === Number(id));

	if (!person) {
		return res.status(404).json({ success: false, msg: `no person with id ${id}` });
	}
	const newPeople = people.map((person) => {
		if (person.id === Number(id)) {
			person.name = name;
		}
		return person;
	});
	res.status(200).json({ success: true, data: newPeople });
});

//functionality is the same as above put and post method, just without the destructuring
app.delete("/api/people/:id", (req, res) => {
	const person = people.find((person) => person.id === Number(req.params.id));
	if (!person) {
		return res.status(404).json({ success: false, msg: `no person with id ${req.params.id}` });
	}
	const newPeople = people.filter((person) => person.id !== Number(req.params.id));
	return res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
	console.log("Server is listening on port 5000....");
});
