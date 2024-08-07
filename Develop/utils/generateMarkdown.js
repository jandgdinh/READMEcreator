// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    const badges = {
      'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
      'GPLv3': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
      'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
      'BSD 3-Clause': '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
    };
    return badges[license];
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    const links = {
      'MIT': 'https://opensource.org/licenses/MIT',
      'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
      'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
      'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause'
    };
    return links[license];
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

    This project is licensed under the ${license} License. For more information, please visit ${renderLicenseLink(license)}.`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}


  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Authors](#authors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Authors
  ${data.authors}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, please open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}).`;
}

export default generateMarkdown;
