//Module Dependencies 
const fs = require("fs");
const inquirer = require("inquirer");
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const Circle = require("./shapes/circle");
const Triangle = require("./shapes/triangle");
const Square = require("./shapes/square");



//Initial function.
function init () {
    console.log(`\nHi! This is the shape and text generator!
    \nFollow the instructions to generate a new logo.\n`);

    inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

    inquirer.prompt([
        {
            type: 'maxlength-input',
            name: 'textLogo',
            message: `\n 1) Write your logo characters. (Up to 3):`,
            maxLength: 3
        },
        {
            type: 'input',
            name: 'textColor',
            message: `2) Pick a color for your charachters. (ex: type in "blue" or "#0000FF"):`,
        },
        {
            type: "list",
            name: "shape",
            message: `3) Choose a shape from the list below:`,
            choices: ["square", "circle", "triangle"],
        },
        {
            type: "input",
            name: "shapeColor",
            message: `4) Pick a shape color. (type in 'red' or '#FF0000'):`
        },
        
    ]).then(answers => next(answers)) 
    
}

init();

function next(answers) {
    switch (answers.shape) {
    case "triangle":
      const newTriangle = new Triangle(
        answers.textLogo, 
        answers.textColor, 
        answers.shape, 
        answers.shapeColor
        );

        console.log(newTriangle);
      fs.writeFile("./svg/triangle.svg", newTriangle.formLogo(), (err) => {
        err
          ? console.err(err)
          : console.log(`\nGenerated ${answers.shape}.svg!\n`);
      });
      break;
    case "circle":
      const newCircle = new Circle(
        answers.textLogo, 
        answers.textColor, 
        answers.shape, 
        answers.shapeColor
      );
      console.log(newCircle);
      fs.writeFile(
        "./svg/circle.svg",
        newCircle.formLogo(),
        (err) => {
          err
            ? console.err(err)
            : console.log(`\nGenerated ${answers.shape}.svg!\n`);
        }
      );
      break;
    default:
      const newSquare = new Square(
        answers.textLogo, 
        answers.textColor, 
        answers.shape, 
        answers.shapeColor
      );
      console.log(newSquare)
      fs.writeFile("./svg/square.svg", newSquare.formLogo(), (err) => {
        err
          ? console.err(err)
          : console.log(`\nGenerated ${answers.shape}.svg!\n`);
      });
      break;
  }}
  