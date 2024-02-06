// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
  ![licence-badge](https://img.shields.io/badge/Licence-${data.licence}-blue)
## Description

${data.description}

## Table of Contents 

[Installation](#installation)  
[Usage](#usage)  
[Credits](#credits)  
[License](#license)  

## Installation

${data.install}

## Usage

${data.usage}

## Credits

${data.credits}

## License

This application is covered under the ${data.licence} licence.

## How to Contribute

${data.contribution}

## Questions

GitHub : ${data.git}

For more questions please contact me at ${data.email}

`;
}

module.exports = generateMarkdown;
