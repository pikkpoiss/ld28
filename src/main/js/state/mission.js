define(function (require) {
  var $ = require('jquery');
  var Random = require('state/random');

  function Mission(attr, onFinished){
    this.agents = [];

    this.attr = $.extend({
      skill_hacking:      0,
      skill_managing:     0,
      skill_driving:      0,
      skill_seduction:    0,
      skill_fighting:     0,
      max_agents:         5,
      duration_planning:  5,
      duration_executing: 10,
      importance:         0.1,
      name:               'Simple mission',
      description:        'A simple task'
    }, attr);

    this.addAgent = function addAgent(agent) {
      if (this.state == 'planning' &&
          this.agents.length < this.attr.max_agents) {
        this.agents.push(agent);
        return true;
      }
      return false;
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

    this.tick = function tick() {
      this.time += 1;
      console.log('Mission', this.state, this.time);
      switch (this.state) {
      case 'planning':
        if (this.time >= this.attr.duration_planning) {
          this.state = 'executing';
          this.time = 0;
          if (this.agents.length == 0) {
            // Failed because no agents were assigned in time.
            this.success = false;
            this.finished = true;
            if (onFinished) {
              onFinished(this.success, this);
            }
          }
        }
        break;
      case 'executing':
        if (this.time >= this.attr.duration_executing) {
          this.finished = true;
          this.success = Random.chooseSuccess(this.probability());
          onFinished(this.success, this);
        }
        break;
      }
    };

    this.state = 'planning';
    this.time = 0;
    this.finished = false;
    this.success = false;
    console.log('New mission! ' + this.attr.name);
  }

  return Mission;
});


