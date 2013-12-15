define(function (require) {
  var defineComponent = require('flight/lib/component');

  function GameUI() {
    this.render = function render(evt, game) {
      console.log(game);
      ngGameStateAPI.setGame(game);
    };

    this.after('initialize', function() {
      this.on('changeState', this.render);
    });
  }

  return defineComponent(GameUI);
});

