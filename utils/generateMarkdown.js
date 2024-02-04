// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
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

## License

${data.licence}

## Badges

## How to Contribute

${data.contibution}

`;
}

module.exports = generateMarkdown;
