define(function (require) {
  var $ = require('jquery');

  function Mission(attr){
    this.agents = [];

    this.attr = $.extend({
      skill_hacking:   0,
      skill_managing:  0,
      skill_driving:   0,
      skill_seduction: 0,
      skill_fighting:  0,
      max_agents:      5,
      name:            'Simple mission',
      description:     'A simple task'
    }, attr);

    this.addAgent = function addAgent(agent) {
      if (this.agents.length < this.attr.max_agents) {
        this.agents.push(agent);
      }
    };

    this.probability = function probability() {
      var scores = {
        skill_hacking:   0,
        skill_managing:  0,
        skill_driving:   0,
        skill_seduction: 0,
        skill_fighting:  0
      }
      for (var i=0, agent; agent = this.agents[i]; i++) {
        for (var key in scores) {
          if (agent.attr.hasOwnProperty(key)) {
            scores[key] += agent.attr[key];
          }
        }
      }
      var max = 0;
      var tot = 0;
      for (var key in scores) {
        max += this.attr[key];
        tot += Math.min(scores[key], this.attr[key]);
      }
      return tot / max;
    };

    console.log('New mission! ' + this.attr.name);
  }

  return Mission;
});


