// Toggle Menu 


let menuIcon = document.querySelector('.menu-icon');
let linksHolder = document.querySelector('.small-screen-links');


menuIcon.addEventListener('click' , () => {
    menuIcon.classList.toggle('toggled')
    linksHolder.classList.toggle('toggled');
})