// const fs = require("fs");
// const generatePage = require("./src/page-template");
//
// const pageHTML = generatePage(name, github);
//
// fs.writeFile("./index.html", pageHTML, (err) => {
//   if (err) throw err;
//
//   console.log("Portfolio complete! Check out index.html to see the output");
// });

const inquirer = require("inquirer");
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "about",
      message: "Provide some information about yourself:",
    },
  ]);
};

// if there's no 'projects' array property, create one
const promptProject = (portfolioData) => {
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }

  console.log(`
=================
Add a New Project
=================
`);

  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of your project?",
        },
        {
          type: "input",
          name: "description",
          message: "Provide a description of the project (Required)",
        },
        {
          type: "input",
          name: "link",
          message: "Enter the Github link to your project (Required)",
        },
        {
          type: "confirm",
          name: "feature",
          message: "Would you like to feature this project?",
          default: false,
        },
        {
          type: "confirm",
          name: "confirmAddProject",
          message: "Would you like to enter another project?",
          default: false,
        },
      ])
      // if they want to add another project
      .then((projectData) => {
        portfolioData.projects.push(projectData);
        // does the user want to add another project?
        if (projectData.confirmAddProject) {
          // yes i want to add another project
          return promptProject(portfolioData);
        } else {
          // no more projects to add
          return portfolioData;
        }
      })
  );
};

promptUser()
  .then(promptProject)
  .then((portfolioData) => {
    console.log(portfolioData);
  });
