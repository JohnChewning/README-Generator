// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('../utils/generateMarkdown');

// TODO: Create a function to write README file
function writeToFile(fileName, fileText) {
 
  fs.writeFile(fileName, fileText, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  // TODO: Create an array of questions for user input
    .prompt([
      { type: "input", message: "What is your name?", name: "name" },
      { type: "input", message: "What is the title of your project?", name: "title" },
      { type: "input", message: "Add the description of your project:", name: "description" },
      { type: "input", message: "Add the installation instructions of your project:", name: "installation" },
      { type: "input", message: "Add the usage information of your project:", name: "usage" },
      { type: "input", message: "Add the contribution guidelines of your project:", name: "contribution" },
      { type: "input", message: "Add the test instructions of your project:", name: "test" },
      { type: "list", message: "Select the type of license you would like for your project:", choices: ["MIT", "Apache 2.0 License", "IBM Public License Version 1.0", "Mozilla Public License 2.0", "The Unlicense"], name: "license" },
      { type: "input", message: "What is your GitHub handle?", name: "github" },
      { type: "input", message: "What is your email?", name: "email" },
    ])
    .then((data) => {
      writeToFile("sample-README.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();



