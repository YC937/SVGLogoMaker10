const Triangle = require("../shapes/triangle");

describe("Shape", () => {
  describe("formShape", () => {
    it("should set shape to triangle given the shape color", () => {
      const expected = `<polygon points="145,20 280,150 40,150" fill="Green"/>`;
      const shape = new Triangle();
      shape.shapeColor = "Green";
      expect(shape.formShape()).toEqual(expected);
    });
  });
});