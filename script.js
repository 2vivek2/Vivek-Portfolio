//Select Page

const currentNavLinks = document.querySelectorAll('.navLink')

currentNavLinks.forEach((navLink,index)=>{
    navLink.addEventListener("click", ()=>{
        currentNavLinks.forEach((navLink)=>{
        navLink.style.backgroundColor = 'none'
        navLink.style.color = 'white'

      })
      navLink.style.backgroundColor = 'none'
      navLink.style.color = '#ff6d00'
    })

  })

  //Text typing effect

 

  const skills = [
    {
      skillNames: "HTML" ,
      skillDesc: "Create a best Skeleton for your user friendly websites" ,
    },
    {
      skillNames: "CSS",
      skillDesc: "Design your websites using CSS which gives the best user experience and make websites more clean and attractive",
    },
    {
      skillNames: "JS",
      skillDesc: "A lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
    },
    {
      skillNames: "React",
      skillDesc: "A free and open source front-end Javascript library for building user interface based on components",
    },
    {
      skillNames: "Bootstrap",
      skillDesc: "Bootstrap is a powerful front-end framework that simplifies web development with its comprehensive collection of pre-designed components and responsive grid system",
    },
    {
      skillNames: "Github" ,
      skillDesc: "A developers go to platform for collaborating and showcasing their code.",
    }
    
  ]

  let choosenSkill = skills[0]

  const skillNames = document.querySelector(".skillNames")
  const skillDesc = document.querySelector(".skillDesc")
  const initialSkills = document.querySelector(".skills")
  const currentSelectedSkills = document.querySelectorAll(".skillName")

// Selection of textcontent of the skills

  currentSelectedSkills.forEach((skillNames, index)=>{
  skillNames.addEventListener("click", ()=>{
    choosenSkill =  skills [index]
  
    skillNames.textContent = choosenSkill.skillNames
    skillNames.style.fontSize = "3rem"
    skillDesc.textContent = choosenSkill.skillDesc
    skillDesc.style.fontSize = "1.2rem"
    skillDesc.style.lineHeight = "25px"

  })
  })


  // Rendering of projects and their contents
  
  let projectItems = Array.from(document.querySelectorAll ('.project'))

  let projects = [
    {
      projectImage: "images/sneakers store.png",
      projectName: "Sneakers Store" ,
    },
    {
      projectImage: "images/sving muzik.png",
      projectName: "Sving Muzik" ,
    },
    {
      projectImage: "images/github wrapper.png",
      projectName: "GitHub Wrapper" ,
    },
    {
      projectImage: "images/Mousam.png",
      projectName: "Mousam App" ,
    },
    {
      projectImage: "images/Mousam.png",
      projectName: "Mousam App" ,
    },
    {
      projectImage: "images/Mousam.png",
      projectName: "Mousam App" ,
    },
    
  ]

  projectItems.forEach((element, i) => {
   const pNameElement = element.querySelectorAll(".pName")[0];
   pNameElement.innerText = projects[i].projectName
   pNameElement.style.color = "white"
   pNameElement.style.fontSize = "22px"
   pNameElement.style.fontWeight = "600"
   pNameElement.style.marginTop = "10px"
   const pImageElement = element.querySelectorAll(".pImage")[0];
   pImageElement.src = projects[i].projectImage
  })

  

  // Hamburger added

  const navLinks = document.querySelector('.nav-links')
  const hamburger = document.querySelector('.hamBurger')
  const hamBar = document.querySelector('.fa-bars')

  hamburger.addEventListener('click', ()=>{
   
    hamburger.classList.toggle('active')
    navLinks.classList.toggle('active')

    if (hamBar.classList.contains('active') || navLinks.classList.contains('active')) {
      hamBar.classList.remove('fa-bars')
      hamBar.classList.add('fa-xmark')
    }
    else {
      hamBar.classList.remove('fa-xmark');
      hamBar.classList.add('fa-bars');
    }
  })

  //Theme Selection (DarkMode And LightMode)

  const darkModeBtn = document.querySelector("#darkModeBtn");
  const themeIcon = document.querySelector('.fa-moon')
  darkModeBtn.addEventListener("click", () =>{
    let element = document.body;
    element.classList.toggle ('darkMode');
    if (element.classList.contains('darkMode')) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
    themeIcon.style.transition = '1s all easeInOut'
  })