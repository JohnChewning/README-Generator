// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ''; // No license, return empty string
  }

  // Map the license to its corresponding badge URL (replace 'LICENSE_TYPE' with the actual license type)
  const badgeURL = `https://img.shields.io/badge/license-${license}-brightgreen`;
  return `![License](${badgeURL})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ''; // No license, return empty string
  }

  // Map the license to its corresponding URL or replace 'LICENSE_TYPE' with the actual license type URL
  const licenseURL = `https://opensource.org/licenses/${license}`;
  return `[License](${licenseURL})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''; // No license, return empty string
  }

  // You can customize this section with additional details or just use the badge and link
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
${licenseLink}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, please contact ${data.email}.
${licenseSection}
`;
}

module.exports = generateMarkdown;
