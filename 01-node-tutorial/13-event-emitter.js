// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order. : MUST ALWAYS DECLARE BEFORE FUNCTION CALL
// additional arguments
// built-in modules utilize it

// listens for an event
//this is something like a FUNCTION DECLARATION, to do whatever is in the function body on 'response' event
customEmitter.on("response", (name, id) => {
	console.log(`data recieved user ${name} with id:${id}`);
});

//emits an event, this is something like a FUNCTION CALL
customEmitter.on("response", () => {
	console.log("some other logic here");
});

//FUNCTION CALL
customEmitter.emit("response", "john", 34);
