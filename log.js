// Logger

var log = function(msg) {
	console.log(msg);
};

var info = function(msg) {
	log('INFO: ' + msg);
};

var warning = function(msg) {
	log('WARN: ' + msg);
};

module.exports = {
	log: log,
	info: info,
	warn: warning
};
