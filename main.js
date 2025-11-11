const darkMode = document.getElementById('dark-mode');
const i = document.getElementById("i")
const secondUl = document.getElementById("second-ul")
const secondI = document.getElementById("i-close")
let divs = document.querySelectorAll(".carusel div")
let sections = document.querySelectorAll(".carusel section")
const toUp = document.getElementById("to-up")
const loader = document.getElementById("loader-container")
const website = document.getElementById("web-site")
const head = document.getElementById("head")
const icons = document.querySelector(".icons")
const article = document.getElementById("article")
const img = document.getElementById("container-img")
const links = document.querySelectorAll(".link")
const about = document.querySelector(".about")


i.addEventListener('click', () => {
    secondUl.style.display = "block"
    i.style.display = "none"
    secondI.style.display = "block"
})

secondI.addEventListener('click', () => {
  secondUl.style.display = "none"
  i.style.display = "block"
  secondI.style.display = "none"
})

links.forEach((link) => {
  link.addEventListener('click', () => {
    secondUl.style.display = "none"
    i.style.display = "block"
    secondI.style.display = "none"
  })
})




const savedMode = localStorage.getItem('mode');

if (savedMode === 'unformal') {
  darkMode.checked = true;
  if (window.location.pathname.endsWith('index.html')) {
    window.location.href = 'main.html';
  }
} else {
  darkMode.checked = false;
   if (window.location.pathname.endsWith('main.html')) {
    window.location.href = 'index.html';
  }
}

darkMode.addEventListener('change', () => {
  if (darkMode.checked) {
    localStorage.setItem('mode', 'unformal'); 
    window.location.href = 'main.html';
  } else {
    localStorage.setItem('mode', 'formal'); 
    window.location.href = 'index.html';
  }
});

divs.forEach((div) => {
  div.addEventListener('mouseover', ()=> {
    sections.forEach((section) => {
      section.style.opacity = "1"
      section.style.transform = "translateY(0)"
    })
  })
  div.addEventListener('mouseout', () => {
    sections.forEach((section) => {
      section.style.opacity = "0"
      section.style.transform = "translateY(200px)"
    })
  })
})

window.addEventListener('scroll', () => {
    if(scrollY > 300) {
        toUp.classList.add("show")
    } else {
        toUp.classList.remove("show")
    }
})

toUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

const promiseOne = () => {
    return new Promise(resolve=> {
        window.onload = ()=>{
           setTimeout(() => {
                loader.style.display = "none"
                website.style.display = "block"
                resolve()
           }, 800);
        }
    })
}

const promiseTwo = () => {
  return new Promise(resolve => {
      setTimeout(() => {
        head.style.transform = "translateY(0)"
        head.style.opacity = "1"
        resolve()
      }, 300);
  })
}

const promiseThree = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      icons.style.transform = "translateX(0)"
      icons.style.opacity = "1"
      resolve()
    }, 200);
  })
}

const promiseFour = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      article.style.transform = "translateX(0)"
      article.style.opacity = "1"
      resolve()
    }, 200);
  })
}

const promiseFive = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      img.style.transform = "translateX(0)"
      img.style.opacity = "1"
      resolve()
    }, 200);
  })
}

const promiseSix = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      about.style.opacity = "1"
      resolve()
    }, 300);
  })
}

const allPromises = async() => {
  try {
    const task1 = await promiseOne()
    const task2 = await promiseTwo()
    const task3 = await promiseThree()
    const task4 = await promiseFour()
    const task5 = await promiseFive()
    const task6 = await promiseSix()
  } catch (err) {
    console.log(err)
  }
}

allPromises()