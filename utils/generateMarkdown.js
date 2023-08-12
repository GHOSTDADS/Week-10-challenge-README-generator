// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //check if no licnse was selected, return empty string if so.
  let url = license;
  if(url == "No License"){
    return '';
  }

  // checks what license was selected and formats it to fit the badge url.
  switch(license) {
    case 'Apache License 2.0':
      url = 'Apache_2.0';
      break;
    case 'GNU General Public License v3.0':
      url = 'GNU_GPL_3.0';
      break;
    case 'MIT License':
      url = 'MIT'
      break;
    case 'BSD 2-Clause "Simplified" License':
      url = 'BSD_2_clause';
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      url = 'BSD_3_clause'
      break;
    case 'Boost Software License 1.0':
      url = 'Boost_1.0'
      break;
    case 'Creative Commons Zero v1.0':
      url = 'Creative_Commons_Zero_1.0';
      break;
    case 'Eclipse Public License 2.0':
      url = 'Eclipse_2.0';
      break;
    case 'GNU Affero General Public License v3.0':
      url = 'GNU+AGPL_3.0';
      break;
    case 'GNU General Public License v2.0':
      url = 'GNU+GPL_2.0'
      break;
    case 'GNU Lesser General Public License v2.1':
      url = 'GNU_LGPL_2.1';
      break;
    case 'Mozilla Public License 2.0':
      url = 'Mozilla_2.0';
      break;
    case 'The Unlicense':
      url = 'The_Unlicense';
      break;
  }

  // returns the MD format for the badge
  return `![${license}](https://img.shields.io/badge/License-${url}-green)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let url;
  // change the link URL based on what lisence selected
  switch(license) {
    case 'Apache License 2.0':
      url = 'apache-2.0';
      break;
    case 'GNU General Public License v3.0':
      url = 'gpl-3.0';
      break;
    case 'MIT License':
      url = 'mit'
      break;
    case 'BSD 2-Clause "Simplified" License':
      url = 'bsd-2-clause';
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      url = 'bsd-3-clause'
      break;
    case 'Boost Software License 1.0':
      url = 'bsl-1.0'
      break;
    case 'Creative Commons Zero v1.0':
      url = 'cc0-1.0';
      break;
    case 'Eclipse Public License 2.0':
      url = 'epl-2.0';
      break;
    case 'GNU Affero General Public License v3.0':
      url = 'agpl-3.0';
      break;
    case 'GNU General Public License v2.0':
      url = 'gpl-2.0'
      break;
    case 'GNU Lesser General Public License v2.1':
      url = 'lgpl-2.1';
      break;
    case 'Mozilla Public License 2.0':
      url = 'mpl-2.0';
      break;
    case 'The Unlicense':
      url = 'unlicense';
      break;
  }

  return `https://choosealicense.com/licenses/${url}/`;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //get the license link and set to consts
  if(license == "No License"){
    return '';
  }
  const licenseLink = renderLicenseLink(license);

  return `
          \n## License
          \nThis project is licensed under the ${license} - see the [License](${licenseLink}) page for more details.
          `

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //generate the license badge and the license section if there is one.
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  const license = data.license;

  var markDown = `# ${data.title}
  \n ${licenseBadge}
  \n## Description
  \n${data.description}
  \n## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ${licenseSection ? "- [License](#license)" : `${licenseSection}`}
  \n## Installation
  \n${data.installation}
  \n## Usage
  \n${data.usage}
  \n## Contributing
  \n${data.contribution}
  \n## Tests
  \n${data.tests}
  \n## Questions
  \n${data.username}'s [GITHUB](https://github.com/${data.username})
  \nIf you have any questions regarding this project please contact me at [${data.email}](${data.email}).
  ${licenseSection ? `${licenseSection}` : ""}
  `;
  return markDown;
}

module.exports = generateMarkdown;
