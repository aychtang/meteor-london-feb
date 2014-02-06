// var ddp = require('./ddp');
// var slideContent = require('./slide');

var circuit = require('./board');

circuit.ready(function(button) {
	button.on('down', function(e) {
		console.log('button pressed');
	});
});

