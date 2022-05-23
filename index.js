const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'GitHub Username'
      },  
    {
        type: 'input',
        name: 'email',
        message: 'Email Address'
      },  
    {
        type: 'input',
        name: 'title',
        message: 'Project Title'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Installation'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Usage'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Select the License',
        choices: ['MIT','Apache','GNU GPL v3']
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Contributing'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Tests'
      }
    ];

// Function to prompt user to answer Questions
function promptUser() {
    return inquirer.prompt(questions);
}


// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err){
            throw err;
        }
        console.log("Your README file has been generated")
    });
};

// Function to initialize app
function init() {
    promptUser()
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then(pageMarkdown => {
        writeToFile('./dist/README.md',pageMarkdown);
    }) 
    .catch(err => {
        console.log(err);
    });
}

// Function call to initialize app
init();
