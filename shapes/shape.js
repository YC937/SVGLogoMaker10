class Shape {
    constructor(textLogo, textColor, shape, shapeColor) {
       this.textLogo = textLogo;
       this.textColor = textColor;
       this.shape = shape;
       this.shapeColor = shapeColor;
    }

    formShape(shape) {
       shape = ``;
       return shape;
    }

    formLogo() {
        let logo = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.formShape()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textLogo}</text>
        
        </svg>`;
        return logo;
    }
}

module.exports = Shape;
