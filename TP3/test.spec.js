// Tp3: NodeJS Unit Test with Jasmine

const calc = require("./calculator");

describe("calulator fonction", () => {
  describe("add", () => {
    it("should add two numbers", () => {
      let value = calc.add(3, 2);
      expect(value).toBe(5);
    });
  });

  describe("subtract", () => {
    it("should substract two numbers", () => {
      let value = calc.substract(3, 2);
      expect(value).toBe(1);
    });
  });

  describe("multiply", () => {
    it("should multiply two numbers", () => {
      let value = calc.multiply(3, 2);
      expect(value).toBe(6);
    });
  });

  describe("divide", () => {
    it("should multiply two numbers", () => {
      let value = calc.divide(3, 3);
      expect(value).toBe(1);
    });
  });
});

// another syntaxe
/*
describe("Calculator function", () => {
  it("should add two numbers", () => {
    let value = calc.add(3, 2);
    expect(value).toBe(5);
  });

  it("should substract two numbers", () => {
    let value = calc.substract(3, 2);
    expect(value).toBe(1);
  });

  it("should multiply two numbers", () => {
    let value = calc.multiply(3, 2);
    expect(value).toBe(6);
  });

  it("should multiply two numbers", () => {
    let value = calc.divide(3, 3);
    expect(value).toBe(1);
  });
});

*/