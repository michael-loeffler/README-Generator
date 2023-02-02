# README Generator 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
    
README Generator is a command-line application that prompts a user for information about their coding project and quickly produces a professional, high-quality README file for that project. 

I was motivated to create this application because coding projects often take a significant amount of time and effort to complete. Developers should be able to invest as much time as possible into the actual development of their projects and not lose time when creating their README files. Additionally, README files almost always take on the same general format and are a necessity for every project. Therefore, following the DRY philosophy ("Don't Repeat Yourself"), building a tool to quickly construct the general outline of a README file while filling it dynamically with user data is an endeavor in increasing efficiency. Let it not be understated however the value of a high-quality README file. While this application strives to decrease the time required to create a README file, it also strives to increase the quality of README files. When a README is organized, interactive, and rich with links and badges (as well as images/gifs/videos), it demonstrates a developer's commitment to excellent documentation and displays their skills for potential future employers. 

Through working on this project, I have learned about Node.js and how to use the various libraries/packages within to accept user input and output files for their use. Some of the biggest points of learning include:

* Node.js
    * The File System (fs) Library to read and write files
    * The Inquirer Package to prompt and store user data
* Using modularization to store data and/or functions in a separate utility file that can be imported into your main index.js for use
* Using template literals to write data stored in variables/objects directly into strings to be displayed on screen
* Switch-Case Statements
* Adding badges to README files
    
## Table of Contents
        
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
    
1. Install Node.js
    - [Download Version 16 of Node.js](https://nodejs.org/download/release/v16.18.0/node-v16.18.0-x64.msi)
2. Clone this repo
   ```sh
   git clone https://github.com/michael-loeffler/README-Generator.git
   ```
3. Create a package.json
   ```sh
   npm init
   ```
4. Install the Inquirer package
   ```sh
   npm i inquirer@8.2.4
   ```
5. Invoke the application in the command-line using the following command
   ```sh
   node index.js
   ```
    
## Usage
    
The README Generator functions as a command-line application. After following the installation instructions above, whenever users want to create a README file for a project they simply invoke the application using the command "node index.js". All script for this application is written into an init() function that will run immediately when the application is invoked. The Inquirer package will prompt the user with questions to gather all pertinent information to create a professional README file. The user's data is passed as an object into a function that will write the file using the fs library. In that process, the user data object is passed into a series of functions to generate the markdown text to be written into the file. Most of the user data is added to the markdown text directly using a template literal, while the license chosen by the user is passed into two switch-cases to retrieve information to create a license badge and a hyperlink to the full license text. The file that is created will be named "generatedREADME.md".

### --- Video demonstration of application's functionality ---

Please review the [demonstration video](https://drive.google.com/file/d/17rqFUdYIMLsRvTYWKeA0RGSfGleac7Ae/view) to see how the app functions and experience the user perspective. Alternatively, view a sample of the [final output](./sampleGeneratedREADME.PNG). 

## Credits

- [Professional README Guide, The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
- [Choosealicense.com](https://choosealicense.com)
- [Markdown License Badges, Github Gist page](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)
- [Shield.io License Badges](https://shields.io/category/license)
- [Best-README-Template, GitHub Repo](https://github.com/othneildrew/Best-README-Template/blob/master/BLANK_README.md)

## License
    
Covered under the MIT License. For more details and to view the license in full, please visit the [MIT License Webpage](https://choosealicense.com/licenses/mit/).

## Contributing
    
If you have a suggestion for improvement, please fork the repo and create a pull request. You can also open an issue and tag it for "enhancement".
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/featureName`)
3. Commit your Changes (`git commit -m 'adds featureName'`)
4. Push to the Branch (`git push origin feature/featureName`)
5. Open a Pull Request
    
## Tests

N/A
    
## Questions

Please visit my [GitHub profile](https://github.com/michael-loeffler) or [send me an email with any additional questions.](mailto:michaelloeffler23@gmail.com)