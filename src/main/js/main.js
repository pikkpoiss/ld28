require.config({
  baseUrl: '../js',
  paths: {
    jquery:  '../../../bower_components/jquery/jquery',
    es5shim: '../../../bower_components/es5-shim/es5-shim',
    es5sham: '../../../bower_components/es5-shim/es5-sham',
    flight:  '../../../bower_components/flight'
  },
});

require(['state/game', 'ui/game_ui'], function(Game, GameUI) {
  GameUI.attachTo(document);
  Game.attachTo(document);
});
