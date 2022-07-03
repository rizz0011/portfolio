/*--Show Menu--*/
const showMenu = (toggleId,navId) => {
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);
    if(toggle && nav) {
        toggle.addEventListener('click' , () => {
            nav.classList.toggle('show');
        });
    }
}
showMenu('nav-toggle','nav-menu');

/*--Remove Menu mobile--*/
const navLink = document.querySelectorAll('.nav-link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click' , linkAction));



/*Scroll reveal animation*/
const sr = ScrollReveal({
    origin : 'top',
    distance : '80px',
    duration : 2000,
    reset: true
});




/*scroll home*/
sr.reveal('.home-title' , {});
sr.reveal('.home-scroll' , {delay:200});
sr.reveal('.home-img' , {origin:'right',delay:400});
/*scroll about*/
sr.reveal('.about-img' , {delay:500});
sr.reveal('.about-subtitle' , {delay:300});
sr.reveal('.about-profession' , {delay:400});
sr.reveal('.about-text' , {delay:500});
sr.reveal('.about-social' , {delay:600});
/*scroll skills*/
sr.reveal('.skills-subtitle' , {origin:'left',delay:500});
sr.reveal('.skills-name' , {distance:'20px',delay:100,interval:100});
sr.reveal('.skills-name' , {delay:400});
/*scroll portfolio*/
sr.reveal('.portfolio-img' , {interval:200});
/*scroll contact*/
sr.reveal('.contact-subtitle' , {interval:200});
sr.reveal('.contact-input' , {interval:200});
sr.reveal('.contact-text' , {interval:300});
sr.reveal('.contact-button' , {interval:400});

//contact submit

const nameVal = document.getElementById('name');
const emailVal = document.getElementById('email');
const queryVal = document.querySelector('.contact-input-textarea')
const btnVal = document.getElementById('submitbtn');
btnVal.addEventListener('click' , (event) => {
    if(nameVal.value == '' || emailVal.value == '' || queryVal.value == '') {
        confirm("Response can't be empty");
    }
    else {
    alert('Your response have been submitted')
    nameVal.value = '';
    emailVal.value = '';
    queryVal.value = '';
    }
    event.preventDefault();
})

