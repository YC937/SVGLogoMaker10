const Shape = require('./shape');

class Triangle extends Shape {
    constructor(textLogo, textColor, shape, shapeColor) {
      super(textLogo, textColor, shape, shapeColor);
      this.shapeColor = shapeColor;
    }
  
    formShape(shape) {
      shape = `<polygon points="145,20 280,150 40,150" fill="${this.shapeColor}"/>`;
      super.formShape(shape);
      return shape;
    }
  
    formLogo() {
      return super.formLogo();
    }
};

module.exports = Triangle;
