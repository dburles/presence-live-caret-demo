Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Template.users.helpers({
  users: function() {
    return Meteor.user() && Meteor.presences.find();
  }
});

Template.user.helpers({
  user: function() {
    return Meteor.users.findOne(this.userId);
  }
});

Template.form1.rendered = function() {
  bindLiveCaret();
};

Template.form2.rendered = function() {
  bindLiveCaret();
};
