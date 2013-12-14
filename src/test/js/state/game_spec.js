describeComponent('state/game', function () {
  beforeEach(function() {
    setupComponent({
      numAgents: 5
    });
  });

  it('should have the correct number of agents', function() {
    expect(this.component.agents.length).toBe(5);
  });

  it('should have a mole', function() {
    expect(this.component.mole).not.toBe(null);
  });

  describe('when tick is called', function() {
    it('should increment time', function() {
      expect(this.component.time).toBe(0);
      this.component.tick();
      expect(this.component.time).toBe(1);
    });

    describe('when the tick is past the next mission threshold', function() {
      it('should send the correct event', function() {
        var eventSpy = spyOnEvent(this.component.node, 'newMission');
        this.component._nextmission = 1;
        this.component.tick()
        expect(eventSpy).toHaveBeenTriggeredOn(this.component.node);
      });

      it('should change _nextmission', function() {
        this.component._nextmission = 1;
        this.component.tick()
        expect(this.component._nextmission).toBeGreaterThan(1);
      });
    });
  });
});
