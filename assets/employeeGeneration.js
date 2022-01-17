const fs = require("fs");

const arrayOfEmployees = [];

let createIntern  = (internAnswers) => {
    const { Intern, internsIdNumber, internsEmail, internsSchoolAttended } =
    internAnswers;

let internBox = `<div class="box" style="width: 17rem;">
    <div class="box-body">
        <h3 class="box-title bgred">Intern</h3>
        <h4 class="box-title">${Intern}</h4>
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
    const { Engineer, engineersIdNumber, engineersEmail, engineersGithub } =
    engineerAnswers;

let engineerBox = `<div class="box" style="width: 17rem;">
    <div class="box-body">
        <h3 class="box-title bgred">Engineer</h3>
        <h4 class="box-title">${Engineer}</h4>
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

let generatedTeamPage = `<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
  <link rel="stylesheet" type="text/css" href="styles.css">
  <title>Team</title>
</head>
<body>
<nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center">Team</a>
      </div>
  </nav>
  <header>
  </header>
  <main>
  <div class="justify-content-center align-items-center d-flex">
  ${totalArray}
  </div>
  </main>
  <footer>
  </footer>
<script type="text/javascript" src="js/materialize.min.js"></script>  
  <script src="scripts.js"></script>

</body>
</html>`;

const output = `./index.html`;
    fs.writeFile(output, generatedTeamPage, (err) =>
    err ? console.error(err) : console.log("generated correctly")
  );
};

//Exports 

const createEmployees = {
    createManager,
    createIntern,
    createEngineer,
    htmlCreation,
};

module.exports = createEmployees;





