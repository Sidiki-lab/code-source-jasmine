//Tp4: NodeJS with jasmine learning with matchers exemple

// --- Jasmine Matchers ---

//toBeEqual
//toBeDefined
//toBeUndefined
//toBeTruthy
//tobeFasly
//tobeLessThan
//tobeGreaterThan
//tobeMatch
//tobeContain

describe("toBeDefined & tobeUndefined", () => {
  it("is defined", () => {
    let name = "Sidiki";
    expect(name).toBeDefined();
  });

  it("is not defined", () => {
    let name;
    expect(name).toBeUndefined();
  });

  it("is less than 10", () => {
    expect(5).toBeLessThan(10);
  });

  it("is more than 10", () => {
    expect(20).toBeGreaterThan(10);
  });
});
