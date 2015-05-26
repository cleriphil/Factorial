describe("factorial", function() {
  it("returns 1 as the factorial of 0", function() {
    expect(factorial(0)).to.equal(1);
  });

  it("returns 1 as the factorial of 1", function() {
    expect(factorial(1)).to.equal(1);
  });

  it("returns 2 as the factorial of 2", function() {
    expect(factorial(2)).to.equal(2);
  });

  it("returns 120 as the factorial of 5", function() {
    expect(factorial(5)).to.equal(120);
  });
});
