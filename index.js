const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (answers) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README Generator</title>
</head>
<body>
    <header>
        <h1>${answers.title}</h1>
    </header>
    <main>
        <div>
            <p>${answers.description}</p>
        </div>
        <div>
            <h4>Table of Contents</h4>
            <p><a href="#installation">Installation</a></p>
            <p><a href="#usage">Usage</a></p>
            <p><a href="#license">License</a></p>
            <p><a href="#contributing">Contributing</a></p>
            <p><a href="#tests">Tests</a></p>
            <p><a href="#questions">Questions</a></p>
        </div>
        <div>
            <h4><a id=installation>Installation</a></h4>
            <p>${answers.installation}</p></div>
        <div>
            <h4><a id="usage">Usage</a></h4>
            <p>${answers.usage}</p>
        </div>
        <div>
            <h4><a id="license">License</a></h4>
            <p>${answers.license}</p>
        </div>
        <div>
            <h4><a id="contributing">Contributing</a></h4>
            <p>${answers.contributing}</p>
        </div>
        <div>
            <h4><a id="tests">Tests</a></h4>
            <p>${answers.tests}</p>
        </div>
        <div>
            <h4><a id="questions">Questions?</a></h4>
            <p>Find me on <a href="http://www.github.com/${answers.github}">GitHub</a></p>
            <p>Send me an <a href="mailto:${answers.email}" target="_blankl">email</a></p>
        </div>
    </main>
</body>
</html>`

inquirer
.prompt([
    {type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
    },
    {type: 'input',
    name: 'description',
    message: 'Project description'
    },
    {type: 'input',
    name: 'installation',
    message: 'How do you install it?'
    },
    {type: 'input',
    name: 'usage',
    message: 'How should it be used?'
    },
    {type: 'input',
    name: 'license',
    message: 'How is it licensed?'
    },
    {type: 'input',
    name: 'contributors',
    message: 'Who are the contributors?'
    },
    {type: 'input',
    name: 'tests',
    message: 'What tests have been done on the project?'
    },
    {type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
    },
    {type: 'input',
    name: 'email',
    message: 'What email should people send questions to?'
    },
])
.then ((answers) => {
    const contentREADME = generateREADME(answers)
    fs.writeFile('README.md', contentREADME, (err) =>
    err? console.log(error) : console.log('README file created'));
});