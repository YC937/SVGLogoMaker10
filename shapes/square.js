const Shape = require('./shape');

class Square extends Shape {
    constructor(textLogo, textColor, shape, shapeColor) {
      super(textLogo, textColor, shape, shapeColor);
      this.shapeColor = shapeColor;
    }
  
    formShape(shape) {
      shape = `<rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}"/>`;
      super.formShape(shape);
      return shape;
    }
  
    formLogo() {
      return super.formLogo();
    }
};

module.exports = Square;
