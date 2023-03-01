const inquirer = require('Inquirer');
const fs = require('fs');

const readme = ({Title, Name, Description, Installation, Usage, License, Contributing, Test, Username, Email}) =>
`# ${Title}
<br/>

## [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## ${Name}
<br/>

## Description
${Description}
<br/>

## Table
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)
<br/>

## Installation 
${Installation}
<br/>

## Usage 
${Usage}
<br/>

## License
${License}
<br/>

## Contributing 
${Contributing}
<br/>

## Test 
${Test}
<br/>

## Questions
Feel free to checkout my GitHub and ask me any questions at <a href="https://github.com/${Username}">${Username}. 
<br/>
${Email}.
<br/>`


inquirer
.prompt ([
    {
        type: "input",
        name: "Title",
        message: "What would you like to call your project?"

    },
    {
        type: "input",
        name: "Name",
        message: "What is your name?"

    },
    {
        type: "input",
        name: "Description",
        message: "What does the project do? This should be a quick summary of what the project can be used for."
    },
    {
        type: "input",
        name: "Installation",
        message: "Provide the installation requirments that were used for this project."
    },
    {
        type: "input",
        name: "Usage",
        message: "Provide instructions for use of this project."
    },
    {
        type: "list",
        name: "License",
        choices: ["MIT", "GPL", "Apache", "Mozilla"]
    },
    {
        type: "input",
        name: "Contributing",
        message: "If you would like others to contribute to this project, please provide the information to do so."
    },
    {
        type: "input",
        name: "Test",
        message: "Write solutions for your application."
    },
    {
        type: "input",
        name: "Username",
        message: "What is your Github Username?"
    },
    {
        type: "input",
        name: "Email",
        message: "What is your Github Email?"
    },
    

])

.then((data) => {
    const content = readme(data);
    fs.writeFile("README.md", content , (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });