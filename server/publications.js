Meteor.publish('players', function() {
  return Players.find({creator: this.userId});
});