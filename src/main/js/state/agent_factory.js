define(function(require) {
  var Agent = require('state/agent');
  var Random = require('state/random');

  function AgentFactory() {
    this.SexDistribution = 0.5;
    this.TotalStatPoints = 16;
    this.MaxStatValue = 5;
    this.FirstNames = ['Roman', 'Arne', 'Matt', 'Krieger', 'Wes', 'Yash',
      'James'];
    this.LastNames = ['Bond', 'Kent', 'Dutchess', 'Krieger', 'Nurik',
      'Rooman-Kurrik', 'Goodman'];

    this.makeAgent = function makeAgent() {
      var attr = {
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

      attr.name = this.chooseName();

      // Stats distribution.
      var statCount = this.TotalStatPoints;
      while (statCount > 0) {
        var incremented = false;
        while (!incremented) {
          var statIndex = Random.chooseIndex(Agent.prototype.skills.length);
          if (attr[Agent.prototype.skills[statIndex]] < this.MaxStatValue) {
            attr[Agent.prototype.skills[statIndex]]++;
            statCount--;
            incremented = true;
          }
        }
      }

      return new Agent(attr);
    };

    this.chooseName = function chooseName() {
      var firstName = this.FirstNames[
          Random.chooseIndex(this.FirstNames.length)];
      var lastName = this.LastNames[
          Random.chooseIndex(this.LastNames.length)];
      return firstName + ' ' + lastName;
    };
  }

  return AgentFactory;

});
