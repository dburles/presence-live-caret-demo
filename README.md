presence-live-caret-demo
========================
Session.set('caretWatchConnectionId', Presences.findOne({_id:{$not:Meteor.connection._lastSessionId}})._id)
