// var ddp = require('./ddp');
// var slideContent = require('./slide');
var circuit = require('./board');

circuit.ready(function(button) {
	// Call method on server using slidecontent.
	button.on('down', function(e) {
		console.log('button pressed');
	});

});

// DDP target (ws://localhost:3000/websocket).
