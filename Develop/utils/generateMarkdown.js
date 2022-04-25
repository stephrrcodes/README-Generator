// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderlicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (license === "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]";
  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
  }  else {
      license = ' '
    }
 return renderlicenseBadge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license === "IBM") {
    return "(https://opensource.org/licenses/IPL-1.0)";
  } else if (license === "Mozilla") {
    return "(https://opensource.org/licenses/MPL-2.0)";
  }  else {
      renderLicenseLink = ' '
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None'){
    licenseSection = ' '
  } else {
    licenseSection = 
    `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.licenseSection}
  
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
  * ${data.usage}

  ## Contributor Guidelines
  * ${data.contributions}

  ## Test Instructions
  * ${data.test}

  ## License
  * Licensed under the ${data.licenseSection}

  ## Contact Information
  Creator: ${data.creator}
  * EMAIL: ${data.email}
  * Github: [${data.userName}](http://github.com/${data.userName});
}
`;
}

module.exports = generateMarkdown;
