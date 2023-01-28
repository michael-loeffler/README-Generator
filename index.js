// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
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
    choices: ['MIT', 'Apache', 'GPLv2', 'GPLv3', 'BSD 3-clause', 'No License'],
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readme = 
    `# ${data.title}

## Description
    
${data.descr}
    
## Table of Contents
        
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing]](#contributing)
- [Tests](#tests)
- [Questions](#questions)

    
## Installation
    
${data.install}
    
## Usage
    
${data.usage}
    
## License
    
${data.license}

## Contributing
    
${data.contribution}
    
## Tests

${data.test}
    
## Questions

Please visit my [GitHub profile](https://github.com/${data.gitHub}) or [send me an email with any additional questions.](mailto:${data.email})`;

    fs.writeFile(fileName, readme, (err) =>
    err ? console.error(err) : console.log(`Success! ${fileName} has been created!`))
}



// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const fileName = "README1.md";
            writeToFile(fileName, data)})
}

// Function call to initialize app
init();
