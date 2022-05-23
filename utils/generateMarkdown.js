// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {

  switch(license){
    case 'MIT':
      return 'https://img.shields.io/badge/License-MIT-yellow.svg';
    case 'Apache':
      return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
    case 'GNU GPL v3':
      return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    default:
      return '';
  }

};

// Function that returns the license link
function renderLicenseLink(license) {
  
  switch(license){
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GNU GPL v3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    default:
      return '';
  }

};

// Function that returns the license section of README
function renderLicenseSection(license) {
   return `## License
Licensed under the ${license} license. For more information please visit: ${renderLicenseLink(license)}   
    `
  };

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![License](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})

   

  ## Description
   ${data.description}

  ## Table of Contents
  
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing Guidelines](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Installation
   ${data.installation}

  ## Usage
   ${data.usage}

  ${renderLicenseSection(data.license)}  


  ## Contributing
   ${data.contributing}

  ## Tests
   ${data.tests}

  ## Questions

  My GitHub profile can be found here: https://github.com/${data.username}
  
  You can contact me via email for additional questions: ${data.email}

`;

}

module.exports = generateMarkdown;
