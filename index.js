const baseUrl = './assets/skill-assets/',
      htmlIcon = {url: `${baseUrl}html5.png`, alt: 'HTML'},
      cssIcon = {url: `${baseUrl}css3.png`, alt: 'CSS'},
      sassIcon = {url: `${baseUrl}sass.png`, alt: 'Sass'},
      jsIcon = {url: `${baseUrl}javascript3.png`, alt: 'JavaScript'},
      postgresIcon = {url: `${baseUrl}postgres.png`, alt: 'PostgreSQL'},
      reactIcon = {url: `${baseUrl}react2.png`, alt: 'React.js'},
      reduxIcon = {url: `${baseUrl}redux.png`, alt: 'Redux'},
      nodeIcon = {url: `${baseUrl}nodejs.png`, alt: 'Node.js'},
      expressIcon = {url: `${baseUrl}expressjslogo.png`, alt: 'Express.js'},
      gitIcon = {url: `${baseUrl}git_icon.png`, alt: 'Git'}
      jestIcon = {url: `${baseUrl}jest_icon.png`, alt: 'Jest'};
      skillsArr = [htmlIcon, cssIcon, jsIcon, sassIcon, reactIcon, reduxIcon, nodeIcon, expressIcon, postgresIcon, gitIcon, jestIcon];

for(let i = 0; i < skillsArr.length; i++){
    const skillsFlex = document.querySelector('.skills-flex');
          container = document.createElement('div'),
          skillImage = document.createElement('img'),
          skillText = document.createElement('h4');

    container.classList.add('skill-container');

    skillImage.src = skillsArr[i].url;
    skillImage.alt = skillsArr[i].alt;
    skillImage.classList.add('skill-icon');

    skillText.innerText = skillsArr[i].alt;
    skillText.classList.add('skill-text');

    container.appendChild(skillImage);
    container.appendChild(skillText);
    skillsFlex.appendChild(container);
}