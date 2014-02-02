var ws = require('faye-websocket');
var _ = require('underscore');
var socket;

// Logging methods.
var log = function(msg) {
	console.log(msg);
};

var info = function(msg) {
	log('INFO: ' + msg);
};

// DDP client.
var registerCallbacks = function(socket) {

	var events = {
		'open' : function(e) {
			send(socket, {
				msg: 'connect',
				version: 'pre1',
				support: ['pre1']
			});
		},
		'message' : function(e) {
			info(e.data);
		}
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

	socket = new ws.Client(url);
	registerCallbacks(socket);

};

module.exports = {
	start: start,
	send: send
};
