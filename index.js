const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (response) =>

    `# Title
* ${response.pTitle} by ${response.fullName}

# ![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)

## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Collaboration](#collaboration)
6. [Github](#github)
7. [eMail](#email)
8. [FAQs](#faqs)

## General Info
* ${response.projectDescription}
![${response.imgDescription}](/assets/img/${response.projectImg})

## Technologies
* This website was created with ${response.techUsed} code on Microsoft Visual Studio Code.

# Installation
* Go to https://github.com/${response.userName}/${response.repo} and copy the repository on Github by clicking the green code button.
* Open your terminal, navigate to destination you want to download this repository, and run the command:
    * $ git clone https://github.com/${response.userName}/${response.repo}.git

# Usage
* The current version of the website can be accessed at the url: https://${response.userName}.github.io/${response.repo}/
* This website can be navigated with the links at the top, or by scrolling through the website in a website browser on a computer, laptop, tablet, or cellphone.

# Collaboration
* The sole developer of this website is me, ${response.fullName}.

# Github
* The Repository can be accessed on Github at https://github.com/${response.userName}/${response.repo}

# eMail
* The best way to contact me is at ${response.eMail}.

# Frequently Asked Questions
* There are no frequently asked questions.`;

inquirer.prompt([
    {
        type: 'input',
        message: 'Full Name:',
        name: 'fullName',
    },
    {
        type: 'input',
        message: 'E-mail:',
        name: 'eMail',
    },
    {
        type: 'input',
        message: 'Github User Name:',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'Repository Name:',
        name: 'repo',
    },
    {
        type: 'input',
        message: 'Project Title:',
        name: 'pTitle',
    },
    {
        type: 'input',
        message: 'Description of Project:',
        name: 'projectDescription',
    },
    {
        type: 'input',
        message: 'Save Image in "images" in the "assets" folder and enter image name (with extension):',
        name: 'projectImg',
    },
    {
        type: 'input',
        message: 'Image Description:',
        name: 'imgDescription',
    },
    {
        type: 'checkbox',
        message: 'Technologies Used: (Press <space> to select, <a> to toggle all, <i>to invert selection)',
        name: 'techUsed',
        choices: ['HTML', 'CSS', 'JavaScript', 'Node JS'],
    },
    {
        type: 'list',
        message: 'What is the project license?',
        name: 'license',
        choices: ['ISC', 'MIT', 'APPACHE 2.0', 'NONE'],
    },
]
)
    .then((response) => {

        const readMeContent = generateREADME(response)

        var saveTo = 'generatedREADME.md'
        // if (response.fullName === 'Troy N Johnson') {
        // saveTo = fileSaverTroy()
        // }


        fs.writeFile(saveTo, readMeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    }).catch((error) => {
        console.error(error);
    });


// function fileSaverTroy() {

//         inquirer.prompt([
//             {
//                 type: 'input',
//                 message: 'Enter The folder name to save the generated README.md (in /homework)',
//                 name: 'folderName',
//             }])

//             .then((data) => {

//                 console.log("data.folderName: ", data.folderName)

//                 //"C:/Users/tjohn/OneDrive/Desktop/Full Stack Development/Homework/betterReadme/README.md"
//                 //path.join('Users', 'tjohn', "..", 'homework','betterReadme', 'README.MD')
//                 //var hwFilePath = "C:/Users/tjohn/OneDrive/Desktop/Full Stack Development/Homework/"
//                 //var folderDestination = hwFilePath.concat(data.folderName.toString()) 
//                  //console.log("folderDestination Type: ", typeof folderDestination)

//                  //return "C:/Users/tjohn/OneDrive/Desktop/Full Stack Development/Homework/betterReadme/README.md"
//                  return 'C:/Users/tjohn/OneDrive/Desktop/README.md'
//                  //return path.join('C:', 'Users', 'tjohn', "..", 'homework','betterReadme', 'README.MD')

//             })
//     }
