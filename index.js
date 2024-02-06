const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter Project Name: '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Type a short description of the project: '
    },
    {
        type: 'input',
        name: 'install',
        message: 'How to install and Run the Project? '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the project? '
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Would you like to credit anyone?'
    },
    {
        type: 'list',
        name: 'licence',
        message: 'Choose a licence: ',
        choices: [
            'MIT',
            'Apache Licence 2.0',
            'GNU GPLv3'
        ]
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How to contribute?'
    },
    {
        type: 'input',
        name: 'git',
        message: 'What is your git profile?'
    },
    {
        type: 'input',
        name: 'email', 
        message: 'What is your email address?'
    }
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        err ? console.log(err) : console.log("succcess");
    })
}

// function to initialize program
function init() {
    const prompt = inquirer.createPromptModule();
    prompt(questions).then(answer =>
        writeToFile('./output/readme.md', answer));
}

// function call to initialize program
init();

