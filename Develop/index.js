// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'list',
        message: 'What type of license badge would you like to add?',
        name: 'license',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause']
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    }, 
    {
        type: 'input',
        message: 'Please provide a description of your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How do you use your project?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'authors'
    },
    {
        type: 'input',
        message: 'What tests have you written for your project?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log('README.md has been created');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md', generateMarkdown(data));
    });
}

// Function call to initialize app
init();
