describeComponent('state/game', function () {
  beforeEach(function () {
    setupComponent({
      numAgents: 5
    });
  });

  it('should have the correct number of agents', function () {
    expect(this.component.agents.length).toBe(5);
  });

  it('should have a mole', function() {
    expect(this.component.mole).not.toBe(null);
  });
});
