

const enlaces  = document.querySelector('.enlaces-header');
const hamburger = document.querySelector('.hamburguer');

let isOpen = false;

hamburger.addEventListener('click',()=>{        
    isOpen = !isOpen;    
    if (isOpen){
        hamburger.style.background = "url('../img/icon-close.svg')";
        enlaces.classList.toggle('open-enlaces')
    }else{
        hamburger.style.background = "url('../img/icon-hamburger.svg')";       
        enlaces.classList.remove('open-enlaces');       
    }    
    //background-image: url('../../img/icon-hamburger.svg');
})