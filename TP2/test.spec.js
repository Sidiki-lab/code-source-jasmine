// Tp2: NodeJS Jasmine Describe Blocks Nested Example

describe("Nested describe demo", () => {
  beforeEach(function() {
    console.log("BeforeEach level 1");
  });

  describe("MyTest level 2", () => {
    beforeEach(function() {
      console.log("BeforeEach level 2");
    });

    describe("MyTest leve 3", () => {
      beforeEach(function() {
        console.log("BeforeEach level 3");
      });

      it("is a simple spec in level 3", function() {
        console.log("A simple spec in leve 3");

        expect(true).toBe(true);
      });

      afterEach(() => {
        console.log("after each leve 3");
      });
    });

    afterEach(() => {
      console.log("after each level 2");
    });
  });
  afterEach(() => {
    console.log("arfterEach level 1");
  });
});
