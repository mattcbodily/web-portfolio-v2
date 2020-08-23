//dropdown functionality
function menuToggle(){
    const dropdown = document.querySelector('.dropdown-menu');

    dropdown.classList.toggle('open')
}

//scroll functionality
function smoothScroll(element){
    const targetElement = document.querySelector(element);

    if(screen.width <= 480 ){
        targetElement.scrollIntoView({behavior: 'smooth', block: 'start'});
    } else {
        targetElement.scrollIntoView({behavior: 'smooth', block: 'end'});
    }

    menuToggle();
}

//skills section
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

//projects section
const projectURL = './assets/project-assets/',
      projects = [
        {name: 'Chatter', image: `${projectURL}chatter-portfolio.png`, description: 'Chat application built with React, Redux, Sass, Node, Express, and PostgreSQL', gitHub: 'https://github.com/mattcbodily/chatter-v2', liveSite: 'http://134.209.2.212:3333'},
        {name: 'Pokédex', image: `${projectURL}pokedex-portfolio.png`, description: 'Pokédex application built with React (including React hooks), and the PokeAPI', gitHub: 'https://github.com/mattcbodily/front-end-pokedex', liveSite: 'https://pokedex-developer-project.netlify.app/#/'},
        {name: 'Arcade', image: `${projectURL}arcade-portfolio.png`, description: "Arcade is where I store games I've built using HTML, CSS, and JavaScript.", gitHub: '', liveSite: 'routes/arcade-landing/arcade-landing.html'}
      ]

for(let j = 0; j < projects.length; j++){
    const projectDisplay = document.querySelector('.project-display'),
          projectCard = document.createElement('div'),
          projectImage = document.createElement('img'),
          projectTextContainer = document.createElement('div'),
          projectText =  document.createElement('p'),
          btnContainer = document.createElement('div');

    projectCard.classList.add('project-card');
    projectImage.classList.add('project-image');
    projectTextContainer.classList.add('project-text-container');
    projectText.classList.add('project-text');

    projectImage.src = projects[j].image;
    projectImage.alt = projects[j].name;
    projectCard.appendChild(projectImage);

    projectText.innerText = projects[j].description;
    projectTextContainer.appendChild(projectText);
    projectCard.appendChild(projectTextContainer);

    if(projects[j].gitHub){
        const gitHubLink = document.createElement('a'),
              gitHubBtn = document.createElement('button');

        gitHubBtn.classList.add('link-button');

        gitHubBtn.innerText = 'View on GitHub';
        gitHubLink.href = projects[j].gitHub;
        gitHubLink.target = '_blank';

        gitHubLink.appendChild(gitHubBtn);
        btnContainer.appendChild(gitHubLink);
    }

    if(projects[j].liveSite){
        const liveSiteLink = document.createElement('a'),
              liveLinkBtn = document.createElement('button');

        liveLinkBtn.classList.add('link-button');

        if(projects[j].name === 'Arcade'){
            liveLinkBtn.innerText = 'Play Now!'
        } else {
            liveLinkBtn.innerText = 'View Live Site'
        }
        liveSiteLink.href = projects[j].liveSite;
        liveSiteLink.target = '_blank';

        liveSiteLink.appendChild(liveLinkBtn);
        btnContainer.appendChild(liveSiteLink);
    }

    projectTextContainer.appendChild(btnContainer);
    projectDisplay.appendChild(projectCard);
}