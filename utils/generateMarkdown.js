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
Licensed under the ${license} license. For more information please visit: ${renderLicenseSection()}   
    `
  };


// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
   ${data.description}

  ## Table of Contents
   ${data.tableOfContents}

  ## Installation Instructions
   ${data.installation}

  ## Usage Notes
   ${data.usage}

  ## Licenses
   ${data.license}

  ## Contributing Guidelines
   ${data.contributing}

  ## Tests
   ${data.tests}

  ## Additional Questions
   ${data.username}
   ${data.email}


`;

}

module.exports = generateMarkdown;
