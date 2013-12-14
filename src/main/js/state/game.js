define(function (require) {
  var defineComponent = require('flight/lib/component');
  var Agent = require('state/agent');
  var Random = require('state/random');
  var Mission = require('state/mission');

  function Game() {
    this.defaultAttrs({
      numAgents:  30,
      missionMean:   10,
      missionStddev: 4
    });

    this.score        = 0.5;
    this.time         = 0;
    this.missions     = [];
    this.agents       = [];
    this.mole         = null;

    this._nextmission = 1;

    this.addMission = function addMission() {
      var mission = new Mission({
        name: 'New mission!'
      });
      this.missions.push(mission);
      this.trigger('newMission', mission);
      var step = Random.gaussian(this.attr.missionMean, this.attr.missionStddev);
      this._nextmission += step;
    };

    this.populateAgents = function populateAgents() {
      for (var i = 0; i < this.attr.numAgents; i++) {
        this.agents.push(new Agent({
          name: 'Agent ' + i
        }));
      };
    };

    this.selectMole = function selectMole() {
      this.mole = this.agents[Random.chooseIndex(this.attr.numAgents)];
    };

    this.tick = function tick() {
      this.time += 1;
      if (this.time >= this._nextmission) {
        this.addMission();
      }
    };

    this.after('initialize', function() {
      console.log('I live!');
      this.populateAgents();
      this.selectMole();
    });
  }

  return defineComponent(Game);
});
