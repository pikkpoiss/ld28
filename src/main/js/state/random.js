define(function (require) {
  function Random() {
    // Thanks http://www.protonfish.com/random.shtml !
    this._standard_normal = function standard_normal() {
      return (Math.random() * 2 - 1) +
        (Math.random() * 2 - 1) +
        (Math.random()*2 - 1);
    };

    this.chooseIndex = function chooseIndex(count) {
      return Math.floor(Math.random() * count);
    };

    this.chooseSuccess = function chooseSuccess(prob) {
      return Math.random() < prob;
    };

    this.gaussian = function gaussian(mean, stddev, min) {
      var value = Math.round(this._standard_normal() * stddev + mean);
      if (!isNaN(min)) {
        value = Math.max(min, value);
      }
      return value
    };
  }

  return new Random();
});

