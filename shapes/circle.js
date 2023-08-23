const Shape = require('./shape');

class Circle extends Shape {
    constructor(textLogo, textColor, shape, shapeColor) {
      super(textLogo, textColor, shape, shapeColor);
      this.shapeColor = shapeColor;
    }
  
    formShape(shape) {
      shape = `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`;
      super.formShape(shape);
      return shape;
    }
  
    formLogo() {
      return super.formLogo();
    }
};

module.exports = Circle;
