// Toggle Menu 



let menuIcon = document.querySelector('.menu-icon');
let linksHolder = document.querySelector('.small-screen-links');


menuIcon.addEventListener('click' , () => {
    menuIcon.classList.toggle('toggled')
    linksHolder.classList.toggle('toggled');
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



//Open gmail 

let submitBtn = document.querySelector('.submitBtn')

submitBtn.addEventListener('click' , () => {

    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let phone = document.getElementById('phone')
    let websiteUrl = document.getElementById('website')
    let contactTime = document.getElementById('contact-time')
    submitBtn.setAttribute('href' ,
     `mailto:abosittahesham@gmail.com?subject=طلب خدمة&body=
    : الإسم  ${name.value} 
     %0A
     %0A
     : البريد الإلكتروني  ${email.value}
     %0A
     %0A
     : الجوال ${phone.value}
     %0A
     %0A
     : رابط الموقع / المتجر الإلكتروني  ${websiteUrl.value}
     %0A
     %0A
     : الوقت المناسب للإتصال بك 
     %0A
     %0A
      ${contactTime.value}
     %0A
     `)

})