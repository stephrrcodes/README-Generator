// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const utils = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt(
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?' 
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?' 
    },
    {
        type: 'input',
        name: 'installation instructions',
        message: 'What are the installation instructions of the project?' 
    },
    {
        type: 'input',
        name: 'usage information',
        message: 'What is the usage information of the project?' 
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'Who has contributed to the project?' 
    },
    {
        type: 'input',
        name: 'test instructions',
        message: 'What tests are there of the project?' 
    },
    )
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
