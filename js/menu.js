
let dfMenu = document.getElementById('df-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

dfMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

/*ROLAGEM*/ 

const element = document.getElementById('body')

function scrollToTop() {
    element.scrollIntoView({behavior: "smooth"})
}

function scrollTo(element) {
    document.querySelector(element).scrollIntoView({behavior: "smooth"});
}

document.querySelector("#mQuemSou").addEventListener('click', function(event){
    event.preventDefault();
    scrollTo("#qsou");
})

document.querySelector("#mServicos").addEventListener('click', function(event){
    event.preventDefault();
    scrollTo("#qserv");
})

document.querySelector("#mReferencia").addEventListener('click', function(event){
    event.preventDefault();
    scrollTo("#qref");
})

/*VESÃO MOBILE*/ 

document.querySelector("#moQuemSou").addEventListener('click', function(event){
    event.preventDefault();
    scrollTo("#qsou");
})

document.querySelector("#moServicos").addEventListener('click', function(event){
    event.preventDefault();
    scrollTo("#qserv");
})

document.querySelector("#moReferencia").addEventListener('click', function(event){
    event.preventDefault();
    scrollTo("#qref");
})

/*SEGUNDA PAGINA*/ 
