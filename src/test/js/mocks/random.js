define(function (require) {
  function DeterministicRandom() {
    this.queued_indexes = [];

    this.chooseIndex = function chooseIndex(count) {
      if (this.queued_indexes.length > 0) {
        return this.queued_indexes.shift();
      }
      return 0;
    };

    this.nextIndexes = function nextIndexes(counts) {
      this.queued_indexes = counts;
    }

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


