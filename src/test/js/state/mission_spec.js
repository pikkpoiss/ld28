define(['state/mission', 'state/agent'], function(Mission, Agent) {
  describe('Mission', function() {
    var mission;

    beforeEach(function() {
      mission = new Mission({
        skill_hacking:   10,
        skill_managing:  10,
        skill_driving:   10,
        skill_seduction: 10,
        skill_fighting:  10
      });
    });

    describe('when adding an agent', function() {
      beforeEach(function() {
        mission.addAgent(new Agent({
          skill_hacking: 5
        }));
      });

      it("should have a probability", function() {
        expect(mission.probability()).toBe(0.1);
      });
    });
  });
});
