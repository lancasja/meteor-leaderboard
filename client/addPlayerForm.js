Template.addPlayer.events({
  'submit form' : function(e, t) {
    e.preventDefault();
    
    var newPlayerName = t.find('#addPlayer').value;
    
    if (newPlayerName.length > 0) {
      Meteor.call('addPlayer', newPlayerName);
    }
  }
});