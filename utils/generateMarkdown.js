// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license==="MIT"){
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    if(license==="BSD 3"){
      return`([![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause))`
    }
    if(license==="ISC"){
      return`[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    }
    if(license==="SIL"){
      return`[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1`
    }
  }
  
  // // TODO: Create a function that returns the license link
  // // If there is no license, return an empty string
  // function renderLicenseLink(license) {}
  
  // // TODO: Create a function that returns the license section of README
  // // If there is no license, return an empty string
  // function renderLicenseSection(license) {}
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  
  ${data.description}
  
  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contributing
  
  ${data.contributing}
   
  ## Test
  
  ${data.test}
  
  ## Questions
  ${data.questions}
  
  
  `;
  }
  
  module.exports = generateMarkdown;