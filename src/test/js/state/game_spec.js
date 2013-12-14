describeComponent('state/game', function () {
  beforeEach(function () {
    setupComponent();
  });

  it('should have a foo', function () {
    expect(this.component.foo).toBe('bar');
  });
});
