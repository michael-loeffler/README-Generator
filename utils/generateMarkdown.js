//------------------------------ generateMarkdown MODULE ------------------------------//

//-- FUNCTIONS --//
//- Creates a function that returns a license badge based on which license is passed in. If there is no license, it returns an empty string. -//
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case "Apache":
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case "GPLv2":
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case "GPLv3":
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case "BSD 3-clause":
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case "MPL 2.0":
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case "No License":
      return '';
    default:
      return '';
  }
}
//- Creates a function that returns a link to a license webpage based on which license is passed in. If there is no license, it returns an empty string. -//
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return 'https://choosealicense.com/licenses/mit/';
    case "Apache":
      return 'https://choosealicense.com/licenses/apache-2.0/';
    case "GPLv2":
      return 'https://choosealicense.com/licenses/gpl-2.0/';
    case "GPLv3":
      return 'https://choosealicense.com/licenses/gpl-3.0/';
    case "BSD 3-clause":
      return 'https://choosealicense.com/licenses/bsd-3-clause/';
    case "MPL 2.0":
      return 'https://choosealicense.com/licenses/mpl-2.0/';
    case "No License":
      return '';
    default:
      return '';
  }
}
// Creates a function that returns the license section of README using a template literal and the renderLicenseLink function. If there is no license, it returns an empty string. -//
function renderLicenseSection(license) {
  if (license != "No License") {
    return `Covered under the ${license} License. For more details and to view the license in full, please visit the [${license} License Webpage](${renderLicenseLink(license)}).`
  } else {
    return ''
  }
}
// Creates a function that generates the markdown content for README using a template literal, the renderLicenseBadge function, the renderLicenseSection function, and the 'data' object obtained from the inquirer prompts. -//
function generateMarkdown(data) {
  return `# ${data.title} 

  ${renderLicenseBadge(data.license)}

  ## Description
      
  ${data.descr}
      
  ## Table of Contents
          
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
      
  ## Installation
      
  ${data.install}
      
  ## Usage
      
  ${data.usage}
      
  ## License
      
  ${renderLicenseSection(data.license)}

  ## Contributing
      
  ${data.contribution}
      
  ## Tests
  
  ${data.test}
      
  ## Questions
  
  Please visit my [GitHub profile](https://github.com/${data.gitHub}) or [send me an email with any additional questions.](mailto:${data.email})`;
}
//----- MODULARLIZES THIS FILE AND MAKES ITS METHODS ACCESSIBLE FROM OTHER JS FILES -----// 
module.exports = {
  generateMarkdown,
};