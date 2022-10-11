

function generateManagerCards(manager) {
    return `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
      <div class= header>
        <h2 class="card-title">${manager.getRole()}</h2>
        <h3 class="card-title">${manager.getName()}</h3>
      </div>
        <h6 class="card-subtitle mb-2 text-muted">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></h6>
        <h6 class="card-subtitle mb-2 text-muted">employee id: ${manager.getId()}</h6>
        <h6 class="card-subtitle mb-2 text-muted">office number: ${manager.getOffice()}</h6>
      </div>
    </div>
      `
  }
  


  function generateInternCard(intern) {
    let internCard = '';
    for (let i = 0; i < intern.length; i++) {
      internCard += `
          <div class="card" style="width: 18rem;">
          <div class="card-body">
          <div class= "header">
            <h2 class="card-title">${intern[i].getRole()}</h2>
            <h3 class="card-title">${intern[i].getName()}</h3>
          </div>
            <h6 class="card-subtitle mb-2 text-muted">email: <a href = "mailto: ${intern[i].getEmail()}">${intern[i].getEmail()}</a></h6>
            <h6 class="card-subtitle mb-2 text-muted">employee id: ${intern[i].getId()}</h6>
            <h6 class="card-subtitle mb-2 text-muted">school: ${intern[i].getSchool()}</h6>
          </div>
        </div>
          `
    }
    return internCard;
  }
  
  function generateEngineerCard(engineer) {
    let engineerCard = '';
    for (let i = 0; i < engineer.length; i++) {
      engineerCard += `
          <div class="card" style="width: 18rem;">
          <div class="card-body">
          <div class = header>
            <h2 class="card-title">${engineer[i].getRole()}</h2>
            <h3 class="card-title">${engineer[i].getName()}</h3>
          </div>
            <h6 class="card-subtitle mb-2 text-muted">email: <a href = "mailto: ${engineer[i].getEmail()}">${engineer[i].getEmail()}</a></h6>
            <h6 class="card-subtitle mb-2 text-muted">employee id: ${engineer[i].getId()}</h6>
            <h6 class="card-subtitle mb-2 text-muted">GitHub: <a href="https://github.com/${engineer[i].getGitHub()}">${engineer[i].getGitHub()}</a></h6>
          </div>
        </div>
          `
    }
    return engineerCard;
  }
  
  
  function generatePage(manager, engineer, intern) {
    console.log(engineer);
    console.log(intern);
    return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
    <h1>My Team</h1>
    </header>
    <div class = card-container>
    ${generateManagerCards(manager)}
    ${generateInternCard(intern)}
    ${generateEngineerCard(engineer)}
    </div>
  </body>
  </html>
  `;
  }
  
  module.exports = generatePage;