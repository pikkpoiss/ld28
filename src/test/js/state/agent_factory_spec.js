define(['state/agent_factory', 'state/agent', 'state/random'],
       function(AgentFactory, Agent, Random) {
  describe('AgentFactory', function() {
    var factory;

    beforeEach(function() {
      factory = new AgentFactory();
    });

    describe('when making an agent', function() {
      beforeEach(function() {
        spyOn(factory, 'chooseName').andReturn('Roman Bond');
        spyOn(factory, 'distributeStatPoints').andReturn();
      });

      it('should return an agent', function() {
        var agent = factory.makeAgent();
        expect(agent instanceof Agent).toBe(true);
      });

      it('should make a female agent', function() {
        factory.SexDistribution = 1;
        var agent = factory.makeAgent();
        expect(agent.attr.sex).toBe('Female');
      });

      it('should make a male agent', function() {
        factory.SexDistribution = 0;
        var agent = factory.makeAgent();
        expect(agent.attr.sex).toBe('Male');
      });

      it('should have a name', function() {
        var agent = factory.makeAgent();
        expect(factory.chooseName).toHaveBeenCalled();
      });
    });

    describe('when choosing a name', function() {
      it('should choose a name', function() {
        Random.nextIndexes([0, 0]);
        expect(factory.chooseName()).toBe('Roman Bond');
      });

      it('should not duplicate names', function() {
        Random.nextIndexes([0, 0, 0, 0, 1, 1]);
        var name1 = factory.chooseName();
        var name2 = factory.chooseName();
        expect(name1).not.toBe(name2);
      });
    });
  });

});
