define(function (require) {
  var defineComponent = require('flight/lib/component');

  function GameUI() {
    this.render = function render(evt, game) {
      console.log(game);
      ngGameStateAPI.setGame(game);
    };

    this.onDragStart = function(evt) {
      console.log(this, evt);
      evt.target.style.opacity = '0.4';
      evt.originalEvent.dataTransfer.effectAllowed = 'move';
      evt.originalEvent.dataTransfer.setData('text/html', evt.target.innerHTML);
    };

    this.onDragOver = function(evt) {
      if (evt.preventDefault) {
        evt.preventDefault();
      }
      evt.originalEvent.dataTransfer.dropEffect = 'move';
      return false;
    };

    this.onDragEnter = function(evt) {
      evt.target.classList.add('over');
    };

    this.onDragLeave = function(evt) {
      evt.target.classList.remove('over');
    };

    this.after('initialize', function() {
      this.on('changeState', this.render);
      this.on('dragstart', this.onDragStart);
      this.on('dragenter', this.onDragEnter);
      this.on('dragover', this.onDragOver);
      this.on('dragleave', this.onDragLeave);
    });
  }

  return defineComponent(GameUI);
});

