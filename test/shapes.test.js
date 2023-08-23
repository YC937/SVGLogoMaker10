const Shape = require("../shapes/shape");

describe("Shape", () => {
  describe("formShape", () => {
    it("should set shape given the shape color", () => {
      const expected = ``;
      const shape = new Shape();
      shape.shapeColor = "aquamarine";
      expect(shape.formShape()).toEqual(expected);
    });
  });
});
