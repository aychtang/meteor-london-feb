// Logger

var info = function(msg) {

	log('INFO: ' + msg);

};

var warning = function(msg) {

	log('WARN: ' + msg);

};

module.exports = {
	info: info,
	warn: warning
};
