// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
//questions for readme sections
const questions = [
    {
        type: 'input',
        message: "What is your project title?",
        name: 'title',
    },
    {
        type: 'input',
        message: "Please enter a description of your project",
        name: 'description', 
    },
    {
        type: 'input',
        message: "Please enter the installation instructions for your project",
        name: 'installation', 
    },
    {
        type: 'input',
        message: "Please enter the usage information for your project",
        name: 'usage', 
    },
    {
        type: 'input',
        message: "Please enter the contribution guidelines for your project",
        name: 'contribution', 
    },
    {
        type: 'input',
        message: "Please enter the test instructions for your project and provide examples",
        name: 'tests', 
    },
    {
        type: 'list',
        message: "Please select the license for your project",
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1','Mozilla Public License 2.0', 'The Unlicense', 'No License'],
        name: 'license', 
    },
    {
        type: 'input',
        message: "Please enter your GITHUB username",
        name: 'username', 
    },
    {
        type: 'input',
        message: "Please enter your email address for people to send you questions",
        name: 'email', 
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success! Enjoy your new readme :) '));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const filename =  `${answers.title.toLowerCase().split(' ').join('-')}-README.md`;
            const readmeContents = generateMarkdown(answers);
            writeToFile(filename, readmeContents);
        });
}

// Function call to initialize app
init();
