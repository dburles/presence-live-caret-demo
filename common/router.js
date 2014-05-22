Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', {
    path: '/'
  });
  this.route('form1', {
    path: '/form1'
  });
  this.route('form2', {
    path: '/form2'
  });
});
