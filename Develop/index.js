// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
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
        message: 'Are there any contribution guidelines to the project?' 
    },
    {
        type: 'input',
        name: 'test instructions',
        message: 'What tests are there of the project?' 
    },
    {
        type: "checkbox",
        message: "Choose a license to add to the project.",
        name: "license",
        choices: [ "MIT","IBM","Mozilla",]
    },
    {
        type: "input",
        name: "creator",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub Username?",
    },
    {
        type: "input",
        name: "userEmail",
        message: "Please enter your email.",
    },
    {
        type: "input",
        name: "repo",
        message: "What is the URL of the github repo?",
    },
];

// TODO: Create a function to write README file
const writeToFile = dataInput => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./newREADME.md', dataInput, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            console.log(data);
        var dataInput = generateMarkdown(data);
        writeToFile(dataInput)
        });
}
// Function call to initialize app
init();

module.exports = questions;