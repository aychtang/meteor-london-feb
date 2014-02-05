
var words = ['BEER', 'LONDON', 'PIZZA', 'JAVASCRIPT', 'METEOR', 'λ'];
var colors = ['#33B5E5', '#AA66CC', '#99CC00', '#FFBB33', '#FF4444'];

var selectRandom = function(array) {
	return array[~~(Math.random() * array.length)];
};

// Function that returns random [word, color].
module.exports = function() {
	return [selectRandom(words), selectRandom(colors)];
};
