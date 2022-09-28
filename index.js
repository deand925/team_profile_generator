const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

const generatePage = require('./src/page-template');

const internArray = [];
const engineerArray = [];
let manager;

const managerPrompt = managerData => {
  return inquirer.prompt([
    /* Pass your questions in here */
    {
      type: "input",
      name: "name",
      message: "What manager would you like?"
    },
    {
      type: "input",
      name: "id",
      message: "What is the managers employee ID number?"
    },
    {
      type: "input",
      name: "email",
      message: "What is the managers email address?"
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the managers office number?"
    },
  ])
    .then(manInput => {
      const { name, id, email, officeNumber } = manInput;
      manager = new Manager(name, id, email, officeNumber);
    })
  }

  const employeePrompt = () => {
    return inquirer.prompt([
      /* Pass your questions in here */
      {
        type: "list",
        name: "role",
        message: "Do you want a engineer or intern?",
        choices: ["intern", "engineer"]
      },

      {
        type: "input",
        name: "name",
        message: "What is the employee would you like on your team?"
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's employee ID number?"
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email address?"
      },
      {
        type: "input",
        name: "gitHub",
        message: "What is the engineers GitHub?",
        when: (input) => input.role === "engineer"
      },
      {
        type: "input",
        name: "school",
        message: "What school are you attending?",
        when: (input) => input.role === "intern"
      },
      {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add more team members?'
      }
    ])
      .then(employeeInput => {
        let { role, name, email, id, gitHub, school, confirmAddEmployee } = employeeInput;
        let employee;

        if (role === "engineer") {
          employee = new Engineer(name, email, id, gitHub)
          engineerArray.push(employee);
        } else if (role === "intern") {
          employee = new Intern(name, email, id, school)
          internArray.push(employee);
        }

        if(confirmAddEmployee){
          return employeePrompt();
        } else {
          return ;
        }
      })
  }

  function writeFile(fileName, data) {
    fs.writeFileSync(fileName, data);
  }

  managerPrompt()
    .then(employeePrompt)
    .then(() => {
      let page = generatePage(manager, engineerArray, internArray, );
      writeFile("./dist/index.html", page);
    })
    .catch(err => {
      console.log(err)
    })