const EventEmitter = require("events");

//Create Class
class myEmitter extends EventEmitter {}

//init object
const Emitter = new myEmitter();

//Event Listener
Emitter.on("event", () => console.log("event fired!"));

Emitter.emit("event");

Emitter.emit("event");

Emitter.emit("event");
