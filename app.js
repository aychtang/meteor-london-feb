var ddp = require('./ddp');
var c = require('./board');

c.registerCallback(function(bt) {
	bt.on('down', function(e) {
		console.log('down');
	});
});

ddp.start('ws://localhost:3000/websocket');
