define(function (require) {
  function Random() {
    // Thanks http://www.protonfish.com/random.shtml !
    this._standard_normal = function standard_normal() {
      return (Math.random() * 2 - 1) +
        (Math.random() * 2 - 1) +
        (Math.random()*2 - 1);
    };

    this.chooseIndex = function chooseIndex(count) {
      console.log('Got count: ' + count);
      debugger;
      return Math.floor(Math.random() * count);
    };

    this.gaussian = function gaussian(mean, stddev, min) {
      var value = Math.round(this._standard_normal() * stdev + mean);
      if (!isNaN(min)) {
        value = Math.max(min, value);
      }
      return value
    };
  }

  return new Random();
});

