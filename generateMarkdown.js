// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return
  }
  else {
    return `![license](https://img.shields.io/badge/license-${license}-blue)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") {
    return
  }
  else {
    return `* [License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return
  }
  else {
    return `## License
    ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Project Description](#project-description)
* [Installation Instructions](#installation-instructions)
* [Usage Information](#usage-information)
* [Test Instructions](#test-instructions)
* [Contributors](#contributors)
* [Contact Me](#contact-me)
${renderLicenseLink(data.license)}
## Project Description
${data.description} 
## Installation Instructions
${data.installation}
## Usage Information
${data.usage}
## Test Instructions
${data.testInstructions}
## Contributors
${data.contributions}
## Contact Me
Link to GitHub Profile: ${data.githubUsername}
Link to Deployed Webpage: ${data.deployedLink}
Email: ${data.email}
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;