define(function (require) {
  var defineComponent = require('flight/lib/component');
  return defineComponent(Game);

  function Game() {
    this.foo = 'bar';

    this.after('initialize', function() {
      console.log('I live!');
    });
  }
});
