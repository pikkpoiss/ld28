define(function (require) {
  var $ = require('jquery');

  function Mission(attr){
    this.attr = $.extend({
      agents:               [],
      difficulty_hacking:   0,
      difficulty_managing:  0,
      difficulty_driving:   0,
      difficulty_seduction: 0,
      difficulty_fighting:  0,
      name:                 'Simple mission',
      description:          'A simple task'
    }, attr);

    console.log('New mission! ' + this.attr.name);
  }

  return Mission;
});


