const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    "Enter Project Name: ",
    "Type a short description of the project: ",
    "How to install and Run the Project? ",
    "How do you use the project? ",
    "Choose a licence: ",
    "How to contribute?"
];

const [title, description, install, usage, licence, contribution] = questions;

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateMarkdown(data), err => {
        err ? console.log(err) : console.log("succcess");
    })
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
