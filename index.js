const inquirer = require("inquirer");
const fs = require("fs");

// import from modules

const createEmployees = require("./assets/employeeGeneration");
const createManager = createEmployees.createManager;
const createEngineer = createEmployees.createEngineer;
const createIntern = createEmployees.createIntern;
const htmlCreation = createEmployees.htmlCreation;

// array code for manager's data entry 

const managerQuestionList = [
    { 
        type: "input",
        name: "manager",
        message: "Who manages this team?"
    },
    {
        type: "input",
        name: "managersIdNumber",
        message: "Please enter Manager's ID",
    },
    {
        type: "input",
        name: "managersEmail",
        message: "Please enter Manager's email",
    },
    {
        type: "input",
        name: "managersOffice",
        message: "Please enter the number for the Manager's office",
    },
];

//array to enter new employee
const employeeTypeSelection = {
    type: "list",
    name: "employeeType",
    message: "What type of employee is this?",
    choices: [
        new inquirer.Separator(" = Please select employee type you wish to create: = "),
        {
            name: "Intern",
        },
        {
            name: "Engineer",
        },
    ],
};


// Employee input questions

const internQuestionList = [
    { 
        type: "input",
        name: "intern",
        message: "Please enter this new intern's name"
    },
    {
        type: "input",
        name: "interndsIdNumber",
        message: "Please enter intern's ID",
    },
    {
        type: "input",
        name: "internsEmail",
        message: "Please enter intern's email",
    },
    {
        type: "input",
        name: "internsSchoolAttended",
        message: "Please enter the name of the school that the intern attended",
    },
];
const engineerQuestionList = [
    { 
        type: "input",
        name: "engineer",
        message: "Please enter this new engineer's name"
    },
    {
        type: "input",
        name: "engineersIdNumber",
        message: "Please enter the engineer's ID",
    },
    {
        type: "input",
        name: "engineersEmail",
        message: "Please enter the engineer's email",
    },
    {
        type: "input",
        name: "engineersGithub",
        message: "Please enter the engineers github username",
    },
];