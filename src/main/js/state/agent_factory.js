define(function(require) {
  var Agent = require('state/agent');
  var Random = require('state/random');

  function AgentFactory() {
    this.SexDistribution = 0.5;

    this.makeAgent = function makeAgent() {
      attr = {
        sex: 'Male',
        skill_hacking: 0,
        skill_managing: 0,
        skill_driving: 0,
        skill_seduction: 0,
        skill_fighting: 0,
        name: 'James Bond'
      };
      if (Math.random() < this.SexDistribution) {
        attr.sex = 'Female'
      }
      return new Agent(attr);
    };
  }
  return AgentFactory;

});
