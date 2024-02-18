// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
},{
    type: 'input',
    name: 'description',
    message:'What is your project about?'
},{
    type: 'input',
    name: 'installation',
    message:'How do you install the application?'
},{
    type: 'input',
    name: 'usage',
    message: `How do you use this application?`
},{
    type: 'input',
    name: 'contribute',
    message: 'how to'
},{
    type: 'input',
    name: 'test',
    message: 'How to test?'
},{
    type: 'list',
    name: 'license',
    message: "what license is being used?",
    choices: ['MIT','BSD 3','ISC','SIL']
},
{
    type: 'input',
    name: 'contact',
    message: 'What is your email and github username?'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions).then(data=>{
        writeToFile('./output/README.md',data)
    })
}

// Function call to initialize app
init();
