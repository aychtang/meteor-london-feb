Alerts = new Meteor.Collection("alerts")

if (Meteor.isClient) {

    Alerts.find().observe({
      added: function(item) {

        var el   = document.querySelector('.fill');
        var word = el.querySelector('.word');

        // Update color and text.
        el.style.background = item.color;
        word.innerHTML      = item.word;

        // Center the word element.
        word.style.marginLeft = '-' + word.offsetWidth / 2 + 'px';
        word.style.marginTop  = '-' + word.offsetHeight / 2 + 'px';

      }
    });

}

if (Meteor.isServer) {
	Meteor.methods({
    		'cλz_-=@z@`€£$%&*)_+_++±_-`': function(a, b) {
      			var a = a || 'No params passed yet :(';
      			var b = b || 'yellow';
      			Alerts.insert({word: a, color: b});
		}
  	});

  Alerts.remove({});
}
