Meteor.methods({
  'addPlayer' : function(newPlayerName) {
    Players.insert({
      name: newPlayerName,
      score: 0,
      creator: Meteor.userId()
    });
  },
  
  'deletePlayer' : function(playerId) {
    Players.remove(playerId);
  },
  
  'modifyScore' : function(playerId, value) {
    Players.update(
      {_id: playerId},
      {$inc: {score: value}}
    );
  }
});