define(function (require) {
  var $ = require('jquery');

  function Agent(attr){
    this.attr = $.extend({
      sex: 'Male',
      skill_hacking:    0,
      skill_managing:   0,
      skill_driving:    0,
      skill_seduction:  0,
      skill_fighting:   0,
      name:             'James Bond'
    }, attr);

    console.log('My name is ' + this.attr.name);
  };

  Agent.prototype.skills = ['skill_hacking', 'skill_managing', 'skill_driving',
      'skill_seduction', 'skill_fighting'];

  return Agent;
});

