define(function (require) {
  function DeterministicRandom() {
    this.chooseIndex = function chooseIndex(count) {
      return 0;
    };

    this.chooseSuccess = function chooseSuccess(prob) {
      return prob > 0.5;
    };

    this.gaussian = function gaussian(mean, stddev) {
      return mean;
    };
  }
  console.log('Mock Random loaded!');
  return new DeterministicRandom();
});


