const Circle = require("../shapes/circle");

describe("Shape", () => {
  describe("formShape", () => {
    it("should set shape to circle given the shape color", () => {
      const expected = `<circle cx="150" cy="100" r="80" fill="#FF0000"/>`;
      const shape = new Circle();
      shape.shapeColor = "Black";
      expect(shape.formShape()).toEqual(expected);
    });
  });
});
