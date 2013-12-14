require.config({
  baseUrl: 'src/main/js',
  paths: {
    jquery:  '../../../bower_components/jquery/jquery',
    es5shim: '../../../bower_components/es5-shim/es5-shim',
    es5sham: '../../../bower_components/es5-shim/es5-sham',
    flight:  '../../../bower_components/flight'
  },
});

require(['state/game'], function(Game) {
  Game.initialize();
});
