const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown");
const fs = require('fs');

const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter project title:"
    },
    {
        type: "input",
        name: "description",
        message: "Enter project description:"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information:"
    },
    {
        type: "input",
        name: "contributions",
        message: "Enter any additional contributors to your project:"
    },
    {
        type: "input",
        name: "testInstructions",
        message: "Enter test instructions:"
    },
    {
        type: "list",
        name: "license",
        message: "Select license(s), if any:",
        choices: [
            "MIT",
            "Microsoft Public License",
            "ISC", 
            "None"
        ]
    },
    {
        type: "input",
        name: "githubUsername",
        message: "Enter the link to your github profile:"
    },
    {
        type: "input",
        name: "deployedLink",
        message: "Enter the link to your deployed project:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(
            questions
        )
        .then((answers) => {
            console.log(answers)
            writeToFile("exampleREADME.md", answers)
        })
}

// Function call to initialize app
init();



// inquirer.prompt(questions).then(answers => {
//     createMD(answers);
// });

// const createMD = data => {
//     console.log(data);
//     const template = `# My LinkdIn is ${data.linkdin} 
    
// ## My email is ${data.email}
//     `

//     console.log(template);
//     fs.writeFile('README.md', template, err => {
//         err ? console.log(err) : console.log('Success')
//    });
