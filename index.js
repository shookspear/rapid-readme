const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
//const questions = [];

const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Project Title',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your Project Title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter your Description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'tableOfContents',
        message: 'Table of Contents',
        validate: tableOfContentsInput => {
            if (tableOfContentsInput) {
              return true;
            } else {
              console.log('Please enter your Table of Contents');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Installation',
        validate: installationInput => {
            if (installationInput) {
              return true;
            } else {
              console.log('Please enter your Installaton');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Usage',
        validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('Please enter your Usage');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'license',
        message: 'License',
        validate: licenseInput => {
            if (licenseInput) {
              return true;
            } else {
              console.log('Please enter your License');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Contributing',
        validate: contributingInput => {
            if (contributingInput) {
              return true;
            } else {
              console.log('Please enter your Contributing');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Tests',
        validate: testsInput => {
            if (testsInput) {
              return true;
            } else {
              console.log('Please enter your Tests');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Questions',
        validate: questionsInput => {
            if (questionsInput) {
              return true;
            } else {
              console.log('Please enter your Questions');
              return false;
            }
          }
      }
    ]);
  };



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
