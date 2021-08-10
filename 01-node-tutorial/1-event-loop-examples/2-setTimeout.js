// started operating system process
console.log("first");
setTimeout(() => {
	console.log("second");
}, 0);
console.log("third");
// completed and exited operating system process

//setTimeout will still offload the console.log('second') to the event loop. so the output is: first third second
