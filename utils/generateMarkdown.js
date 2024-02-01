// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return ''; // No license, return empty string
  }

  const badgeURL = `https://img.shields.io/badge/license-${license}-brightgreen`;
  return `![License](${badgeURL})`;
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return ''; // No license, return empty string
  }

  const licenseURL = `https://opensource.org/licenses/${license}`;
  return `[License](${licenseURL})`;
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (!license) {
    return ''; // No license, return empty string
  }

  return `
## License

This project is licensed under the [${license} license](https://opensource.org/licenses/${license}).
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
- ${licenseLink}

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
