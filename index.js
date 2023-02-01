//-- PACKAGE DECLARATIONS --//
const fs = require('fs');
const inquirer = require('inquirer');
const utils = require('./utils/generateMarkdown') // pulls the generateMarkdown module into a variable called utils  //

//-- INQUIRER PROMPTS, QUESTION ARRAY --//
const questions = [
{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
},
{
    type: 'input',
    message: 'Please provide a brief description of your project:',
    name: 'descr',
},
{
    type: 'input',
    message: 'Please provide any pertinent installation instructions you would like the user to know:',
    name: 'install',
},
{
    type: 'input',
    message: 'Please provide usage information for your project:',
    name: 'usage',
},
{
    type: 'input',
    message: 'Please share contribution guidelines for your project:',
    name: 'contribution',
},
{
    type: 'input',
    message: 'Please provide instructions on how to test your project:',
    name: 'test',
},
{
    type: 'list',
    message: 'What kind of license would you like for your project?',
    name: 'license',
    choices: ['MIT', 'Apache', 'GPLv2', 'GPLv3', 'BSD 3-clause', 'MPL 2.0', 'No License'],
},
{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'gitHub',
},
{
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
}
];

//-- FUNCTIONS --//
//- Creates a function that writes the README file using the generateMarkdown function from the utils module. It also logs a message stating that the file has been created. -//
function writeToFile(fileName, data) {
    const readme = utils.generateMarkdown(data)
    
    fs.writeFile(fileName, readme, (err) =>
    err ? console.error(err) : console.log(`Success! Your ${fileName} file has been created!`))
}

//- Creates a function that initializes the app; it is called immediately when the app is ran. -//
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const fileName = "generatedREADME.md";
            writeToFile(fileName, data)})
}

//- Call of the init function at the outset to initialize app -//
init();
