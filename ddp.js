var ws = require('faye-websocket');
var logger = require('./log');
var _ = require('underscore');
var nextId = 0;
var socket;

// Register handlers for each message type sent from DDP server.
var registerCallbacks = function(socket) {
	logger.warn('Not yet implemented connection');
	var events = {
		// Handle an 'open' event, connect to server.
		// Should send a 'connect' message, with version and support [versions].

		// Handle 'message' events. Check e.data.
	};

	_.each(events, function(fn, ev) {
		socket.on(ev, fn);
	});

};

// Expects message object and sends to DDP server.
var send = function(socket, message) {
	socket.send(JSON.stringify(message));
};

// Attempts to connect to DDP server, and registers callbacks to handle
// server messages.
var start = function(url) {

	// Open socket connection to URL that has been provided.
	socket = new ws.Client(url);

	// Register handlers for each message type sent from DDP server.
	registerCallbacks(socket);

};

// Attempts to call a method on the server.
// Should send a 'method' message, with params, fn name and id.
var call = function(fnName, params, cb) {
	logger.warn('not yet implemented call.');
};

module.exports = {
	start: _.once(start),
	send: send,
	call: call
};
