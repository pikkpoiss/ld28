define(function (require) {
  var defineComponent = require('flight/lib/component');
  var Agent = require('state/agent');
  var Random = require('state/random');

  function Game() {
    this.defaultAttrs({
      numAgents: 30
    });

    this.agents = [];
    this.mole = null;

    this.selectMole = function selectMole() {
      this.mole = this.agents[Random.chooseIndex(this.attr.numAgents)];
    };

    this.populateAgents = function populateAgents() {
      for (var i = 0; i < this.attr.numAgents; i++) {
        this.agents.push(new Agent({
          name: 'Agent ' + i
        }));
      };
    };

    this.after('initialize', function() {
      console.log('I live!');
      this.populateAgents();
      this.selectMole();
    });
  }

  return defineComponent(Game);
});
