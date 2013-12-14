define(function (require) {
  function Random() {
    this.chooseIndex = function chooseIndex(count) {
      return Math.floor(Math.random() * count);
    };
  }

  return new Random();
});

