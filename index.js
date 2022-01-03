const inquirer = require("inquirer");
const fs = require("fs");

// import from modules

const createEmployees = require("./assets/employeeGeneration");
const createManager = createEmployees.createManager;
const createEngineer = createEmployees.createEngineer;
const createIntern = createEmployees.createIntern;
const htmlCreation = createEmployees.htmlCreation;


const generateTeamPageQuestion = {
    type: "list",
    name: "teamPageAnswerChoice",
    message: "Would you like to create a Team Profile Page?",
    choices: [
        new inquirer.Separator(" = Please choose Yes or No = "),
        {
            name: "Yes",
        },
        {
            name: "No",
        },
    ],
};



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

// array to ask if you would like to create a new employee

const createNewEmployeeQuestion = {
    type: "list",
    name: "createNewEmployeeYesorNo",
    message: "Would you like to add an employee?",
    choices: [
        new inquirer.Separator(" = Select Yes or No = "),
        {
            name: "Yes",
        },
        {
            name: "No",
        },
    ],
};


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


//  code to create a team page
 createTeamPage();

//code to prompt the create team page
 function createTeamPage() {
    inquirer.prompt(generateTeamPageQuestion).then((generateTeamPageAnswer) => {
        if (generateTeamPageAnswer.teamPageAnswerChoice === "End") {
            process.exit();
        }
        createManagerFromInput();
    });
 }

// create a manager
function createManagerFromInput() {
    inquirer.prompt(managerQuestionList).then((managerAnswerInput) => {

    createManager(managerAnswerInput);
    createNewEmployee();

    });


}

async function createNewEmployee() {
    await inquirer.prompt(employeeTypeSelection).then((employeeTypeSelectionAnswers) => {
        if (employeeTypeSelectionAnswers.employeeType === "Yes") {
            createNewEmployeeInfo();
        } else {
            htmlCreation();
        }
    });
}

//what type of employee would you like to generate

function createNewEmployeeInfo() {
    inquirer.prompt(employeeTypeSelection).then((employeeTypeSelectionAnswer) => {
        console.log(employeeTypeSelectionAnswer.employeeType);
        if (employeeTypeSelectionAnswer.employeeType === "Intern") {
            createInternInfo();
        } else {
            createEngineerInfo();
        }
    });
}

function createInternInfo() {
    inquirer.prompt(internQuestionList).then((internAnswerResponses) => {
     createIntern(internAnswerResponses)
     createNewEmployee();
     
    });
}

function createEngineerInfo() {
    inquirer.prompt(engineerQuestionList).then((engineerAnswerResponses) => {
        createEngineer(engineerAnswerResponses)
        createNewEmployee();
    });
}