// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function licenseBadge(license) {
  if (value === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (value === "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  } else if (value === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
}
}
module.exports = {
  licenseBadge: licenseBadge,
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.licenseBadge}
  
  ${data.description}
  
  ### Table of Contents
  1. [Description](#description)
  2. [Installation Instructions](#installation-instructions)
  3. [Usage Information](#usage-information)
  4. [Contributor Guidelines](#contributor-guidelines)
  5. [Test Instructions](#test-instructions)
  6. [License](#license)
  7. [Contact Info](#contact)

  ## Project Description
  * ${data.description}

  ## Installation Instructions
  * ${data.installation}

  ## Usage Information
  * ${data.usage-information}

  ## Contributor Guidelines
  * ${data.contributor-guidelines}

  ## Test Instructions
  * ${data.test}

  ## License
  * Licensed under the ${data.license}

  ## Contact Information
  Creator: ${data.creator}
  * EMAIL: ${data.email}
  * Github: [${data.userName}](http://github.com/${data.userName});
}
`;
}

module.exports = generateMarkdown;
