/* Show Menu */
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementsById("nav-toggle");
const navClose = document.getElementById("nav-close");

/* Menu Show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu Hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* Remove Menu Mobile */
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* Swiper Projects */
let swiperProjects = new Swiper(".projects-container", {
  loop: true,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: " swiper-pagination",
  },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
  },
});

/* Email Js */
const contactForm = document.getElementById('contact-form')
const contactName = document.getElementById('contact-name')
const contactEmail = document.getElementById('contact-email')
const contactProject = document.getElementById('contact-project')
const contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'Write all the input fields 📩'
    } else {
        // serviceID - templateID - #form - publickey
        sendEmail.js.sendForm('', '', '', '')
            .then(() => {
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message sent ✅'

                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! SOMETHING HAS FAILED...', error)
            })
        
        contactName.value = ''
        contactEmail.value = ''
        contactProjects.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)

/* Show Scroll up */
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')

  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* Background Header */
const scrollHeader = () =>{
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('bg-header')
                     : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)