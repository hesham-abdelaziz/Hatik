// Toggle Menu 



let menuIcon = document.querySelector('.menu-icon');
let linksHolder = document.querySelector('.small-screen-links');


menuIcon.addEventListener('click' , () => {
    menuIcon.classList.toggle('toggled')
    linksHolder.classList.toggle('toggled');
})

let media = window.matchMedia('(min-width : 769px)');

window.addEventListener('resize' , () => {
    if(media.matches){
        menuIcon.classList.remove('toggled')
        linksHolder.classList.remove('toggled');
    }
    else {

    }
})



// Scroll Top
let scrollTopBtn = document.querySelector('.scrollTop');

window.addEventListener('scroll' , () =>{
    if(window.scrollY >= 200){
        scrollTopBtn.classList.add('show')
    }
    else {
        scrollTopBtn.classList.remove('show')

    }
    
})

scrollTopBtn.addEventListener('click' , () => {
    window.scrollTo({
        top : 0,
        behavior : 'smooth'
    })
})





