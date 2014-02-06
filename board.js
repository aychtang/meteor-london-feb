var five = require("johnny-five");
var board = new five.Board();
var button, callback;

// Register a callback to be run once board is ready.
var registerCallback = function(cb) {
	callback = cb;
};

var mod = {
  board: board,
  button: button,
  ready: registerCallback
};

board.on('ready', function() {
	button = mod.button = new five.Button(8);

	if (callback) {
		callback(button);
	}
});

module.exports = mod;
