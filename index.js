const fs = require("fs");
const inquirer = require("inquirer");
const MaxLenInpProm = require('inquirer-maxlength-input-prompt');
const Circle = require("./shapes/circle");
const Triangle = require("./shapes/triangle");
const Square = require("./shapes/square");


//Init function.
function init () {
    console.log(`\nHi! This is the shape and text generator!
    \nFollow the instructions to generate a new logo.\n`);

    inquirer.registerPrompt('maxlength-input', MaxLenInpProm);

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
            message: `2) Pick a color for your charachters. (ex: type in "blue"):`,
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
            message: `4) Pick a shape color. (type in 'red'):`
        },
        
    ]).then(answers => next(answers)) 
    
}

init();

function next(answers) {
    switch (answers.shape) {
    case "triangle":
      const newTria = new Triangle(
        answers.textLogo, 
        answers.textColor, 
        answers.shape, 
        answers.shapeColor
        );

        console.log(newTria);
      fs.writeFile("./svg/triangle.svg", newTria.formLogo(), (err) => {
        err
          ? console.err(err)
          : console.log(`\nGenerated ${answers.shape}.svg!\n`);
      });
      break;
    case "circle":
      const newCir = new Circle(
        answers.textLogo, 
        answers.textColor, 
        answers.shape, 
        answers.shapeColor
      );
      console.log(newCir);
      fs.writeFile(
        "./svg/circle.svg",
        newCir.formLogo(),
        (err) => {
          err
            ? console.err(err)
            : console.log(`\nGenerated ${answers.shape}.svg!\n`);
        }
      );
      break;
    default:
      const newSqu = new Square(
        answers.textLogo, 
        answers.textColor, 
        answers.shape, 
        answers.shapeColor
      );
      console.log(newSqu)
      fs.writeFile("./svg/square.svg", newSqu.formLogo(), (err) => {
        err
          ? console.err(err)
          : console.log(`\nGenerated ${answers.shape}.svg!\n`);
      });
      break;
  }}
  