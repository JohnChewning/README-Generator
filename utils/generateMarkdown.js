// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return ''; // No license, return empty string
  }
  const badgeURL = {
    "MIT License": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Apache 2.0 License": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "IBM Public License Version 1.0": "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/license/ibmpl-php/)",
    "Mozilla Public License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }
  return badgeURL[license];
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return ''; // No license, return empty string
  }
  
  const licenseURL = {
    "MIT License": "(https://opensource.org/licenses/MIT)",
    "Apache 2.0 License": "(https://opensource.org/licenses/Apache-2.0)",
    "IBM Public License Version 1.0": "(https://opensource.org/license/ibmpl-php/)",
    "Mozilla Public License 2.0": "(https://opensource.org/licenses/MPL-2.0)",
    "Unlicense": "(http://unlicense.org/)"

  }
  
  return licenseURL[license];
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (!license) {
    return ''; // No license, return empty string
  }

  //if license exists, match link to license type

   return `
## License

This project is licensed under the [${license}]${renderLicenseLink(license)}.
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, please contact [${data.email}](mailto:${data.email}).
${licenseSection}
`;
}

module.exports = generateMarkdown;
