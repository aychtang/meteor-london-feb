var ws = require('faye-websocket');
var logger =require('./log');
var _ = require('underscore');
var nextId = 0;
var socket;


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
			logger.info(e.data);
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

// Attempts to call a method on the server.
var call = function(fnName, params, cb) {

	logger.warn('not yet implemented call.');

};

// write an onConnect fn that runs cb.
module.exports = {

	start: _.once(start),
	send: send,
	call: call

};
