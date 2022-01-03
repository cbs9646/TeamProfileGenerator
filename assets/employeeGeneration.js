const fs = require("fs");

const arrayOfEmployees = [];

let createIntern  = (internAnswers) => {
    const { intern, internsIdNumber, internsEmail, internsSchoolAttended } =
    internAnswers;

let internBox = `<div class="box" style="width: 17rem;">
    <div class="box-body">
        <h3 class="box-title bgred">Intern</h3>
        <h4 class="box-title">${intern}</h4>
        <p class="box-text">
        Employee ID: ${internsIdNumber}
        <br>
        School: ${internsSchoolAttended}
        <br>
        Email: ${internsEmail}
        </div>
        </div>`;

    arrayOfEmployees.push(internBox);
    return arrayOfEmployees;

};
let createManager  = (managerAnswers) => {
    const { manager, managersIdNumber, managersEmail, managersOffice } =
    managerAnswers;

let managerBox = `<div class="box" style="width: 17rem;">
    <div class="box-body">
        <h3 class="box-title bgred">Manager</h3>
        <h4 class="box-title">${manager}</h4>
        <p class="box-text">
        Employee ID: ${managersIdNumber}
        <br>
        Office Number: ${managersOffice}
        <br>
        Email: ${managersEmail}
        </div>
        </div>`;

    arrayOfEmployees.push(managerBox);
    return arrayOfEmployees;

};
let createEngineer  = (engineerAnswers) => {
    const { engineer, engineersIdNumber, engineersEmail, engineersGithub } =
    managerAnswers;

let engineerBox = `<div class="box" style="width: 17rem;">
    <div class="box-body">
        <h3 class="box-title bgred">Engineer</h3>
        <h4 class="box-title">${engineer}</h4>
        <p class="box-text">
        Employee ID: ${engineersIdNumber}
        <br>
        Github: ${engineersGithub}
        <br>
        Email: ${engineersEmail}
        </div>
        </div>`;

    arrayOfEmployees.push(engineerBox);
    return arrayOfEmployees;

};



let htmlCreation = () => {
    let totalArray = arrayOfEmployees.join(" ");
}











const createEmployees = {
    createManager,
    createIntern,
    createEngineer,
    htmlCreation,
};

module.exports = createEmployees;





