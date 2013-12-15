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
      }, this.onMissionFinished.bind(this));
      this.missions.push(mission);
      this.trigger('newMission', mission);
      var step = Random.gaussian(this.attr.missionMean, this.attr.missionStddev);
      this._nextmission += step;
    };

    this.checkWin = function checkWin() {
      if (this.score <= 0.0) {
        this.trigger('end', false);
      } else if (this.score >= 1.0) {
        this.trigger('end', true);
      }
    };

    this.onMissionFinished = function onMissionFinished(success, mission) {
      console.log('Mission finished', success, mission);
      var index = this.missions.indexOf(mission);
      this.missions.splice(index, 1);
      if (success) {
        this.score += mission.attr.importance;
      } else {
        this.score -= mission.attr.importance;
      }
      this.checkWin();
      this.trigger('changeState', this);
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
      for (var i=0, mission; mission = this.missions[i]; i++) {
        mission.tick();
      }
      this.trigger('changeState', this);
    };

    this.after('initialize', function() {
      this.populateAgents();
      this.selectMole();
      this.trigger('changeState', this);
    });
  }

  return defineComponent(Game);
});
