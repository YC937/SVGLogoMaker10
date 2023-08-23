const Square = require("../shapes/square");

describe("Shape", () => {
  describe("formShape", () => {
    it("should set shape to square given the shape color", () => {
      const expected = `<rect x="70" y="20" width="160" height="160" fill="Blue"/>`;
      const shape = new Square();
      shape.shapeColor = "Blue";
      expect(shape.formShape()).toEqual(expected);
    });
  });
});