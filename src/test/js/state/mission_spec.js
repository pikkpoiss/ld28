define(['state/mission'], function(Mission) {
  describe('Mission', function() {
    var mission;

    beforeEach(function() {
      mission = new Mission();
    });

    it('does stuff', function() {
      console.log('Mission', mission);
    });
  });
});
