var ddp = require('./ddp');
var slideContent = require('./slide');
var circuit = require('./board');

circuit.ready(function(button) {
	// Call method on server using slidecontent.
	button.on('down', function(e) {
		ddp.call('cλz_-=@z@`€£$%&*)_+_++±_-`', slideContent());
		console.log('button pressed');
	});

});

// DDP target (ws://localhost:3000/websocket).
ddp.start('ws://howard-feb.meteor.com/websocket');
