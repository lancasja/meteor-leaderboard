/* ============= */
/* == Helpers == */
/* ============= */

Template.leaderboard.player = function() {
  
  return Players.find(
    {creator: Meteor.userId()},
    {sort: {score: -1, name: 1}}
  );
}

Template.leaderboard.selectedPlayer = function() {

  var selectedPlayer = Session.get('selectedPlayer');
  var playerId = this._id;

  if (selectedPlayer === playerId) {
    return 'selected';
  }
}

Template.leaderboard.showSelectedPlayer = function() {

  var selectedPlayer = Session.get('selectedPlayer');

  return Players.findOne(selectedPlayer);
}

/* ============ */
/* == Events == */
/* ============ */

Template.leaderboard.events({
  'click tr.player' : function(e) {
    e.preventDefault();

    var playerId = this._id;

    Session.set('selectedPlayer', playerId);
  },

  'click td.add-points' : function(e) {
    e.preventDefault();

    Meteor.call('modifyScore', this._id, 5);
  },
  
  'click td.remove-points' : function(e) {
    e.preventDefault();
    
    Meteor.call('modifyScore', this._id, -5);
  },
  
  'click td.delete' : function(e) {
    e.preventDefault();
    
    Meteor.call('deletePlayer', this._id);
  }
});